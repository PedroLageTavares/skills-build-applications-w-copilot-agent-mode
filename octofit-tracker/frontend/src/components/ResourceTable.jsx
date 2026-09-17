import { useEffect, useState } from 'react'
import { normalizeCollectionResponse } from '../api.js'

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.length ? value.join(', ') : 'None'
  }

  if (value && typeof value === 'object') {
    return value.name ?? value.title ?? value.email ?? value._id ?? JSON.stringify(value)
  }

  if (value === null || value === undefined || value === '') {
    return 'None'
  }

  return String(value)
}

function ResourceTable({ apiEndpoint, component, title, description, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadItems() {
      try {
        setStatus('loading')
        setError('')

        const response = await fetch(apiEndpoint, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Request failed with HTTP ${response.status}`)
        }

        const payload = await response.json()
        setItems(normalizeCollectionResponse(payload))
        setStatus('ready')
      } catch (requestError) {
        if (requestError.name === 'AbortError') {
          return
        }

        setError(requestError.message)
        setStatus('error')
      }
    }

    loadItems()

    return () => controller.abort()
  }, [apiEndpoint])

  return (
    <section className="resource-view">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <span className="endpoint">{apiEndpoint}</span>
      </div>

      {status === 'loading' && <p className="state-message">Loading {title.toLowerCase()}...</p>}

      {status === 'error' && <p className="state-message error">{error}</p>}

      {status === 'ready' && items.length === 0 && (
        <p className="state-message">No records returned yet.</p>
      )}

      {status === 'ready' && items.length > 0 && (
        <div className="table-responsive">
          <table className="table align-middle octofit-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id ?? item.id ?? `${component}-${index}`}>
                  {columns.map((column) => (
                    <td key={column.key}>{formatValue(column.render ? column.render(item) : item[column.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourceTable
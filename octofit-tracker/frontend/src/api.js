const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function buildApiUrl(apiEndpoint) {
  const endpoint = apiEndpoint.replace(/^\/api\/?/, '').replace(/^\/+|\/+$/g, '')
  return `${apiBaseUrl}/${endpoint}/`
}

export function normalizeCollectionResponse(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== 'object') {
    return []
  }

  const collection = payload.results ?? payload.items ?? payload.data ?? payload.docs
  return Array.isArray(collection) ? collection : []
}
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import db from './config/database.js';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({
    service: 'octofit-tracker-backend',
    status: 'ok',
    database: db.readyState === 1 ? 'connected' : 'connecting',
  });
});

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-${port}.app.github.dev`
  : `http://localhost:${port}`;

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit Tracker API listening at ${baseUrl}/api`);
});
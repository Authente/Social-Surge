import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;
app.get("/healthz", (_req, res) => res.json({ ok: true }));
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));

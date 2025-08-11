import request from "supertest";
import { app } from "../src/app";

it("GET /healthz -> 200 {ok:true}", async () => {
  const res = await request(app).get("/healthz");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({ ok: true });
});

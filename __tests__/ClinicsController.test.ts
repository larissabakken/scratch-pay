import request from "supertest";
import app from "../src/index";

describe("Test app", () => {
  it('should respond with "Not Found" for unknown routes', async () => {
    const res = await request(app).get("/unknown-route");
    expect(res.status).toBe(404);
    expect(res.text).toBe("Not Found");
  });
});

describe("GET /clinics/search", () => {
  it("responds with JSON containing filtered clinics", async () => {
    const response = await request(app).get("/api/clinics/search?type=dental");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body.every((clinic: any) => clinic.type === "dental")).toBe(
      true
    );
  });
});

describe("GET /clinics", () => {
  it("responds with JSON containing all clinics", async () => {
    const response = await request(app).get("/api/clinics");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("dentalClinics");
    expect(response.body).toHaveProperty("vetClinics");
  });
});

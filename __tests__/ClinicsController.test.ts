const request = require("supertest");
const app = require("../app");
const { getDentalClinics, getVetClinics } = require("../lib/axios");

jest.mock("../lib/axios", () => ({
  getDentalClinics: jest.fn(),
  getVetClinics: jest.fn(),
}));

describe("ClinicsController", () => {
  describe("GET /clinics/search", () => {
    it("should return clinics based on search criteria", async () => {
      const response = await request(app).get("/clinics/search").query({
        name: "Mayo Clinic",
        state: "Florida",
        availabilityFrom: "09:00",
        availabilityTo: "20:00",
      });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        clinics: [
          {
            name: "Mayo Clinic",
            type: "dental",
            locale: "Florida",
            availability: {
              from: "09:00",
              to: "20:00",
            },
          },
        ],
      });
    });
  });
});

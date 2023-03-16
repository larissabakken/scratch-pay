import { Request, Response } from "express";
import { getDentalClinics, getVetClinics } from "../lib/axios";

interface Clinic {
  name: string;
  locale: string;
  availability: {
    from: string;
    to: string;
  };
  type: string;
}

interface Query {
  name?: string;
  locale?: string;
  from?: string;
  to?: string;
  type?: string;
}

const ClinicsController = {
  async getClinics(req: Request, res: Response) {
    try {
      const dentalClinics = await getDentalClinics();
      const vetClinics = await getVetClinics();

      const combinedData = {
        dentalClinics,
        vetClinics,
      };

      res.json(combinedData);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },
  async filterClinics(req: Request, res: Response) {
    try {
      const dentalClinics = await getDentalClinics();
      const vetClinics = await getVetClinics();

      const clinics: Clinic[] = [...dentalClinics, ...vetClinics];

      const query: Query = req.query;

      let filteredClinics: Clinic[] = clinics;

      if (Object.keys(query).length) {
        if (query.name) {
          filteredClinics = filteredClinics.filter(
            (clinic) => clinic.name === query.name
          );
        }

        if (query.locale) {
          filteredClinics = filteredClinics.filter(
            (clinic) => clinic.locale === query.locale
          );
        }

        if (query.from && query.to) {
          const fromQuery = parseInt(query.from?.replace(":", ""));
          const toQuery = parseInt(query.to?.replace(":", ""));

          filteredClinics = filteredClinics.filter((clinic) => {
            const from = parseInt(clinic.availability.from?.replace(":", ""));
            const to = parseInt(clinic.availability.to?.replace(":", ""));

            return (
              !isNaN(from) &&
              !isNaN(to) &&
              !isNaN(fromQuery) &&
              !isNaN(toQuery) &&
              from <= toQuery &&
              to >= fromQuery
            );
          });
        }

        if (query.type) {
          filteredClinics = filteredClinics.filter(
            (clinic) => clinic.type === query.type
          );
        }
      }

      res.json(filteredClinics);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },
};

export default ClinicsController;

import { Router } from "express";
import ClinicsController from "../controllers/clinics";

/**
 * @description Router for the /api endpoint
 */
const router = Router();

/**
 * @description Endpoint for getting all clinics
 */
router.get("/clinics", ClinicsController.getClinics);

/**
 * @description Endpoint for filtering clinics
 */
router.get("/clinics/search", ClinicsController.filterClinics);

export default router;

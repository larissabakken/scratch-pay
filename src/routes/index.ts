import {Router} from "express";
import ClinicsController from "../controllers/clinics";

const router = Router();

router.use((req, res, next) => {
    console.log(req.method, req.url, req.statusCode);
    next();
});
    
router.get("/clinics", ClinicsController.getClinics);
router.get("/clinics/search", ClinicsController.filterClinics);

export default router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clinics_1 = __importDefault(require("../controllers/clinics"));
/**
 * @description Router for the /api endpoint
 */
const router = (0, express_1.Router)();
/**
 * @description Endpoint for getting all clinics
 */
router.get("/clinics", clinics_1.default.getClinics);
/**
 * @description Endpoint for filtering clinics
 */
router.get("/clinics/search", clinics_1.default.filterClinics);
exports.default = router;

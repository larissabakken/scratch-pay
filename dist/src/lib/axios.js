"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVetClinics = exports.getDentalClinics = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 *
 * @returns  Array of dental clinics
 */
const getDentalClinics = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get("https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json");
    const data = response.data.map((clinic) => {
        return {
            name: clinic.name || clinic.clinicName,
            type: "dental",
            locale: clinic.stateName || clinic.stateCode,
            availability: clinic.availability || clinic.opening,
        };
    });
    return data;
});
exports.getDentalClinics = getDentalClinics;
/**
 *
 * @returns Array of vet clinics
 */
const getVetClinics = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get("https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json");
    const data = response.data.map((clinic) => {
        return {
            name: clinic.name || clinic.clinicName,
            type: "vet",
            locale: clinic.stateName || clinic.stateCode,
            availability: clinic.availability || clinic.opening,
        };
    });
    return data;
});
exports.getVetClinics = getVetClinics;

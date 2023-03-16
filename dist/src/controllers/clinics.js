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
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("../lib/axios");
/**
 * @description Controller for the clinics endpoint
 */
const ClinicsController = {
    getClinics(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dentalClinics = yield (0, axios_1.getDentalClinics)();
                const vetClinics = yield (0, axios_1.getVetClinics)();
                const combinedData = {
                    dentalClinics,
                    vetClinics,
                };
                res.json(combinedData);
            }
            catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
        });
    },
    filterClinics(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dentalClinics = yield (0, axios_1.getDentalClinics)();
                const vetClinics = yield (0, axios_1.getVetClinics)();
                const clinics = [...dentalClinics, ...vetClinics];
                const query = req.query;
                let filteredClinics = clinics;
                if (Object.keys(query).length) {
                    if (query.name) {
                        filteredClinics = filteredClinics.filter((clinic) => clinic.name === query.name);
                    }
                    if (query.locale) {
                        filteredClinics = filteredClinics.filter((clinic) => clinic.locale === query.locale);
                    }
                    if (query.from && query.to) {
                        const fromQuery = parseInt((_a = query.from) === null || _a === void 0 ? void 0 : _a.replace(":", ""));
                        const toQuery = parseInt((_b = query.to) === null || _b === void 0 ? void 0 : _b.replace(":", ""));
                        filteredClinics = filteredClinics.filter((clinic) => {
                            var _a, _b;
                            const from = parseInt((_a = clinic.availability.from) === null || _a === void 0 ? void 0 : _a.replace(":", ""));
                            const to = parseInt((_b = clinic.availability.to) === null || _b === void 0 ? void 0 : _b.replace(":", ""));
                            return (!isNaN(from) &&
                                !isNaN(to) &&
                                !isNaN(fromQuery) &&
                                !isNaN(toQuery) &&
                                from <= toQuery &&
                                to >= fromQuery);
                        });
                    }
                    if (query.type) {
                        filteredClinics = filteredClinics.filter((clinic) => clinic.type === query.type);
                    }
                }
                res.json(filteredClinics);
            }
            catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
        });
    },
};
exports.default = ClinicsController;

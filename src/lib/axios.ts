import axios from "axios";

export const getDentalClinics = async () => {
  const response = await axios.get(
    "https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json"
  );
  const data = response.data.map((clinic: any) => {
    return {
      name: clinic.name || clinic.clinicName,
      type: "dental",
      locale: clinic.stateName || clinic.stateCode,
      availability: clinic.availability || clinic.opening,
    };
  });

  return data;
};

export const getVetClinics = async () => {
  const response = await axios.get(
    "https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json"
  );
  const data = response.data.map((clinic: any) => {
    return {
      name: clinic.name || clinic.clinicName,
      type: "vet",
      locale: clinic.stateName || clinic.stateCode,
      availability: clinic.availability || clinic.opening,
    };
  });

  return data;
};

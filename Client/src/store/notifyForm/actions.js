import {
  CUSTUMER_SIGNATURE,
  MANAGER_SIGNATURE,
  GET_APPLICANT_INFO,
  ERROR,
  ERROR_2,
  RESET_INTI,
  ERROR_7,
  FOMR_DATA_7,
  INTERCOM_SETUP,
  UNDERGROUND_PARKING,
  SURFACE_PARKING,
  NOTICES
} from "./actionTypes";

export const setINTERCOM_SETUP = (data) => ({
  type: INTERCOM_SETUP,
  payload: data,
});

export const setUNDERGROUND_PARKING = (data) => ({
  type: UNDERGROUND_PARKING,
  payload: data,
});

export const setSURFACE_PARKING = (data) => ({
  type: SURFACE_PARKING,
  payload: data,
});

export const setNOTICE = (data) => ({
  type: NOTICES,
  payload: data,
});

export const getApplicationInfo = (data) => ({
  type: GET_APPLICANT_INFO,
  payload: data,
});

export const setCustumerSign = (data) => ({
  type: CUSTUMER_SIGNATURE,
  payload: data,
});

export const setManagerSign = (data) => ({
  type: MANAGER_SIGNATURE,
  payload: data,
});

export const setError = (data) => ({
  type: ERROR,
  payload: data,
});

export const setError2 = (data) => ({
  type: ERROR_2,
  payload: data,
});

export const setError7 = (data) => ({
  type: ERROR_7,
  payload: data,
});

export const setReset = () => ({
  type: RESET_INTI
});

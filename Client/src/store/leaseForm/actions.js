import {
  CUSTUMER_SIGNATURE,
  FOMR_DATA_1,
  FOMR_DATA_2,
  FOMR_DATA_3,
  MANAGER_SIGNATURE,
  GET_APPLICANT_INFO,
  ERROR,
  ERROR_2,
  RESET_INTI,
  ERROR_7,
  FOMR_DATA_7
} from "./actionTypes";

export const setFormData_1 = (data) => ({
  type: FOMR_DATA_1,
  payload: data,
});

export const setFormData_2 = (data) => ({
  type: FOMR_DATA_2,
  payload: data,
});

export const setFormData_3 = (data) => ({
  type: FOMR_DATA_3,
  payload: data,
});

export const setFormData_7 = (data) => ({
  type: FOMR_DATA_7,
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

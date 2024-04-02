import {
  CUSTUMER_SIGNATURE,
  MANAGER_SIGNATURE,
  GET_APPLICANT_INFO,
  ERROR,
  ERROR_2,
  ERROR_7,
  RESET_INTI,
  INTERCOM_SETUP,
  UNDERGROUND_PARKING,
  SURFACE_PARKING,
  NOTICES
} from "./actionTypes";

const INIT_STATE = {
  INTERCOM_SETUP: {
    BuildingNumber: "",
    PhoneNumber: "",
  },
  UNDERGROUND_PARKING: {
    ResidentName: "",
    AddressSuite: "",
    UndergroundStall: "",
    Phone: "",
    Signature: "",
  },
  SURFACE_PARKING: {
    ResidentName: "",
    AddressSuite: "",
    UndergroundStall: "",
    Phone: "",
    Signature: "",
  },
  NOTICE: {
    Name: "",
    Signature: "",
    Date: Date.now(),
  },
  error: "",
};

const nofityForm = (state = INIT_STATE, action) => {
  switch (action.type) {
    case INTERCOM_SETUP:
      return {
        ...state,
        INTERCOM_SETUP: action.payload,
      };
    case UNDERGROUND_PARKING:
      return {
        ...state,
        UNDERGROUND_PARKING: action.payload,
      };
    case SURFACE_PARKING:
      return {
        ...state,
        SURFACE_PARKING: action.payload,
      };
    case NOTICES:
      return {
        ...state,
        NOTICE: action.payload,
      };
    case GET_APPLICANT_INFO: {
      return { ...state, ...action.payload };
    }
    case CUSTUMER_SIGNATURE:
      return {
        ...state,
        custumerSignature: action.payload,
      };
    case MANAGER_SIGNATURE:
      return {
        ...state,
        managerSignature: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ERROR_2:
      return {
        ...state,
        error2: action.payload,
      };
    case ERROR_7:
      return {
        ...state,
        error7: action.payload,
      };
    case RESET_INTI:
      return {
        ...INIT_STATE,
      };
    default:
      return state;
  }
};

export default nofityForm;

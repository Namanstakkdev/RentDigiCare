import {
  CUSTUMER_SIGNATURE,
  FOMR_DATA_1,
  FOMR_DATA_2,
  FOMR_DATA_3,
  MANAGER_SIGNATURE,
  GET_APPLICANT_INFO,
  ERROR,
  ERROR_2,
  ERROR_7,
  RESET_INTI,
  FOMR_DATA_7
} from "./actionTypes"

const INIT_STATE = {
  propertyInfo: {},
  mangerInfo: {},
  formData1: {
    additionalName: [],
    tenant: [
      {
        name: "",
        signature: "",
        date: ""
      }
    ],
    buildingAddress: {
      buildingName: "",
      unitNumber: "",
      address: "",
      city: "",
      postalCode: "", 
    },
    noticeStartDate: "",
    noticeEndDate: "",
    rent: {
      commencementDate: "",
      basicRent: "",
      petFee: "",
      parkingFee: "",
      stallFee: "",
      storageFee: "",
      incentives: "",
      petFeeCheck: "No",
      parkingFeeCheck: "No",
      stallFeeCheck: "No",
      storageFeeCheck: "No",
    },
  },
  formData2: {
    securityDeposit: "",
    petSecurityFee: ""
  },
  formData3: {
    familyPersons: [
      {
        name: "",
        relationship: "",
        age: ""
      }
    ],
    utilities: {
      water: false,
      heat: false,
      electricity: false
    },
    appliances: []
  },
  formData7: {
    nameIntitals: "",
    managerSignDate: "",
  },
  custumerSignature: "",
  managerSignature: "",
  error: "",
  error2: "",
  error7: ""
}

const leaseForm = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FOMR_DATA_1:
      return {
        ...state,
        formData1: action.payload,
      }
    case FOMR_DATA_2:
      return {
        ...state,
        formData2: action.payload,
      }
    case FOMR_DATA_3:
      return {
        ...state,
        formData3: action.payload,
      }
    case FOMR_DATA_7:
      return {
        ...state,
        formData7: action.payload,
      }
    case GET_APPLICANT_INFO: {
      return { ...state, ...action.payload }
    }
    case CUSTUMER_SIGNATURE:
      return {
        ...state,
        custumerSignature: action.payload,
      }
    case MANAGER_SIGNATURE:
      return {
        ...state,
        managerSignature: action.payload,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case ERROR_2:
      return {
        ...state,
        error2: action.payload,
      }
    case ERROR_7:
      return {
        ...state,
        error7: action.payload,
      }
    case RESET_INTI:
      return {
        ...INIT_STATE
      }
    default:
      return state
  }
}

export default leaseForm

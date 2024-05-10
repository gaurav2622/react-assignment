import {
  FETCH_UNIVERSITIES_REQUEST,
  FETCH_UNIVERSITIES_SUCCESS,
  STORE_UNIVERSITY_DETAILS,
  SORT_UNIVERSITIES,
  FETCH_UNIVERSITIES_FAILURE,
} from "./actions";

//1
const initialState = {
  data: [],
  loading: false,
  universityDetails: null,
  error: null,
  sortOrder: "",
};

const universitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNIVERSITIES_REQUEST:
      return state;
    case FETCH_UNIVERSITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case STORE_UNIVERSITY_DETAILS:
      return {
        ...state,
        universityDetails: action.payload,
      };
    case SORT_UNIVERSITIES:
      return {
        ...state,
        sortOrder: action.payload,
      };
    case FETCH_UNIVERSITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default universitiesReducer;

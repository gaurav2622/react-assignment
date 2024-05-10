export const FETCH_UNIVERSITIES_REQUEST = "FETCH_UNIVERSITIES_REQUEST";
export const FETCH_UNIVERSITIES_SUCCESS = "FETCH_UNIVERSITIES_SUCCESS";
export const STORE_UNIVERSITY_DETAILS = "STORE_UNIVERSITY_DETAILS";
export const SORT_UNIVERSITIES = "SORT_UNIVERSITIES";
export const FETCH_UNIVERSITIES_FAILURE = "FETCH_UNIVERSITIES_FAILURE";
//getter
export const fetchUniversitiesRequest = () => ({
  type: FETCH_UNIVERSITIES_REQUEST,
});

//setter
export const fetchUniversitiesSuccess = (data) => ({
  type: FETCH_UNIVERSITIES_SUCCESS,
  payload: data,
});

export const storeUniversityDetails = (details) => {
  return {
    type: STORE_UNIVERSITY_DETAILS,
    payload: details,
  };
};

export const sortUniversities = (sortOrder) => ({
  type: SORT_UNIVERSITIES,
  payload: sortOrder,
});

export const fetchUniversitiesFailure = (error) => ({
  type: FETCH_UNIVERSITIES_FAILURE,
  payload: error,
});

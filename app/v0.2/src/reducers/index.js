// useDataReducer.js
import { useReducer, useEffect } from 'react';

// Define initial state
const initialState = {
  data: null,
  loading: true,
  error: null,
};

// Define action types
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case FETCH_ERROR:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Custom hook
const useDataReducer = endpoint => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        dispatch({ type: FETCH_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      }
    };

    fetchData();
  }, [endpoint]);

  return { state };
};

export default useDataReducer;

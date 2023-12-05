import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useGetData } from '../hooks/useGetData';
import { refactorTx } from '../utils/refactorTx';

// Action types
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

// Create a context
const DataContext = createContext();

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      console.log('refactor');
      const refactoredTransaction = refactorTx(action.payload);
      return {
        ...state,
        data: refactoredTransaction,
        loading: false,
        error: null,
      };
    }
    case FETCH_ERROR:
      console.log('fetcg error');
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Component that provides the context and manages state
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: true,
    error: null,
  });

  const { data, error, isLoading } = useGetData();
  console.log('Fetch data');

  useEffect(() => {
    if (data) {
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } else if (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  }, [data, error]);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };

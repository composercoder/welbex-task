import React, { useReducer, useEffect } from 'react';
import appStateReducer from '../../controller/appStateReducer';
import { AppProvider } from './AppContext';
import AppContent from './AppContent/AppContent';
import fetchTableData from '../../controller/fetchTableData';
import './App.css';


export default function App() {
  const appInitialState = {
    filterParams: '?offset=0&limit=13',
    tablePageOffset: 0,
    tablePageSize: 12,
    isTimeToFetchTableData: true,
    tableData: null,
    loading: true,
    error: null,
    allowedToTurnPage: {
      turnLeft: false,
      turnRight: false
    }
  };

  const [appState, dispatch] = useReducer(appStateReducer, appInitialState);

  useEffect(() => {
    if (appState.isTimeToFetchTableData) {
      fetchTableData(appState.filterParams, dispatch)
        .then(() => {
          dispatch({ type: 'setIsTimeToFetchTableData', payload: false });
          dispatch({ type: 'resetAllIsTimes', payload: {
            isTimeToCreateFilterParams: false,
            isTimeToFetchTableData: false,
            isTimeToTurnPage: false
          } });
        });
    }
  }, [appState.isTimeToFetchTableData]);


  return (
    <AppProvider defaultContext={[appState, dispatch]}
                 children={  <div className="wrapper">
                                <AppContent />
                             </div>}>
    </AppProvider>
  );
}

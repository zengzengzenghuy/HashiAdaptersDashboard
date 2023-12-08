import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DataProvider } from './providers/DataProvider';

import './App.css';
import Home from './pages/Home';
import Adapters from './pages/Adapters';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <Header />

        <Routes>
          {/* <Route path="/adapters" element={<Adapters />} /> */}
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} /> */}
          </Route>
        </Routes>
      </QueryClientProvider>
    </DataProvider>
  );
}

export default App;

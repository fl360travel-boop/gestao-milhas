import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

import Dashboard from './pages/Dashboard';
import Operations from './pages/Operations';
import Clients from './pages/Clients';
import Onboarding from './pages/Onboarding';
import StrategicSummary from './pages/StrategicSummary';
import Alerts from './pages/Alerts';
import TransferForm from './pages/TransferForm';
import SaleForm from './pages/SaleForm';
import RedemptionForm from './pages/RedemptionForm';
import Concierge from './pages/Concierge';
import Settings from './pages/Settings';
import Login from './pages/Login';

export default function App() {
  return (
    <HashRouter>
      <TopBar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: 24, flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/strategic-summary" element={<StrategicSummary />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/transfer" element={<TransferForm />} />
            <Route path="/sale" element={<SaleForm />} />
            <Route path="/redemption" element={<RedemptionForm />} />
            <Route path="/concierge" element={<Concierge />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}


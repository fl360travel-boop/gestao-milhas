import React from "react";
import { HashRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

import Dashboard from "./pages/Dashboard";
import Operations from "./pages/Operations";
import Clients from "./pages/Clients";
import Onboarding from "./pages/Onboarding";
import StrategicSummary from "./pages/StrategicSummary";
import Alerts from "./pages/Alerts";
import TransferForm from "./pages/TransferForm";
import SaleForm from "./pages/SaleForm";
import RedemptionForm from "./pages/RedemptionForm";
import Concierge from "./pages/Concierge";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function AppLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <TopBar />
        <div style={{ padding: 16 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Página pública */}
        <Route path="/login" element={<Login />} />

        {/* Área logada com layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </HashRouter>
  );
}

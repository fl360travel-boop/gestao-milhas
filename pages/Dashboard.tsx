import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import Operations from "./pages/Operations";
import Onboarding from "./pages/Onboarding";
import StrategicSummary from "./pages/StrategicSummary";
import Alerts from "./pages/Alerts";
import TransferForm from "./pages/TransferForm";
import SaleForm from "./pages/SaleForm";
import RedemptionForm from "./pages/RedemptionForm";
import Concierge from "./pages/Concierge";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <div style={{ padding: 16 }}>
        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
          <Link to="/">Dashboard</Link>
          <Link to="/clients">Clientes</Link>
          <Link to="/operations">Operações</Link>
          <Link to="/onboarding">Onboarding</Link>
          <Link to="/summary">Resumo</Link>
          <Link to="/alerts">Alertas</Link>
          <Link to="/transfer">Transferência</Link>
          <Link to="/sale">Venda</Link>
          <Link to="/redeem">Resgate</Link>
          <Link to="/concierge">Concierge</Link>
          <Link to="/settings">Config</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/summary" element={<StrategicSummary />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/transfer" element={<TransferForm />} />
          <Route path="/sale" element={<SaleForm />} />
          <Route path="/redeem" element={<RedemptionForm />} />
          <Route path="/concierge" element={<Concierge />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

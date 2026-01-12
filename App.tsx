
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import { SearchProvider } from './contexts/SearchContext';

const AppLayout: React.FC<{ children: React.ReactNode, onLogout: () => void }> = ({ children, onLogout }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isOnboarding = location.pathname.startsWith('/onboarding');

  // Fecha sidebar ao mudar de rota em dispositivos móveis
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-bg-dark">
      {!isOnboarding && (
        <>
          {/* Overlay Mobile */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden" 
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-300 ease-in-out z-[70] lg:z-auto`}>
            <Sidebar />
          </div>
        </>
      )}
      <div className="flex-1 flex flex-col min-w-0">
        {!isOnboarding && <TopBar onLogout={onLogout} onMenuClick={() => setIsSidebarOpen(true)} />}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem('fl360_auth_token');
    if (token === 'premium_access_granted') {
      setIsAuthenticated(true);
    }
    setIsCheckingAuth(false);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('fl360_auth_token');
    setIsAuthenticated(false);
  };

  if (isCheckingAuth) return null;

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout onLogout={handleLogout}><Dashboard /></AppLayout>} />
          <Route path="/operations" element={<AppLayout onLogout={handleLogout}><Operations /></AppLayout>} />
          <Route path="/clients" element={<AppLayout onLogout={handleLogout}><Clients /></AppLayout>} />
          <Route path="/summary" element={<AppLayout onLogout={handleLogout}><StrategicSummary /></AppLayout>} />
          <Route path="/alerts" element={<AppLayout onLogout={handleLogout}><Alerts /></AppLayout>} />
          <Route path="/transfer" element={<AppLayout onLogout={handleLogout}><TransferForm /></AppLayout>} />
          <Route path="/sale" element={<AppLayout onLogout={handleLogout}><SaleForm /></AppLayout>} />
          <Route path="/redemption" element={<AppLayout onLogout={handleLogout}><RedemptionForm /></AppLayout>} />
          <Route path="/concierge" element={<AppLayout onLogout={handleLogout}><Concierge /></AppLayout>} />
          <Route path="/settings" element={<AppLayout onLogout={handleLogout}><Settings /></AppLayout>} />
          <Route path="/onboarding/*" element={<AppLayout onLogout={handleLogout}><Onboarding /></AppLayout>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;

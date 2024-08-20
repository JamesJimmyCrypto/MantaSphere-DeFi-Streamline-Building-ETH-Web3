import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ContentProvider } from "./context/ContentContext";
import { GovernanceProvider } from "./context/GovernanceContext";
import { MarketplaceProvider } from "./context/MarketplaceContext";
import { TransactionsProvider } from "./context/TransactionsContext";
import { Web3Provider } from "./context/Web3Context";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <GovernanceProvider>
          <MarketplaceProvider>
            <TransactionsProvider>
              <Web3Provider>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </Web3Provider>
            </TransactionsProvider>
          </MarketplaceProvider>
        </GovernanceProvider>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;

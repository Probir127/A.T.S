import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

const CurrencyContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const initRef = useRef(false);

  useEffect(() => {
    // Detect if user is in BD timezone - only on first mount
    if (!initRef.current) {
      initRef.current = true;
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz?.includes('Dhaka')) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setCurrency('BDT');
        }
      } catch {
        // Fallback is USD
      }
    }
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

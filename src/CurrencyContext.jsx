import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CONFIG } from './config.js';

const CurrencyContext = createContext(null);
const STORAGE_KEY = 'joan.currency';
const SUPPORTED = ['RUB', 'USD', 'EUR', 'GBP'];

function detect() {
  if (typeof window === 'undefined') return 'RUB';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.includes(stored)) return stored;
  const lang = (navigator.language || '').toLowerCase();
  if (lang.startsWith('ru')) return 'RUB';
  if (lang === 'en-gb' || lang.startsWith('cy')) return 'GBP';
  if (lang.startsWith('en-us') || lang.startsWith('en')) return 'USD';
  if (lang.startsWith('de') || lang.startsWith('fr') || lang.startsWith('es') || lang.startsWith('it') || lang.startsWith('nl')) return 'EUR';
  return 'RUB';
}

export function CurrencyProvider({ children }) {
  const [code, setCode] = useState(detect);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, code);
  }, [code]);

  const value = useMemo(() => {
    const rate = CONFIG.currency.rates[code] || 1;
    const symbol = CONFIG.currency.symbols[code] || '';
    const format = (rubAmount) => {
      const converted = rubAmount / rate;
      const rounded = code === 'RUB' ? Math.round(converted) : Math.ceil(converted);
      return code === 'RUB'
        ? `${rounded}${symbol}`
        : `${symbol}${rounded.toLocaleString('en-US')}`;
    };
    return { code, setCode, supported: SUPPORTED, format };
  }, [code]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used inside CurrencyProvider');
  return ctx;
}

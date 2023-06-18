import React from 'react';
import { createRoot } from 'react-dom/client';
import QuoteMachine from './App';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(<QuoteMachine />);

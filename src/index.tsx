// import React from 'react';
import ReactDOM from 'react-dom/client';
import { TaskList } from './components/TaskList ';
import { ErrorBoundary } from "./components/common"
import { Route, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement)
  .render(<Router>
    <ErrorBoundary fallback={<span>App is Broken</span>}><TaskList /></ErrorBoundary>
  </Router>);
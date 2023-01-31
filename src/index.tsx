// import React from 'react';
import ReactDOM from 'react-dom/client';
import { TaskList } from './components/TaskList ';
import { ErrorBoundary } from "./components/common"

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement)
  .render(<ErrorBoundary fallback={<span>App is Broken</span>}><TaskList /></ErrorBoundary>);
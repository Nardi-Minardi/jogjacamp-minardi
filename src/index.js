import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage, TestLayout, TestLayoutForm, TestSelect } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test-layout",
    element: <TestLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test-layout-form",
    element: <TestLayoutForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test-select",
    element: <TestSelect />,
    errorElement: <ErrorPage />,
  },
]);

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

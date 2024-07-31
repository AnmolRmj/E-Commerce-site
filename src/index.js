import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { MainRoute } from './component/router/MainRoute';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContextProvider } from './component/ContextApi';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/lib/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={"....Loading"} >
      <Provider store={store} >
        <PersistGate loading ={"loading..."} persistor={persistor}>
          <AppContextProvider>
            <RouterProvider router={MainRoute} />
          </AppContextProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();

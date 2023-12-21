import  { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "./index";
import { CurrentUserContextProvider } from "./context/UserContext";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter(Routes);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
            
    <CurrentUserContextProvider>

      <RouterProvider router={router} />
      
    </CurrentUserContextProvider>
    <ToastContainer />
    

        
   
  </StrictMode>
);

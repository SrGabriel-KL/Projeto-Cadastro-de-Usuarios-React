import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "./routes.jsx"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
      />
    </>
  </StrictMode>
)
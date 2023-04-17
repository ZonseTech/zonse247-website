import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import { ProtectedRoute } from "../utils/hooks/protectedRoute";
import { ToastContainer } from "react-toastify";

function App() {
  const navigation = useNavigation();

  return (
    <ProtectedRoute>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      // theme={mode}
      />

      <div className='container'>
        {(navigation.state === "loading") && <Loading isLoading={true} message="Loading" />}
        {/* topNavbar */}
        <Outlet />
        {/* footer */}
      </div>
    </ProtectedRoute>
  );
}

export default App;

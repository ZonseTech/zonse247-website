import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import { ProtectedRoute } from "../utils/hooks/protectedRoute";

function App() {
  const navigation = useNavigation();

  return (
    <ProtectedRoute>
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

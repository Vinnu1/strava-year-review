import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LoginPage from "./components/login/LoginPage";
import YearReview from "./components/YearReview";

function App() {
  return (
    <BrowserRouter>
      {/* {accessToken !== "" ? <h1>Logged In</h1> : <LoginPage />} */}
      <Routes>
        <Route path="/" element={<YearReview />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

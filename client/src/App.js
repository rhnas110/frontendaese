import "./App.css";
import "./style/Animate.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import { Homepage } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1234);
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Box
                maxW={"100vw"}
                h={"100vh"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <span className="loader"></span>
              </Box>
            ) : (
              <Homepage />
            )
          }
        />
        <Route
          path="/about"
          element={<h4 style={{ textAlign: "center" }}>Coming Soon...</h4>}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

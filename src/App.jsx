import React, { useState } from "react";
import Home from "./components/Home";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && <Home />}
    </>
  );
};

export default App;
import React from "react";
import Navbar from "../common/Navbar/Navbar";
import Data from "../components/Data";

const DataPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Data />
      </div>
      <div>
        <footer />
      </div>
    </div>
  );
};

export default DataPage;

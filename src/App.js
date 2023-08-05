// src/App.js

import React, { useEffect, useState } from "react";
import ReportTable from "./components/ReportTable";
import { reportData1, reportData2, reportData3 } from "./components/Data";

const defaultReport = {
  header: [],
  data: [],
};

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulating fetching data from the server adter 1 second
      resolve(reportData1);
    }, 1000);
  });
}

function App() {
  const [selectedReport, setSelectedReport] = useState(defaultReport);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchData().then((data) => {
      setSelectedReport(data);
      setIsLoading(false);
    });
  }, []);

  const handleReportChange = (event) => {
    const selectedReportId = event.target.value;
    setIsLoading(true);

    if (selectedReportId === "report1") {
      fetchData().then((data) => {
        setSelectedReport(data);
        setIsLoading(false);
      });
    } else if (selectedReportId === "report2") {
      fetchData().then((data) => {
        setSelectedReport(reportData2);
        setIsLoading(false);
      });
    }
    // ... добавьте обработчики для других отчетов ...
    else if (selectedReportId === "report3") {
      fetchData().then((data) => {
        setSelectedReport(reportData3);
        setIsLoading(false);
      });
    }
  };

  return (
    <div className="container">
      <h1>Report App</h1>
      <select onChange={handleReportChange}>
        <option value="report1">Report 1</option>
        <option value="report2">Report 2</option>
        <option value="report3">Report 3</option>
        {/* ... добавьте другие отчеты ... */}
      </select>
      {selectedReport.header.length > 0 ? (
        <ReportTable reportData={selectedReport} isLoading={isLoading} />
      ) : (
        <p>No report data available.</p>
      )}
    </div>
  );
}

export default App;

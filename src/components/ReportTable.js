// src/components/ReportTable.js

import React from "react";

function ReportTable({ reportData, isLoading }) {
  const { header, data } = reportData;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          {header.map((column) => (
            <th key={column.id} style={{ textAlign: column.align || "left" }}>
              {column.caption}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={{ textAlign: header[cellIndex].align || "left" }}
              >
                {typeof cell === "object" ? cell.d : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ReportTable;

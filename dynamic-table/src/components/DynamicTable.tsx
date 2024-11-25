import React, { useState, useEffect } from "react";
import "../styles/DynamicTable.css";
import { saveAs } from "file-saver";
import jsPDF from "jspdf"; // Import jsPDF
import "jspdf-autotable"; // Import the autoTable plugin separately

interface ColumnMetadata {
  name: string;
  label: string;
  type?: string;
  align?: "left" | "center" | "right";
  sortable?: boolean;
}

interface DynamicTableProps {
  columns: ColumnMetadata[];
  dataUrl: string;
  pageSize: number;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ columns, dataUrl, pageSize }) => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
        setFilteredData(fetchedData);
      });
  }, [dataUrl]);

  const handleSort = (key: string) => {
    const direction = sortConfig?.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedData);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = data.filter((row) =>
      columns.some((col) => String(row[col.name]).toLowerCase().includes(term))
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const exportToCSV = () => {
    const tableHeaders = columns.map((col) => col.label).join(","); // Combine headers into a CSV row
    const tableRows = filteredData.map((row) =>
      columns.map((col) => row[col.name]).join(",")
    ); // Combine each row's data into CSV format
  
    const csvContent = [tableHeaders, ...tableRows].join("\n"); // Join headers and rows with newline characters
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "table-data.csv");
  };
  

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableHeaders = columns.map((col) => col.label);
    const tableRows = filteredData.map((row) => columns.map((col) => row[col.name]));

    doc.autoTable({
      head: [tableHeaders],
      body: tableRows,
    });

    doc.save("table-data.pdf");
  };

  const startIdx = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIdx, startIdx + pageSize);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  return (
    <div className="dynamic-table-container">
      <div className="dynamic-table-controls">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
        <button onClick={exportToCSV}>Export CSV</button>
        <button onClick={exportToPDF}>Export PDF</button>
      </div>
      <table className="dynamic-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.name}
                className={col.align || "left"}
                onClick={() => col.sortable && handleSort(col.name)}
              >
                {col.label}{" "}
                {col.sortable && (
                  <span className={`sort-icon ${sortConfig?.key === col.name ? sortConfig.direction : ""}`}>
                    {sortConfig?.key === col.name ? (sortConfig.direction === "asc" ? "▲" : "▼") : "⇅"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index} className="hoverable">
              {columns.map((col) => (
                <td key={col.name} className={col.align || "left"}>
                  {row[col.name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="dynamic-table-pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DynamicTable;

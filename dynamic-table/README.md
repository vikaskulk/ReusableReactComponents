# DynamicTable Component

The **DynamicTable** component is a highly configurable React table component that supports dynamic columns, data fetching, sorting, filtering, pagination, and data export to CSV and PDF formats. It is designed to be reusable and customizable for various use cases across different React applications.

## Features

- **Dynamic Columns and Data**: Define columns and fetch data from an API or static file.
- **Sorting and Filtering**: Easily sort columns and filter data with a search input.
- **Pagination**: Display paginated data with customizable page sizes.
- **Export to CSV and PDF**: Export the table data in CSV or PDF formats.
- **Row Highlighting**: Highlight rows when hovering over them.
- **Responsive Design**: Optimized for different screen sizes.

## Installation

To install and use the **DynamicTable** component in your React application, follow the steps below.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/vikaskulk/ReusableReactComponents.git
cd ReusableReactComponents/dynamic-table
```

# Install Dependencies

```bash
npm install
```

# Usage
After installing the dependencies, you can import and use the DynamicTable component in your React application.

## Example Usage

```javascript
import React from "react";
import DynamicTable from "./components/DynamicTable";

const columns = [
  { name: "id", label: "ID", sortable: true },
  { name: "name", label: "Name", sortable: true },
  { name: "age", label: "Age", sortable: true },
];

function App() {
  return (
    <div>
      <h1>Reusable Dynamic Table</h1>
      <DynamicTable
        columns={columns}
        dataUrl="/mockData.json"  // Replace with your data API or mock file
        pageSize={5}
      />
    </div>
  );
}

export default App;
```
# Configuration

You can customize the DynamicTable component by passing different props:
1. columns
1.1. Type: Array<{ name: string, label: string, sortable: boolean, align?: 'left' | 'center' | 'right' }>
1.2. Description: Defines the columns of the table. Each column object should include a name, label, and sortable flag.
2. dataUrl
2.1. Type: string
2.2. Description: The URL from which to fetch the table data (can be a mock JSON file or API endpoint).
3. pageSize
3.1 Type: number
3.2 Description: Defines the number of rows per page for pagination.

# Exporting Data
The DynamicTable component supports exporting the table data in two formats:

## Export to CSV
The CSV export will download the table data as a CSV file. The first row will contain the column labels, and subsequent rows will contain the table data.

```javascript
const exportToCSV = () => {
  const tableHeaders = columns.map((col) => col.label).join(",");
  const tableRows = filteredData.map((row) =>
    columns.map((col) => row[col.name]).join(",")
  );

  const csvContent = [tableHeaders, ...tableRows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  saveAs(blob, "table-data.csv");
};
```

# Export to PDF
The PDF export will generate a PDF document containing the table data. Each table header will be listed at the top, followed by the rows.

```javascript
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
```

# Pagination
The table automatically paginates the data based on the pageSize prop. You can navigate between pages using the "Previous" and "Next" buttons. The total pages are calculated based on the filtered data length.


# Contributing
We welcome contributions to this repository! If you'd like to improve the component or add new features, feel free to fork the repository, make your changes, and submit a pull request.

## How to Contribute:
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push to your forked repository.
5. Open a pull request to the main repository.


# License
This project is licensed under the MIT License - see the LICENSE file for details.

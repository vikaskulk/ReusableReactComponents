# DynamicTable Component

## Features
- Dynamic Columns and Data
- Sorting, Filtering, Pagination
- Export to CSV and PDF

## Installation
Clone the repository:
```bash
git clone <repo_url>
cd DynamicTable
npm install
```
# Usage

```javascript
import DynamicTable from "./components/DynamicTable";

const columns = [
  { name: "id", label: "ID", sortable: true },
  { name: "name", label: "Name", sortable: true },
  { name: "age", label: "Age", sortable: true },
];

function App() {
  return <DynamicTable columns={columns} dataUrl="/api/data" pageSize={5} />;
}
```

# DynamicForm Component
The DynamicForm component is located in the dynamic-form folder. It allows you to create dynamic forms based on JSON configuration and supports features like form validation, conditional fields, and form submission handling.

## Features:
1. Dynamic Fields: Generate form fields based on a JSON configuration.
2. Validation: Supports both built-in and custom validations for form fields.
3. Conditional Fields: Dynamically show or hide fields based on user input.
4. Submit Handling: Capture form data and handle submission.

## Installation
Navigate to the dynamic-form folder and install the dependencies:
Using npm:
```bash
cd dynamic-form
npm install
```

## Usage
```javascript
import React, { useState } from 'react';
import DynamicForm from './dynamic-form/DynamicForm';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    setFormData(data);
  };

  return (
    <div>
      <h1>Reusable Dynamic Form</h1>
      <DynamicForm onSubmit={handleFormSubmit} />
      {formData && (
        <div>
          <h2>Form Data:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
```

# DynamicTable Component
The DynamicTable component is located in the dynamic-table folder. It allows you to dynamically generate tables with support for sorting, filtering, pagination, and exporting data to CSV and PDF.

## Features:
1. Dynamic Columns and Data: Define table columns and fetch data from a URL.
2. Sorting and Filtering: Built-in sorting and filtering for rows.
3. Pagination: Configurable page size with navigation controls.
4. Export Options: Export table data to CSV and PDF formats.
5. Hover Effects: Row highlighting on hover for better UX.

## Installation
Navigate to the dynamic-table folder and install the dependencies:

Using npm:

```bash
cd dynamic-table
npm install
```

## Usage

```javascript
import DynamicTable from "./dynamic-table/DynamicTable";

const columns = [
  { name: "id", label: "ID", sortable: true },
  { name: "name", label: "Name", sortable: true },
  { name: "age", label: "Age", sortable: true },
];

function App() {
  return (
    <div>
      <h1>Reusable Dynamic Table</h1>
      <DynamicTable columns={columns} dataUrl="/mockData.json" pageSize={5} />
    </div>
  );
}
```

# Contributing
We welcome contributions to this repository! If you’d like to add more reusable components or improve the existing ones, feel free to fork the repository, make your changes, and submit a pull request.

## How to Contribute:
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push to your forked repository.
5. Open a pull request to the main repository.

# License
This project is licensed under the MIT License - see the LICENSE file for details.
---

### Key Updates to the Root README.md

1. **Added DynamicTable**:
   - Updated the introduction and features list to include `DynamicTable`.
   - Added a new section under the "Table of Contents" and detailed instructions for installation and usage.

2. **Preserved DynamicForm**:
   - The `DynamicForm` details are kept intact to ensure existing users can refer to them.

3. **Centralized Documentation**:
   - Now, the root README serves as a quick reference for all reusable components in the repository.

---
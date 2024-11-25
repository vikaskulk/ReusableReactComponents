import React from "react";
import DynamicTable from "./components/DynamicTable";

const columns = [
  { name: "id", label: "ID", sortable: true, align: "center" as "center" },
  { name: "name", label: "Name", sortable: true, align: "left" as "left" },
  { name: "age", label: "Age", sortable: true, align: "right" as "right" },
];


function App() {
  return (
    <div className="App">
      <h1>Dynamic Table Example</h1>
      <DynamicTable columns={columns} dataUrl="/mockData.json" pageSize={5} />
    </div>
  );
}

export default App;

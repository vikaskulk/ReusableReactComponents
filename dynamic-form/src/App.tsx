import React from "react";
import DynamicForm from "./DynamicForm";

const formConfig = {
  fields: [
    { name: "username", type: "text", label: "Username", required: true },
    { name: "age", type: "number", label: "Age" },
    { name: "gender", type: "select", label: "Gender", required: true, options: ["Male", "Female", "Other"] },
  ],
  layout: { columns: 2 },
  actions: {
    submit: { url: "/api/submit", method: "POST", label: "Submit" },
    reset: { label: "Reset" },
  },
};

function App() {
  const handleSubmit = async (data: any) => {
    console.log("Submitted Data:", data);
  
    // Define a URL to send the form data (mock or real endpoint)
    const submissionUrl = "https://jsonplaceholder.typicode.com/posts"; // Example API endpoint
  
    try {
      // Send the form data to the server using fetch or axios
      const response = await fetch(submissionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Form submission successful:", responseData);
        alert("Form submitted successfully!");
      } else {
        console.error("Form submission failed:", response.status);
        alert("There was an issue submitting the form.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };
  

  return <DynamicForm config={formConfig} onSubmit={handleSubmit} />;
}

export default App;

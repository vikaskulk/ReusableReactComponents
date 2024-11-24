# Reusable React Components

This repository is dedicated to reusable React components that can be used across different React projects. The aim is to create a collection of highly reusable components that can simplify development and improve consistency in applications.

Currently, the repository contains the **DynamicForm** component, which allows you to dynamically generate and manage forms in a React application.

## Table of Contents

- [Getting Started](#getting-started)
- [DynamicForm Component](#dynamicform-component)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the reusable components in this repository, you can clone the repository and navigate to the folder containing the component you want to use.

For example, to start using the **DynamicForm** component, follow the steps below.

## DynamicForm Component

The **DynamicForm** component is located in the `dynamic-form` folder. It allows you to create dynamic forms based on JSON configuration, and supports features like form validation, conditional fields, and form submission handling.

### Features:

- **Dynamic Fields**: Generate form fields based on a JSON configuration.
- **Validation**: Supports both built-in and custom validations for form fields.
- **Conditional Fields**: Dynamically show or hide fields based on user input.
- **Submit Handling**: Capture form data and handle submission.

## Installation

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/vikaskulk/ReusableReactComponents.git
cd ReusableReactComponents

## Install Dependencies

To install the required dependencies for the **DynamicForm** component, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/vikaskulk/ReusableReactComponents.git
   cd ReusableReactComponents

2. Navigate to the dynamic-form folder and install the dependencies:

Using npm:
cd dynamic-form
npm install

Or, if you use Yarn:

cd dynamic-form
yarn install

## Usage
After installing the dependencies, you can import and use the DynamicForm component in your React application.

### Example Usage
Here’s an example of how to use the DynamicForm component in a React app:

import React, { useState } from 'react';
import DynamicForm from './dynamic-form/DynamicForm'; // Update the path if necessary

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

## Configuration
You can customize the form by passing a JSON configuration that defines the fields and validation rules. For example
[
  {
    "name": "firstName",
    "label": "First Name",
    "type": "text",
    "validation": {
      "required": true,
      "minLength": 3
    }
  },
  {
    "name": "age",
    "label": "Age",
    "type": "number",
    "validation": {
      "required": true,
      "min": 18
    }
  }
]

Run the App
To start the app locally, you can run:

npm start

This will start the React app in development mode, typically accessible at http://localhost:3000.


## Contributing
We welcome contributions to this repository! If you’d like to add more reusable components or improve the existing ones, feel free to fork the repository, make your changes, and submit a pull request.

### How to Contribute:
Fork the repository.
Create a new branch for your changes.
Make your changes and commit them.
Push to your forked repository.
Open a pull request to the main repository.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

You can copy this directly and save it as your `README.md` file in your GitHub repository. Let me know if you need any further adjustments!

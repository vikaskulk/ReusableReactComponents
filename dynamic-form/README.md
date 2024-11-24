# DynamicForm Component

DynamicForm is a reusable React component for building dynamic forms based on a JSON configuration. It allows you to define form fields, layouts, and actions without writing custom form logic, making it ideal for scalable and reusable applications.

---

## Features

- **Dynamic Fields**: Generate form fields like text inputs, dropdowns, checkboxes, and more based on JSON configuration.
- **Custom Layouts**: Specify single or multi-column layouts.
- **Validation**: Built-in validation for required fields.
- **Custom Actions**: Configurable submit and reset button behaviors.
- **Responsive Design**: Adapts seamlessly to desktop and mobile screens.

---

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vikaskulk/ReusableReactComponents
Public/dynamic-form.git
   cd dynamic-form
   npm install
   ```
2. Run the development server:
   ```
    npm start
    Open http://localhost:3000 in your browser to view the app.
   ```

### Usage

Import the DynamicForm component into your application and pass a configuration object as a prop.
Example:

```javascript
import React from "react";
import DynamicForm from "./DynamicForm";

const formConfig = {
  fields: [
    { name: "username", type: "text", label: "Username", required: true },
    { name: "age", type: "number", label: "Age" },
    { name: "gender", type: "select", label: "Gender", options: ["Male", "Female", "Other"] },
  ],
  layout: { columns: 2 },
  actions: {
    submit: { url: "/api/submit", method: "POST", label: "Submit" },
    reset: { label: "Reset" },
  },
};

const App = () => {
  const handleSubmit = (data) => {
    console.log("Form Submitted: ", data);
  };

  return <DynamicForm config={formConfig} onSubmit={handleSubmit} />;
};

export default App;
```

## Configuration Schema
### Fields

| Property   | Type       | Description                                         |
|------------|------------|-----------------------------------------------------|
| `name`     | `string`   | Unique identifier for the field.                    |
| `type`     | `string`   | Field type (`text`, `number`, `select`, etc.).       |
| `label`    | `string`   | Field label displayed in the form.                  |
| `required` | `boolean`  | Marks the field as required.                        |
| `options`  | `string[]` | Options for `select` or `radio` fields (if any).    |

### Layout

| Property   | Type       | Description                                         |
|------------|------------|-----------------------------------------------------|
| `columns`  | `number`   | Number of columns in the form layout.               |

### Actions

| Property   | Type       | Description                                         |
|------------|------------|-----------------------------------------------------|
| `submit`   | `object`   | Configuration for the submit button.                |
| `reset`    | `object`   | Configuration for the reset button.                 |

#### Submit Action Schema

| Property   | Type       | Description                                         |
|------------|------------|-----------------------------------------------------|
| `url`      | `string`   | API endpoint URL for form submission.               |
| `method`   | `string`   | HTTP method (`POST`, `GET`, etc.).                  |
| `label`    | `string`   | Button label text.                                  |

#### Reset Action Schema

| Property   | Type       | Description                                         |
|------------|------------|-----------------------------------------------------|
| `label`    | `string`   | Button label text for reset.                        |


## Running Tests
To run tests:

```
npm test
```

## Build for Production
To create a production build:

```
npm run build
```

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (git checkout -b feature-name).
3. Commit your changes (git commit -m "Add feature name").
4. Push to the branch (git push origin feature-name).
5. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



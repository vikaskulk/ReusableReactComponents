import React, { useState } from "react";
import axios from "axios";
import "./DynamicForm.css"; // Add styles here

interface FieldConfig {
  name: string;
  type: string;
  label: string;
  required?: boolean;
  options?: string[];
}

interface FormConfig {
  fields: FieldConfig[];
  layout: {
    columns: number;
  };
  actions: {
    submit: {
      url: string;
      method: string;
      label: string;
    };
    reset: {
      label: string;
    };
  };
}

interface DynamicFormProps {
  config: FormConfig;
  onSubmit?: (data: Record<string, any>) => void;
  onReset?: () => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ config, onSubmit, onReset }) => {
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, value: any) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleValidation = () => {
    const newErrors: Record<string, string> = {};
    config.fields.forEach((field) => {
      if (field.required && !formValues[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    const data = formValues;
    if (onSubmit) {
      onSubmit(data);
    } else {
      try {
        await axios({
          url: config.actions.submit.url,
          method: config.actions.submit.method,
          data,
        });
        alert("Form submitted successfully!");
      } catch (error) {
        alert("Error submitting the form.");
      }
    }
  };

  const handleReset = () => {
    setFormValues({});
    setErrors({});
    if (onReset) onReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-layout" style={{ gridTemplateColumns: `repeat(${config.layout.columns}, 1fr)` }}>
        {config.fields.map((field) => (
          <div key={field.name} className="form-field">
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "select" ? (
              <select
                id={field.name}
                value={formValues[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              >
                <option value="">Select...</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                type={field.type}
                value={formValues[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
            {errors[field.name] && <span className="error">{errors[field.name]}</span>}
          </div>
        ))}
      </div>
      <div className="form-actions">
        <button type="submit">{config.actions.submit.label}</button>
        <button type="button" onClick={handleReset}>
          {config.actions.reset.label}
        </button>
      </div>
    </form>
  );
};

export default DynamicForm;

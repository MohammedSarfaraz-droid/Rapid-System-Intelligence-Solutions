import { useState } from "react";
import { INITIAL_FORM_DATA } from "@/constants/heroData";

export const useForm = (onSubmit) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log("Form submitted:", formData);
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
  };

  return { formData, handleChange, handleSubmit, resetForm };
};
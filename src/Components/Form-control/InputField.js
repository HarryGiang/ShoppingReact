import { Input } from "Components/UI-Library";
import React from "react";
import { Controller } from "react-hook-form";

const { TextArea } = Input;

const InputField = ({ name, label, form, isRequired, type, textArea }) => {
  const { errors, formState } = form;
  const hasError = formState.touched[name] && errors[name];

  return (
    <>
      <div className="label">
        {label}
        {isRequired && "*"}
      </div>
      <Controller
        name={name}
        control={form.control}
        as={textArea ? TextArea : Input}
        type={type}
        errors={hasError}
      />
    </>
  );
};

export default InputField;

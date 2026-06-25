import { z } from "zod";

export function generateSchema(fields) {
  const schema = {};

  fields.forEach((field) => {
    let validator = z.string();

    // Required
    if (field.required) {
      validator = validator.min(1, field.errorMessage);
    }

    // Email
    if (field.type?.toLowerCase() === "email") {
      validator = validator.email(field.errorMessage);
    }

    // Phone
    if (field.type?.toLowerCase() === "phone") {
      validator = validator.regex(
        new RegExp(field.pattern),
        field.errorMessage
      );
    }

    // Pattern
    if (
      field.pattern &&
      field.type !== "phone" &&
      field.type !== "email"
    ) {
      validator = validator.regex(
        new RegExp(field.pattern),
        field.errorMessage
      );
    }

    // Min Length
    if (field.minLength) {
      validator = validator.min(
        field.minLength,
        `Minimum ${field.minLength} characters required`
      );
    }

    // Max Length
    if (field.maxLength) {
      validator = validator.max(
        field.maxLength,
        `Maximum ${field.maxLength} characters allowed`
      );
    }

    schema[field.name] = validator;
  });

  return z.object(schema);
}
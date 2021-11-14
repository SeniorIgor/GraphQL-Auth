import { ChangeEventHandler } from 'react';

type FieldsNames = 'email' | 'password';

export type ChangeHandler = ChangeEventHandler<HTMLInputElement>;

export type AuthFormState = Record<FieldsNames, string>;

export interface Field {
  id: FieldsNames;
  placeholder: string;
  type?: string;
}

export type HandleSubmit = (fields: AuthFormState) => void;

export interface AuthFormProps {
  errors?: Array<string>;
  handleSubmit: HandleSubmit;
}

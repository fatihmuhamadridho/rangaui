import React, { useState, useEffect, useContext, createContext } from 'react';

interface FormValues {
  [key: string]: string;
}

interface FormulirProps<T extends FormValues> {
  initialValues: T;
  enableReinitialize?: boolean;
  onSubmit: (values: T) => void;
  children: (props: {
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setFieldValue: (field: keyof T, value: string) => void;
    values: T;
  }) => React.ReactNode;
}

interface FormContextProps<T> {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (field: keyof T, value: string) => void;
  values: T;
}
const FormContext = createContext<FormContextProps<any> | undefined>(undefined);

const Formulir = <T extends FormValues>({
  initialValues,
  enableReinitialize = false,
  onSubmit,
  children,
}: FormulirProps<T>) => {
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    if (enableReinitialize) {
      setValues(initialValues);
    }
  }, [initialValues, enableReinitialize]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const setFieldValue = (field: any, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field as string]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <FormContext.Provider value={{ handleChange, handleSubmit, setFieldValue, values }}>
      {children({ handleChange, handleSubmit, setFieldValue, values })}
    </FormContext.Provider>
  );
};

interface FormWrapperProps extends React.HTMLProps<HTMLFormElement> {
  children?: React.ReactNode;
}

const Form: React.FC<FormWrapperProps> = ({ children, className, onSubmit }) => {
  const context = useContext(FormContext);
  return (
    <form className={className} onSubmit={onSubmit || context?.handleSubmit}>
      {children}
    </form>
  );
};

export { Formulir, Form };

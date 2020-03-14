import React, { useEffect, useState } from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  title: string;
  iconCode: string;
  placeholder?: string;
  value?: string | string[] | number;
  type?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLElement>;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
                                                      title,
                                                      type = 'text',
                                                      placeholder = '',
                                                      className = '',
                                                      value,
                                                      onChange,
                                                      id,
                                                      name,
                                                      error,
                                                      iconCode,
                                                    }) => {
  const [useDangerClassName, setUseDangerClassName] = useState('');
  useEffect(() => {
    if (error) {
      setUseDangerClassName('is-danger');
      return;
    }
    setUseDangerClassName('');
  }, [error]);
  return (
    <div className="field">
      <label className="label is-pulled-left">{title}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className={`input ${useDangerClassName} ${className}`}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <span className="icon is-small is-left">
          <i className={`fas ${iconCode}`}/>
        </span>
        <p className="help is-danger has-text-weight-bold">{error}</p>
      </div>
    </div>
  );
};

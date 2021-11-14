import { FC, FormEventHandler, memo, useCallback, useState } from 'react';
import cx from 'classnames';

import {
  AuthFormProps,
  AuthFormState,
  ChangeHandler,
  Field,
} from './auth-form.types';
import Style from './auth-form.module.sass';

const fields: Array<Field> = [
  { id: 'email', placeholder: 'Email' },
  { id: 'password', placeholder: 'Password', type: 'password' },
];

const AuthForm: FC<AuthFormProps> = ({ errors = [], handleSubmit }) => {
  const [state, setState] = useState<AuthFormState>({
    email: '',
    password: '',
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    handleSubmit(state);
  };

  const handleChange: ChangeHandler = useCallback((event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  return (
    <div className="row">
      <form className="col s6" onSubmit={onSubmit}>
        {fields.map(({ id, placeholder, type }) => (
          <div className="input-field" key={id}>
            <input
              name={id}
              value={state[id]}
              onChange={handleChange}
              placeholder={placeholder}
              type={type}
            />
          </div>
        ))}
        <div className={cx('red-text', Style.errorContainer)}>
          {errors.map((err, idx) => (
            <div key={idx}>{err}</div>
          ))}
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default memo(AuthForm);

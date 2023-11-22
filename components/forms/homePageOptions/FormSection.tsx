'use client';

import { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const FormSection = () => {
  const [signIn, setSignIn] = useState(false);

  const formSwitchHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setSignIn((prevState) => !prevState);
  };

  return (
    <div>
      {signIn ? <SignInForm /> : <SignUpForm />}

      <p className='my-3'>or</p>
      <a
        className='cursor-pointer'
        onClick={formSwitchHandler}
      >
        Sign in
      </a>
    </div>
  );
};

export default FormSection;

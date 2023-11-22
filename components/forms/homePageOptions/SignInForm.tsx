'use client';

import { useForm, type FieldValues } from 'react-hook-form';
import { TextInput } from '../ui/Inputs';
import Button from '../../shared/Button';

const SignInForm = () => {
  return (
    <form>
      <h2>Sign in</h2>
      <TextInput
        label='Enter email'
        id='email'
        name='email'
        type='email'
      />
      <TextInput
        label='Enter password'
        id='password'
        name='password'
        type='password'
      />
      <Button
        text='Sign in'
        type='submit'
      />
    </form>
  );
};

export default SignInForm;

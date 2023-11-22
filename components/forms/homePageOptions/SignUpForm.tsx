'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signUpSchema } from '@/validation/validation';
import { TextInput, FormControl, ErrorMessage } from '../ui/Inputs';
import Button from '../../shared/Button';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const formSubmitHandler = (data: z.infer<typeof signUpSchema>) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <h2 className='text- text-[20px] mb-2'>Sign up</h2>
      <FormControl
        label='Email'
        id='email'
      >
        <TextInput
          label='Enter email'
          id='email'
          type='email'
          {...register('email')}
        />
        <ErrorMessage>{errors && errors.email?.message}</ErrorMessage>
      </FormControl>

      <FormControl
        label='Password'
        id='password'
      >
        <TextInput
          label='Enter password'
          id='password'
          type='password'
          {...register('password')}
        />
        <ErrorMessage>{errors && errors.password?.message}</ErrorMessage>
      </FormControl>
      <FormControl
        label='Confirm password'
        id='confirmPassword'
      >
        <TextInput
          label='Confirm password'
          id='confirmPassword'
          type='password'
          {...register('confirmPassword')}
        />
        <ErrorMessage>{errors && errors.confirmPassword?.message}</ErrorMessage>
      </FormControl>

      <Button
        text='Sign up'
        type='submit'
      />
    </form>
  );
};

export default SignUpForm;

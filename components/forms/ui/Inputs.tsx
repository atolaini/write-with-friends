import * as React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref: React.ForwardedRef<HTMLInputElement>;
  label: string;
  id: string;
  children?: React.ReactNode;
}

interface FormControlProps {
  children: React.ReactNode;
  id: string;
  label: string;
  type?: string;
}

export const FormControl = ({ children, ...props }: FormControlProps) => {
  return (
    <div className='flex flex-col mb-3 w-full'>
      <label
        className='text-sm mb-2'
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {children}
    </div>
  );
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <input
        className='font-bold border-accent border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-accent-2 focus:border-transparent'
        type={props.type || 'text'}
        {...props}
        ref={ref}
      />
    );
  }
);

export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className='text-red-500 text-sm mb-0 mt-1'>{children}</p>;
};

TextInput.displayName = 'TextInput';

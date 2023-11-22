interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: 'submit' | 'button';
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type === 'submit' ? 'submit' : 'button'}
      className='btn'
    >
      {props.text}
    </button>
  );
};

export default Button;

import './Button.css';

const Button = (props) => {
  const { onClick } = props;

  return (
    <div className="button-submit">
      <button onClick={onClick}>SUBMIT</button>
    </div>
  );
};

export default Button;

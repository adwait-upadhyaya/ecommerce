import { IButton } from "../interfaces/IButton";

const Button = (props: IButton) => {
  const { type, children, paddingX, paddingY, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`btn ${type}`}
      style={{ padding: `${paddingY} ${paddingX}` }}
    >
      {children}
    </button>
  );
};

export default Button;

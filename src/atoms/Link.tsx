import { useNavigate } from "react-router-dom";
import { ILink } from "../interfaces/ILink";

const Link = (props: ILink) => {
  const navigate = useNavigate();

  const { url, children } = props;
  return (
    <a
      onClick={() => {
        navigate(url);
      }}
    >
      {children}
    </a>
  );
};

export default Link;

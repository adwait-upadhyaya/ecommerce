import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Link from "../atoms/Link";
import Text from "../atoms/Text";
import "../styles/components/_navbar.scss";

import logo from "/images/Logo.png";
import cartIcon from "/images/cart.svg";
import searchIcon from "/images/search.svg";
import userIcon from "/images/user.svg";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__links">
          <ul>
            <li>
              <Link url="/women">
                <Text type="p">Women</Text>
              </Link>
            </li>
            <li>
              <Link url="/men">
                <Text type="p">Men</Text>
              </Link>
            </li>
            <li>
              <Link url="/electronics">
                <Text type="p">Electronics</Text>
              </Link>
            </li>
            <li>
              <Link url="/jewelery">
                <Text type="p">Jewelery</Text>
              </Link>
            </li>
            <li>
              <Link url="/about">
                <Text type="p">About</Text>
              </Link>
            </li>
            <li>
              <Text type="p">EverWorld Stories </Text>
            </li>
          </ul>
        </div>
        <div className="navbar__logo">
          <Link url="/">
            <Image src={logo} width="128" height="14" />
          </Link>
        </div>
        <div className="navbar__icons">
          <div className="navbar__icon">
            <Image src={searchIcon} />
          </div>
          <div className="navbar__icon">
            <Image src={userIcon} />
          </div>
          <div className="navbar__icon">
            <Button type="primary" onClick={onCartClick}>
              <Image src={cartIcon} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

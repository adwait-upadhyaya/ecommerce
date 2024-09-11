import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Link from "../atoms/Link";
import Text from "../atoms/Text";
import TextInput from "../atoms/TextInput";
import ArrowRight from "/images/ArrowRight.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__top__column">
            <div className="footer__top__column--title">
              <Text type="h5">
                <strong>Account</strong>
              </Text>
            </div>
            <div className="footer__top__column--lists">
              <Link url="#">
                <Text type="p">Login</Text>
              </Link>
              <Link url="#">
                <Text type="p">Signup</Text>
              </Link>
              <Link url="#">
                <Text type="p">Redeem a Gift Card</Text>
              </Link>
            </div>
          </div>
          <div className="footer__top__column">
            <div className="footer__top__column--title">
              <Text type="h5">
                {" "}
                <strong>Company</strong>
              </Text>
            </div>
            <div className="footer__top__column--lists">
              <Link url="#">
                <Text type="p">About</Text>
              </Link>
              <Link url="#">
                <Text type="p">Environmental Initiatives</Text>
              </Link>
              <Link url="#">
                <Text type="p">Factories</Text>
              </Link>
              <Link url="#">
                <Text type="p">DEI</Text>
              </Link>
              <Link url="#">
                <Text type="p">Careers</Text>
              </Link>
              <Link url="#">
                <Text type="p">International</Text>
              </Link>
              <Link url="#">
                <Text type="p">Accessibility</Text>
              </Link>
            </div>
          </div>
          <div className="footer__top__column">
            <div className="footer__top__column--title">
              <Text type="h5">
                {" "}
                <strong>Get Help</strong>
              </Text>
            </div>
            <div className="footer__top__column--lists">
              <Link url="#">
                <Text type="p">Help Center</Text>
              </Link>
              <Link url="#">
                <Text type="p">Return Policy</Text>
              </Link>
              <Link url="#">
                <Text type="p">Shipping Info</Text>
              </Link>
              <Link url="#">
                <Text type="p">Bulk Orders</Text>
              </Link>
            </div>
          </div>
          <div className="footer__top__column">
            <div className="footer__top__column--title">
              <Text type="h5">
                {" "}
                <strong>Connect </strong>
              </Text>
            </div>
            <div className="footer__top__column--lists">
              <Link url="#">
                <Text type="p">Facebook</Text>
              </Link>
              <Link url="#">
                <Text type="p">Instagram</Text>
              </Link>
              <Link url="#">
                <Text type="p">Twitter</Text>
              </Link>
              <Link url="#">
                <Text type="p">Affiliates</Text>
              </Link>
              <Link url="#">
                <Text type="p">Out Stores</Text>
              </Link>
            </div>
          </div>

          <div className="footer__top__textInput">
            <TextInput placeholder="Email Address" />
            <Button type="secondary" paddingX="10px" paddingY="10px">
              <Image src={ArrowRight} />
            </Button>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__links">
            <Link url="#">
              <Text type="p">Terms of service</Text>
            </Link>
            <Link url="#">
              <Text type="p">Privacy Policy</Text>
            </Link>
            <Link url="#">
              <Text type="p">Do not share or sell my personal information</Text>
            </Link>
            <Link url="#">
              <Text type="p">CS Supply Chain Transparency</Text>
            </Link>
            <Link url="#">
              <Text type="p">Vendor Code of Conduct</Text>
            </Link>
            <Link url="#">
              <Text type="p">Sitemap Pages</Text>
            </Link>
            <Link url="#">
              <Text type="p">Sitemap Products</Text>
            </Link>
          </div>

          <div className="footer__bottom__rights">
            <Text type="p">&copy; 2024 All Rights Reserved</Text>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

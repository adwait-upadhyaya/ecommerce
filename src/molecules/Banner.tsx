import Image from "../atoms/Image";
import Link from "../atoms/Link";
import Text from "../atoms/Text";
import "../styles/components/_banner.scss";

// images
import bannerSvg from "/images/banner.svg";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__text">
          <div className="banner__text--bold">
            <Text type="p" color="white">
              Get early access on launches and offers.
            </Text>
          </div>

          <Link url="#">
            <Text type="p" color="white">
              Sign up for texts &#x2192;
            </Text>
          </Link>
        </div>
        <div className="banner__region">
          <Image src={bannerSvg} height={"21"} width="15" />
          <div className="banner__region--text">
            <Text type="p" color="white">
              USD
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

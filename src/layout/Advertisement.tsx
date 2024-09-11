import { advertisements } from "../constants/advertisements";
import AdvertisementCard from "../molecules/AdvertisementCard";
import "../styles/layout/_advertisement.scss";
const Advertisement = () => {
  return (
    <div className="advertisement">
      {advertisements.map((element, index) => (
        <AdvertisementCard key={index} {...element} />
      ))}
    </div>
  );
};

export default Advertisement;

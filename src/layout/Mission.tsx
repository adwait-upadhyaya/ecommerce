import Image from "../atoms/Image";
import missionImage from "/images/mission.png";
const Mission = () => {
  return (
    <>
      <div className="mission">
        <Image src={missionImage} height="281" width="100%" />
      </div>
    </>
  );
};

export default Mission;

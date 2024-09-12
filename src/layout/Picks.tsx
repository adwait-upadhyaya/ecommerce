import PicksCard from "../molecules/PicksCard";

const Picks = () => {
  return (
    <>
      <div className="picks">
        <PicksCard
          title="Our Holiday Gift Picks"
          text="The best presents for everyone on your list."
          imageSrc="/images/gifts.png"
        />
        <PicksCard
          title="Cleaner Fahsion"
          text="See the sustainability efforts behind each of our products"
          imageSrc="/images/cotton.png"
        />
      </div>
    </>
  );
};

export default Picks;

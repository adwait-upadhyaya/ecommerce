import React from "react";
import StaticImageSection from "../molecules/StaticImageSection";

import Link from "../atoms/Link";
import Text from "../atoms/Text";

const ExtraSection: React.FC = () => {
  return (
    <section className="extra-section">
      <header className="extra-section__header">
        <Text type="h3">Everlane On You</Text>
        <p>
          Share your latest look with #EverlaneOnYou for a chance to be
          featured.
        </p>
        <Link url="#">Add Your Photo</Link>
      </header>

      <StaticImageSection />
    </section>
  );
};

export default ExtraSection;

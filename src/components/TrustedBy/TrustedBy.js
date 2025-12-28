import Image from "next/image";
import styles from "./TrustedBy.module.scss";

import logo1 from "@/assets/images/trustedPartners/img1.png";
import logo2 from "@/assets/images/trustedPartners/img2.png";
import logo3 from "@/assets/images/trustedPartners/img3.png";
import logo4 from "@/assets/images/trustedPartners/img4.png";
import logo5 from "@/assets/images/trustedPartners/img5.png";
import logo6 from "@/assets/images/trustedPartners/img6.png";
import logo7 from "@/assets/images/trustedPartners/img7.png";

const TrustedBy = () => {
  const logos = [
    { src: logo1, alt: "Wistron" },
    { src: logo2, alt: "Volvo" },
    { src: logo3, alt: "Wabtec" },
    { src: logo4, alt: "Voltas" },
    { src: logo5, alt: "TVS" },
    { src: logo6, alt: "Faiveley" },
    { src: logo7, alt: "Ashok Leyland" },
  ];

  return (
    <section className={styles.trustedSection}>
      <h3 className={styles.heading}>TRUSTED BY INDUSTRY LEADERS</h3>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
                width={160}
                height={80}
                priority={index < 7} // load first set eagerly
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

import Image from "next/image";
import styles from "./page.module.scss";
import {
  ChooseUs,
  DigitalService,
  Header,
  Navigation,
  RealmDigitalSignature,
  SeoServices,
} from "@/templates";
import { TalentHiring } from "@/templates/TalentHiring/TalentHiring";
import headerImg from "../../public/images/header-img.png";
import mobileImage from "../../public/images/mobileImage.png";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Header
        heading="Diversifying the Designs of Digital World"
        text={[
          "Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development. In the market, EISPL has a strong presence in providing quality services to its clients.",
          "EISPL is convinced that one should diversify the offering, given the changing needs of the clients. That is why we engage in multiple projects and activities. We also possess knowledge in web development, app development, UI/UX design, as well as digital marketing.",
        ]}
        imgClasses={styles.headerImg}
        img={headerImg}
        btnText="Book a Call"
      />
      <br /> <br />
      <RealmDigitalSignature />
      <br />
      {/* <div className={styles.headingContainer}>
        <h2 className="heading2">
          Stay Ahead! <br /> Launch Your Next Project with Stackkaroo
        </h2>
      </div> */}
      <Header
        heading="Our Story"
        text={[
          "Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations.",
          "Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride.",
        ]}
        imgClasses={styles.headerImg}
        img={mobileImage}
        btnText="Get Estimated Project Cost"
      />
      <ChooseUs />
      <DigitalService />
      {/* <SeoServices /> */}
      <TalentHiring />
    </main>
  );
}

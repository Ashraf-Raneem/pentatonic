import logo from "../../../assets/logo.png";
import twitter from "../../../assets/twitter.png";
import discord from "../../../assets/discord.png";
import koji from "../../../assets/koji.png";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/collection">COLLECTION</Link></li>
            <li><Link to="/team">TEAM</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/redeem">REDEEM</Link></li>
          </ul>
        </div>
        <div className={styles.socials}>
          <ul>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={discord} alt="" />
            </li>
            <li>
              <img src={koji} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <p>COPYRIGHT PENTATONIC 2022</p>
    </div>
  );
};

export default Footer;

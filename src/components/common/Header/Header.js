import { useState } from "react";
import {Link} from "react-router-dom";
import twitter from "../../../assets/twitter.png";
import discord from "../../../assets/discord.png";
import koji from "../../../assets/koji.png";
import wallet from "../../../assets/wallet.png";
import menu from "../../../assets/menu.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);

  return (
    <>
      <div className={styles.header_big}>
        <div className={styles.header_left}>
          <div className={styles.logo}>
            <h3>The Molecularverse</h3>
            <div>
              by{" "}
              <span>
                PENTATONIC<sup> &copy;</sup>
              </span>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/collection">COLLECTION</Link>
            </li>
            <li>TEAM</li>
            <li>FAQs</li>
            <li>REDEEM</li>
          </ul>
        </div>
        <ul className={styles.header_right}>
          <li>
            <img src={twitter} alt="Twitter" />
          </li>
          <li>
            <img src={discord} alt="Discord" />
          </li>
          <li>
            <img src={koji} alt="Koji" />
          </li>
          <li>
            <img src={wallet} alt="Wallet" />
          </li>
        </ul>
      </div>
      <div className={styles.header_small}>
        <div className={styles.logo}>
          <h3>The Molecularverse</h3>
          <div>
            by{" "}
            <span>
              PENTATONIC<sup> &copy;</sup>
            </span>
          </div>
        </div>
        <div
          className={`${openHeader ? styles.side_nav_open : styles.side_nav_close
            }`}
        >
          <ul className={styles.side_nav_top}>
            <li>
              <Link to="/collection">COLLECTION</Link>
            </li>
            <li>TEAM</li>
            <li>FAQs</li>
            <li>REDEEM</li>
          </ul>
          <ul className={styles.side_nav_bottom}>
            <li>
              <img src={twitter} alt="Twitter" />
            </li>
            <li>
              <img src={discord} alt="Discord" />
            </li>
            <li>
              <img src={koji} alt="Koji" />
            </li>
            <li>
              <img src={wallet} alt="Wallet" />
            </li>
          </ul>
        </div>
        <div className={styles.menu_btn}>
          <img
            src={menu}
            alt="Menu Icon"
            onClick={() => setOpenHeader(!openHeader)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

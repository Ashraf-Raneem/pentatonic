import React from "react";
import styles from "./Team.module.css";
import MaskGroup1 from "../../assets/Mask Group 5.png";
import MaskGroup2 from "../../assets/Mask Group 6.png";
import MaskGroup3 from "../../assets/Mask Group 7.png";

import Image1 from "../../assets/Image 14.png";
import Image2 from "../../assets/Image 15.png";
import Image3 from "../../assets/Image 16.png";
import Image4 from "../../assets/Image 17.png";

const Team = () => {
  return (
    <React.Fragment>
      <div className={styles.team}>
        <div className={styles.team_container}>
          <div className={styles.team_header}>
            <h1 className={styles.team_heading}>THE TEAM</h1>
            <p className={styles.team_desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend sodales. Sed
              imperdiet auctor malesuada. Vestibulum elementum velit id magna hendrerit tristique. Etiam posuere, arcu
              et imperdiet blandit, ligula leo vehicula urna, quis hendrerit libero velit quis lacus. In ac dui mi.{" "}
              <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend
              sodales. Sed imperdiet auctor malesuada. Vestibulum elementum velit id magna hendrerit tristique. Etiam
              posuere
            </p>
          </div>
          <div className={styles.team_projects}>
            <div className={styles.team_section_header}>
              <p>PROJECTS</p>
            </div>
            <div className={styles.team_projects_container}>
              <div className={styles.team_projects_text}>
                <p>PENTATONIC X STARTIKATURE: FRACTURED</p>
                <span>
                  Curabitur lacinia magna et libero blandit fermentum. Aliquam in placerat ipsum. Nunc nec metus quis
                  libero viverra tempor eget quis felis. Proin lobortis lectus eu eros gravida mollis. Cras sit amet
                  libero mattis, posuere nisi id, elementum libero. Morbi imperdiet, justo sit amet convallis euismod,
                  augue turpis fermentum velit, at tempus augue libero sed metus. Morbi justo tortor, consequat sit amet
                  nulla at, condimentum lacinia massa.
                </span>
                <span>
                  "Curabitur lacinia magna et libero blandit fermentum. Aliquam in placerat ipsum. Nunc nec metus quis
                  libero viverra tempor eget quis felis. Proin lobortis lectus eu eros gravida mollis. Cras sit amet ".
                </span>
                <span>- Danial Arsham, Startikature</span>
              </div>
              <div className={styles.team_projects_img}>
                <img src={MaskGroup1} alt="" />
              </div>
            </div>
            <div className={styles.team_projects_container}>
              <div className={styles.team_projects_img}>
                <img src={MaskGroup3} alt="" />
              </div>
              <div className={styles.team_projects_text}>
                <p>MASAKU</p>
                <span>
                  Curabitur lacinia magna et libero blandit fermentum. Aliquam in placerat ipsum. Nunc nec metus quis
                  libero viverra tempor eget quis felis. Proin lobortis lectus eu eros gravida mollis. Cras sit amet
                  libero mattis, posuere nisi id, elementum libero. Morbi imperdiet, justo sit amet convallis euismod,
                  augue turpis fermentum velit, at tempus augue libero sed metus. Morbi justo tortor, consequat sit amet
                  nulla at, condimentum lacinia massa.
                </span>
                <span>
                  Curabitur lacinia magna et libero blandit fermentum. Aliquam in placerat ipsum. Nunc nec metus quis
                  libero viverra tempor eget quis felis. Proin lobortis lectus eu eros gravida mollis. Cras sit amet.
                  augue turpis fermentum velit, at tempus augue libero sed metus. Morbi justo tortor, consequat sit amet
                  nulla at, condimentum lacinia massa.
                </span>
              </div>
            </div>
            <div className={styles.team_projects_container}>
              <div className={styles.team_projects_text}>
                <p>THE POCKET PEEBER BY OTHERWARE</p>
                <span>
                  Curabitur lacinia magna et libero blandit fermentum. Aliquam in placerat ipsum. Nunc nec metus quis
                  libero viverra tempor eget quis felis. Proin lobortis lectus eu eros gravida mollis. Cras sit amet
                  libero mattis, posuere nisi id, elementum libero. Morbi imperdiet, justo sit amet convallis euismod,
                  augue turpis fermentum velit, at tempus augue libero sed metus. Morbi justo tortor, consequat sit amet
                  nulla at, condimentum lacinia massa.
                </span>
                <span>
                  Curabitur lacinia magna et libero blandit fermentum. Aliquam in placerat ipsum. Nunc nec metus quis
                  libero viverra tempor eget quis felis. Proin lobortis lectus eu eros gravida mollis. Cras sit amet.
                  libero viverra tempor eget quis felis. Proin lobortis lectus eu eros gravida mollis. Cras sit amet.
                </span>
              </div>
              <div className={styles.team_projects_img}>
                <img src={MaskGroup2} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.team_projects}>
            <div className={styles.team_section_header}>
              <p>TEAM</p>
            </div>
            <div className={styles.team_members_container}>
              <div className={styles.team_members_col}>
                <div className={styles.team_members_img}>
                  <img src={Image1} alt="" />
                </div>
                <div className={styles.team_members_img}>
                  <img src={Image2} alt="" />
                </div>
              </div>
              <div className={styles.team_members_col}>
                <div className={styles.team_members_img}>
                  <img src={Image3} alt="" />
                </div>
                <div className={styles.team_members_img}>
                  <img src={Image4} alt="" />
                </div>
              </div>
              <div className={styles.team_members_col}>
                <div className={styles.team_members_details}>
                  <h5>Lorem Ipsum</h5>
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend sodales. Sed
                    imperdiet auctor malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    lacinia eleifend sodales.
                  </span>
                </div>
                <div className={styles.team_members_details}>
                  <h5>Lorem Ipsum</h5>
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend sodales. Sed
                    imperdiet auctor malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    lacinia eleifend sodales.
                  </span>
                </div>
                <div className={styles.team_members_details}>
                  <h5>Lorem Ipsum</h5>
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend sodales. Sed
                    imperdiet auctor malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    lacinia eleifend sodales.
                  </span>
                </div>
                <div className={styles.team_members_details}>
                  <h5>Lorem Ipsum</h5>
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend sodales. Sed
                    imperdiet auctor malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    lacinia eleifend sodales
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.team_members_container_sm}>
              <div className={styles.team_members_col}>
                <div className={styles.team_members_img}>
                  <img src={Image1} alt="" />
                </div>
                <div className={styles.team_members_details}>
                  <h5>Lorem Ipsum</h5>
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend sodales. Sed
                    imperdiet auctor malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    lacinia eleifend sodales.
                  </span>
                </div>
              </div>
              <div className={styles.team_members_col}>
                <div className={styles.team_members_img}>
                  <img src={Image2} alt="" />
                </div>
                <div className={styles.team_members_details}>
                  <h5>Lorem Ipsum</h5>
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend sodales. Sed
                    imperdiet auctor malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    lacinia eleifend sodales.
                  </span>
                </div>
              </div>
              <div className={styles.team_members_col}>
                <div className={styles.team_members_img}>
                  <img src={Image3} alt="" />
                </div>
                <div className={styles.team_members_details}>
                  <h5>Lorem Ipsum</h5>
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend sodales. Sed
                    imperdiet auctor malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    lacinia eleifend sodales.
                  </span>
                </div>
              </div>
              <div className={styles.team_members_col}>
                <div className={styles.team_members_img}>
                  <img src={Image4} alt="" />
                </div>
                <div className={styles.team_members_details}>
                  <h5>Lorem Ipsum</h5>
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia eleifend sodales. Sed
                    imperdiet auctor malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    lacinia eleifend sodales.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team_footer}>
        <h2>Verified Smart contract address - TBC</h2>
      </div>
    </React.Fragment>
  );
};

export default Team;

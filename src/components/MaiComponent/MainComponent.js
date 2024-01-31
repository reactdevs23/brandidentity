import React from "react";
import styles from "./MainComponent.module.css";
const MainComponent = ({ subHeading, heading, data }) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.headingContainer}>
          <h3 className={styles.subHeading}>{subHeading}</h3>

          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.cards}>
          {data.map((el, i) => (
            <div
              style={{ "--bg": el.bg }}
              key={i}
              className={`${styles.card} ${styles[`items-${data.length}`]}  ${
                data.length > 5 && styles[`items-5`]
              }`}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.iconContainer}>
                  <p className={styles.cirlce}>{i + 1}</p>
                  <p className={styles.smallCirlce}></p>
                  <div className={styles.icon}>{el.icon}</div>
                </div>
              </div>
              <h4 className={styles.title}>{el.title}</h4>
              <p className={styles.info}>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

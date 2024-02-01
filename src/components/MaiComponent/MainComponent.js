import React, { useEffect, useRef } from "react";
import styles from "./MainComponent.module.css";
const MainComponent = ({ subHeading, heading, data }) => {
  const titleRefs = useRef([]);
  useEffect(() => {
    // Get the maximum height among all title elements
    const titles = titleRefs.current.map(
      (ref) => ref.getBoundingClientRect().height
    );
    const maxTitleHeight = Math.max(...titles);

    // Set the maximum height to all title elements using the titleRefs
    titleRefs.current.forEach((ref) => {
      ref.style.height = `${maxTitleHeight}px`;
    });
  }, [data]);
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
              style={{ "--lineBg": el.lineBg, "--shadowColor": el.shadowColor }}
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
              <h4
                className={styles.title}
                ref={(el) => (titleRefs.current[i] = el)}
              >
                {el.title}
              </h4>
              <p className={styles.info}>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

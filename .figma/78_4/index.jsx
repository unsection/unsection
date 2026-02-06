import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.topBar}>
      <img src="../image/mlb6tspm-49v5ozm.svg" className={styles.brand} />
      <div className={styles.type}>
        <div className={styles.navItem}>
          <img src="../image/mlb6tspm-20uzgnr.svg" className={styles.icon} />
          <p className={styles.sections}>Sections</p>
        </div>
        <div className={styles.navItem2}>
          <img src="../image/mlb6tspm-q4rawvd.svg" className={styles.icon} />
          <p className={styles.sections}>Animations</p>
        </div>
        <div className={styles.navItem2}>
          <img src="../image/mlb6tspm-rxd8tvz.svg" className={styles.icon} />
          <p className={styles.sections}>Supply</p>
        </div>
      </div>
      <div className={styles.search}>
        <img src="../image/mlb6tspn-3wicgg7.svg" className={styles.iconSearch} />
        <p className={styles.searchPlaceholder}>
          Try “Pricing table”, or “Benefits”
        </p>
      </div>
      <div className={styles.actions}>
        <p className={styles.actionItem}>Pricing</p>
        <p className={styles.actionItem}>Login</p>
        <div className={styles.btn}>
          <p className={styles.buttonText}>Join for free</p>
          <img src="../image/mlb6tspn-8xadbtu.svg" className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default Component;

import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.sideNav}>
      <img src="../image/ml9s32fm-w7n5ezp.svg" className={styles.brand} />
      <div className={styles.menu}>
        <div className={styles.navItem}>
          <img src="../image/ml9s32fm-tvm4lpv.svg" className={styles.icon} />
        </div>
        <div className={styles.navItem2}>
          <img src="../image/ml9s32fm-1qi2kwc.svg" className={styles.icon} />
        </div>
        <div className={styles.navItem2}>
          <img src="../image/ml9s32fm-pcblod2.svg" className={styles.icon} />
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.menu2}>
        <div className={styles.navItem2}>
          <img src="../image/ml9s32fl-tqjhn68.svg" className={styles.icon} />
        </div>
        <div className={styles.navItem2}>
          <img src="../image/ml9s32fl-58nin3m.svg" className={styles.icon} />
        </div>
        <div className={styles.navItem2}>
          <img src="../image/ml9s32fm-x4x45qo.svg" className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default Component;

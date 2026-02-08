import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.designer}>
      <img src="../image/mldocnjk-9ael12j.png" className={styles.ellipse1} />
      <div className={styles.designerInfo}>
        <p className={styles.name}>Marcel</p>
        <p className={styles.description}>Feature section design</p>
      </div>
    </div>
  );
}

export default Component;

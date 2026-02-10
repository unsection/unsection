import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.col}>
        <div className={styles.titleWrapper}>
          <div className={styles.content}>
            <p className={styles.feature}>Feature</p>
            <div className={styles.rectangle1} />
            <p className={styles.flowCoreCapabilities}>
              Flow Core Capabilities Feature Design
            </p>
          </div>
          <div className={styles.actions}>
            <div className={styles.smallAct}>
              <p className={styles.feature}>Copy</p>
            </div>
            <div className={styles.smallAct}>
              <p className={styles.feature}>Visit</p>
            </div>
          </div>
        </div>
        <img src="../image/mlgyuulh-xfhrpqb.png" className={styles.image} />
        <div className={styles.tags}>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Office</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Modern</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Office</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Flooring</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Office</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Chair</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Desk</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Setup</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Interior</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Table</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Brick</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Wall</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Workspace</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Brick</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Printer</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Wooden</p>
          </div>
          <div className={styles.tagStyle}>
            <p className={styles.feature}>Floc</p>
          </div>
        </div>
      </div>
      <div className={styles.colRight}>
        <div className={styles.adBlock}>
          <img src="../image/mlgyuulh-kpb2eyr.png" className={styles.adThumb} />
          <div className={styles.content2}>
            <p className={styles.feature}>Ad</p>
            <div className={styles.rectangle1} />
            <p className={styles.discoverRealWordDesi}>
              Discover real-word design inspo
            </p>
          </div>
        </div>
        <div className={styles.metaBlock}>
          <p className={styles.style}>Style</p>
          <p className={styles.light}>Light</p>
          <p className={styles.light}>Card</p>
          <p className={styles.light}>Large Type</p>
          <p className={styles.light}>Bento</p>
          <p className={styles.light}>Image</p>
          <p className={styles.light}>Minimal</p>
        </div>
        <div className={styles.metaBlock}>
          <p className={styles.style}>Industry</p>
          <p className={styles.light}>Technology</p>
          <p className={styles.light}>Software as a Service</p>
          <p className={styles.light}>Finance</p>
        </div>
        <div className={styles.metaBlock}>
          <p className={styles.style}>Type</p>
          <p className={styles.light}>Software</p>
          <p className={styles.light}>Web App</p>
        </div>
        <div className={styles.metaBlock2}>
          <p className={styles.style}>Added</p>
          <p className={styles.style}>25.02.2025</p>
        </div>
      </div>
    </div>
  );
}

export default Component;

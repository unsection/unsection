import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.heroLayout}>
      <div className={styles.sideMenu}>
        <p className={styles.menuItem}>Hero</p>
        <p className={styles.menuItem}>Testimonials</p>
        <p className={styles.menuItem}>Feature</p>
        <p className={styles.menuItem}>Call to actions</p>
        <p className={styles.menuItem}>Footer</p>
        <p className={styles.menuItem}>Blog</p>
        <p className={styles.menuItem}>Navbar</p>
        <p className={styles.menuItem}>Pricing</p>
        <p className={styles.menuItem}>Logo</p>
        <p className={styles.menuItem}>FAQs</p>
        <p className={styles.menuItem}>Team</p>
        <p className={styles.menuItem}>Contact</p>
        <p className={styles.menuItem}>Works</p>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.heroTop}>
          <div className={styles.headline2}>
            <p className={styles.headline}>
              Discover curated website section design inspiration
            </p>
            <p className={styles.subheadline}>
              Browse the best website section design examples — fresh ideas for your
              next build.
            </p>
            <div className={styles.btn}>
              <img src="../image/mlb8gflh-rawqdms.svg" className={styles.frame} />
              <p className={styles.buttonText}>Subs</p>
            </div>
          </div>
          <div className={styles.mediaSpot}>
            <div className={styles.bottomAds}>
              <div className={styles.sponsor}>
                <p className={styles.sponsorName}>Mobbin</p>
              </div>
              <img src="../image/mlb8gflh-2qo3x7c.svg" className={styles.frame} />
            </div>
            <div className={styles.bottomAds}>
              <div className={styles.sponsor}>
                <p className={styles.sponsorName}>Mobbin</p>
              </div>
              <img src="../image/mlb8gflh-2qo3x7c.svg" className={styles.frame} />
            </div>
          </div>
        </div>
        <div className={styles.tags}>
          <div className={styles.tag2}>
            <p className={styles.tag}>UI Mockup</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Uncommon</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Gradient</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Text Heavy</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Light</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Flat Color</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Video</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Vector</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Table View</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Black & White</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Dark</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Card</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Colorful</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Bento</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Visible Border</p>
          </div>
          <div className={styles.tag2}>
            <p className={styles.tag}>Minimal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;

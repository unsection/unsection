import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.memberAuthBlock}>
      <img src="../image/mljv0756-l1515i6.svg" className={styles.brand} />
      <p className={styles.title}>Sign in to your account</p>
      <div className={styles.button}>
        <img src="../image/mljv0756-yp6yosj.svg" className={styles.symbolSvg} />
        <p className={styles.googleSignInText}>Sign in with Google</p>
      </div>
      <p className={styles.emailSignInPrompt}>Or continue with email</p>
      <div className={styles.emailForm}>
        <div className={styles.button2}>
          <p className={styles.emailLabel}>Email address</p>
        </div>
        <div className={styles.button2}>
          <p className={styles.emailLabel}>Password</p>
        </div>
        <div className={styles.button3}>
          <p className={styles.signInButtonText}>Sign in</p>
        </div>
      </div>
      <p className={styles.forgotPasswordText}>I forgot my password</p>
    </div>
  );
}

export default Component;

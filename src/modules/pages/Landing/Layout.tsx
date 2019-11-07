// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from 'react';

import styles from './Layout.module.scss';

import { css, jsx } from '@emotion/core';

const LandingPageLayout: React.FC = () => {

    return (
     <main className={styles.landing}>
       landing
     </main>
    );
}


export default LandingPageLayout;
import React from 'react';

import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles.header}>
      <div className='text-white text-center'>
        <h1 className='font-bold my-4' >Food Hunt</h1>
        <h2>Always fresh &amp; Delightful</h2>
        <a href="#gallary">View Our gallary</a>
      </div>
    </div>
  )
}

export default Landing
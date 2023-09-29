import React from 'react';

import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles.header} id='/'>
      <div className='text-current text-center text-[5.5rem]'>
        <h1 className='font-bold my-4' >Food Hunt</h1>
        <h2 className='text-[3.5rem] mb-[3rem]'>Always fresh &amp; Delightful</h2>
        <a className={`${styles.btn} ${styles.btn_lg} text-white bg-[#ff214f] border-[#ff214f]`} href="#gallary">View Our gallary</a>
      </div>
    </div>
  )
}

export default Landing
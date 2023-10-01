import React from 'react';

import styles from './Landing.module.css';
import Link from 'next/link';

function Landing() {
  return (
    <div className={styles.header} id='/'>
      <div className='text-current text-center text-[5.5rem]'>
        <h1 className='font-bold my-4' >Food Hunt</h1>
        <h2 className='text-[3.5rem] mb-[3rem]'>Always fresh &amp; Delightful</h2>
        <Link className={`${styles.btn} ${styles.btn_lg} text-white bg-[#ff214f] border-[#ff214f]`} href="#gallery">View Our gallary</Link>
      </div>
    </div>
  )
}

export default Landing
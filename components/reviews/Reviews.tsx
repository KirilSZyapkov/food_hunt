import React from "react";
import styles from "./Reviews.module.css";

function Reviews() {
  return (
    <section className="min-h-[500px] flex flex-col justify-center text-white bg-[#343a40] w-full px-[15px]">
      <h2 className="text-7xl text-center my-[3rem] font-medium">REVIEWS</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className="relative text-center">
            <h3 className="font-medium mb-[0.5rem] text-3xl">John Doe</h3>
            <h6 className="text-[0.8rem] tracking-wide opacity-90 font-medium mb-[0.5rem]">Web Designer</h6>
            <div className={`${styles.body} relative p-[1rem] border-2 border-[#495057] border-t-[#ff214f] rounded mt-[30px]`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                nobis eligendi, quaerat accusamus ipsum sequi dignissimos
                consequuntur blanditiis natus. Aperiam!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.col}>
          <div className={`${styles.testemonial_card}relative text-center`}>
            <h3 className="font-medium mb-[0.5rem] text-3xl">Steve Thomas</h3>
            <h6 className="text-[0.8rem] tracking-wide opacity-90 font-medium mb-[0.5rem]">Painter</h6>
            <div className={`${styles.body} relative p-[1rem] border-2 border-[#495057] border-t-[#ff214f] rounded mt-[30px]`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                nobis eligendi, quaerat accusamus ipsum sequi dignissimos
                consequuntur blanditiis natus. Aperiam!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.col}>
          <div className="relative text-center">
            <h3 className="font-medium mb-[0.5rem] text-3xl">Miranda Joy</h3>
            <h6 className="text-[0.8rem] tracking-wide opacity-90 font-medium mb-[0.5rem]">Musition</h6>
            <div className={`${styles.body} relative p-[1rem] border-2 border-[#495057] border-t-[#ff214f] rounded mt-[30px]`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                nobis eligendi, quaerat accusamus ipsum sequi dignissimos
                consequuntur blanditiis natus. Aperiam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

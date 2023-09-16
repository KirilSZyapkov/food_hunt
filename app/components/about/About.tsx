import React from "react";

import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about_container}>
      <div className="flex justify-center mr-[-15px] ml-[-15px]">
        <div className={styles.about_img}>a</div>
        <div className={styles.col_txt}>
          <div className="flex justify-center mr-[-15px] ml-[-15px]">
            <div>
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur, quisquam accusantium nostrum modi, nemo, officia
                veritatis ipsum facere maxime assumenda voluptatum enim! Labore
                maiores placeat impedit, vero sed est voluptas!Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Expedita alias dicta
                autem, maiores doloremque quo perferendis, ut obcaecati harum,
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                necessitatibus iste, nulla recusandae porro minus nemo eaque cum
                repudiandae quidem voluptate magnam voluptatum?
                <br />
                Nobis, saepe sapiente omnis qui eligendi pariatur. quis
                voluptas. Assumenda facere adipisci quaerat. Illum doloremque
                quae omnis vitae.
              </p>
              <p>
                <b>
                  Lonsectetur adipisicing elit. Blanditiis aspernatur, ratione
                  dolore vero asperiores explicabo.
                </b>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ab
                itaque modi, reprehenderit fugit soluta, molestias optio
                repellat incidunt iure sed deserunt nemo magnam rem explicabo
                vitae. Cum, nostrum, quidem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

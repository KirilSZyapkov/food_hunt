"use client";

import React, { useEffect } from "react";
import styles from "./ContactUs.module.css";

function ContactUs() {
  useEffect(() => {
    function renderMap() {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyD4L8RDcj8kbyrnKW8IOdNcaONvuGAYUGY&callback=initMap&libraries=&v=weekly"
      );

      window.initMap = initMap;
    }
    renderMap();

    function initMap() {
      // The location of Uluru

      const uluru = { lat: 44.43629, lng: 26.103575 };
      // The map, centered at Uluru
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: uluru,
      });

      const marker = new window.google.maps.Marker({
        position: uluru,
        map: map,
      });

      return {
        map,
        marker,
      };
    }

    function loadScript(url: string) {
      let index = window.document.getElementsByTagName("script")[0];
      let script = window.document.createElement("script");
      script.src = url;
      script.async = true;
      script.defer = true;
      index.parentNode?.insertBefore(script, index);
    }
  }, []);

  return (
    <section className="w-full min-h-[300px] flex flex-wrap flex-coll justify-center bg-[#343a40] text-white border-t border-t-[#495057] px-[15px] mx-auto texte-center">
      <div>
        <div className="flex flex-col">
          <div className="flex flex-col text-center">
            <h3 className="text-7xl text-center my-[3rem] font-medium">FIND US</h3>
            <p className="text-start mb-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
              laboriosam doloremque odio delectus, sunt magnam laborum impedit
              molestiae, magni quae ipsum, ullam eos! Alias suscipit impedit et,
              adipisci illo quam.
            </p>
          </div>
          <div className={styles.contat_cards}>
            <div className="text-center">
              <h3 className="text-3xl text-center mb-[10px] font-medium">ADDRESS</h3>
              <span>12345 Fake ST NoWhere, AB Country</span>
            </div>
            <div className="text-center">
              <h3 className="text-3xl text-center mb-[10px] font-medium">PHONE</h3>
              <span>{"(123) 456-7890"}</span>
            </div>
            <div className="text-center">
              <h3 className="text-3xl text-center mb-[10px] font-medium">EMAIL</h3>
              <a href="mailto:info@website.com">info@website.com</a>
            </div>
          </div>
        </div>
        <div className={styles.map_container}>
          <div className={styles.map} id="map"></div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

"use client";

import React, { useEffect } from "react";
import styles from "./ContactUs.module.css";

function ContactUs() {

  useEffect(()=>{
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
      let index = window.document.getElementsByTagName('script')[0];
      let script = window.document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      index.parentNode?.insertBefore(script, index);
    }
  },[]);
 

  return (
    <section>
      <div>
        <div className={styles.map_container}>
          <div className={styles.map} id="map"></div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default ContactUs;

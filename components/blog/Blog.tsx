import React from "react";
import styles from "./Blog.module.css";
import { fetchFeeds } from "@/service";
import Image from "next/image";

async function Blog() {
  const feeds = await fetchFeeds();

  return (
    <section className="text-center bg-[#343a40] py-[20px]" id="blog">
      <h1 className="text-7xl text-white py-16">EVENTS AT THE FOOD HUT</h1>
      <div className={styles.carosel}>
        {feeds.results.map((f: any) => (
          <figure className={styles.snip1574} key={f.item.id}>
            <Image src={f.item.thumbnail_url} alt="profile-sample2" width={300} height={100}/>
            <figcaption className={styles.description}>
              <blockquote>
                <p>{f.item.description}</p>
              </blockquote>
              <h3>{f.item.name}</h3>
              <h5>Founder</h5>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Blog;

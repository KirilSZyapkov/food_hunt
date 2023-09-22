import React from "react";
import styles from './Blog.module.css';
import { fetchFeeds } from "@/service";

async function Blog() {

  const feeds = await fetchFeeds();
  
  
  return (
    <section className="text-center bg-[#343a40] py-[20px]">
      <h1 className="text-7xl text-white py-16">EVENTS AT THE FOOD HUT</h1>
      <div className={styles.carosel}>
        <figure className={styles.snip1574}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg"
            alt="profile-sample2"
          />
          <figcaption>
            <blockquote>
              <p>
                Which is worse, that everyone has his price, or that the price
                is always so low.
              </p>
            </blockquote>
            <h3>Sue Shei</h3>
            <h5>Founder</h5>
          </figcaption>
        </figure>
        <figure className={styles.snip1574}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample37.jpg"
            alt="profile-sample7"
          />
          <figcaption>
            <blockquote>
              <p>
                I'm killing time while I wait for life to shower me with meaning
                and happiness.
              </p>
            </blockquote>
            <h3>Will Barrow</h3>
            <h5>Web Designer</h5>
          </figcaption>
        </figure>
        <figure className={styles.snip1574}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample35.jpg"
            alt="profile-sample6"
          />
          <figcaption>
            <blockquote>
              <p>
                The only skills I have the patience to learn are those that have
                no real application in life.{" "}
              </p>
            </blockquote>
            <h3>Indigo Violet</h3>
            <h5>Public Relations</h5>
          </figcaption>
        </figure>
        <figure className={styles.snip1574}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg"
            alt="profile-sample2"
          />
          <figcaption>
            <blockquote>
              <p>
                Which is worse, that everyone has his price, or that the price
                is always so low.
              </p>
            </blockquote>
            <h3>Sue Shei</h3>
            <h5>Founder</h5>
          </figcaption>
        </figure>
        <figure className={styles.snip1574}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample37.jpg"
            alt="profile-sample7"
          />
          <figcaption>
            <blockquote>
              <p>
                I'm killing time while I wait for life to shower me with meaning
                and happiness.
              </p>
            </blockquote>
            <h3>Will Barrow</h3>
            <h5>Web Designer</h5>
          </figcaption>
        </figure>
        <figure className={styles.snip1574}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample35.jpg"
            alt="profile-sample6"
          />
          <figcaption>
            <blockquote>
              <p>
                The only skills I have the patience to learn are those that have
                no real application in life.{" "}
              </p>
            </blockquote>
            <h3>Indigo Violet</h3>
            <h5>Public Relations</h5>
          </figcaption>
        </figure>
        <figure className={styles.snip1574}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg"
            alt="profile-sample2"
          />
          <figcaption>
            <blockquote>
              <p>
                Which is worse, that everyone has his price, or that the price
                is always so low.
              </p>
            </blockquote>
            <h3>Sue Shei</h3>
            <h5>Founder</h5>
          </figcaption>
        </figure>
        <figure className={styles.snip1574}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample37.jpg"
            alt="profile-sample7"
          />
          <figcaption>
            <blockquote>
              <p>
                I'm killing time while I wait for life to shower me with meaning
                and happiness.
              </p>
            </blockquote>
            <h3>Will Barrow</h3>
            <h5>Web Designer</h5>
          </figcaption>
        </figure>
        <figure className={styles.snip1574}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample35.jpg"
            alt="profile-sample6"
          />
          <figcaption>
            <blockquote>
              <p>
                The only skills I have the patience to learn are those that have
                no real application in life.{" "}
              </p>
            </blockquote>
            <h3>Indigo Violet</h3>
            <h5>Public Relations</h5>
          </figcaption>
        </figure>
      </div>

    </section>
  );
}

export default Blog;

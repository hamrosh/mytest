import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about image"></img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
            fermentum erat. Phasellus quis pellentesque diam. Sed eu rutrum
            lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
            fermentum erat. Phasellus quis pellentesque diam. Sed eu rutrum
            lorem. Nulla dignissim magna in elit vulputate bibendum. Maecenas
            eget nibh id nisi auctor fringilla. Maecenas vulputate condimentum
            sapien, vel faucibus dolor rutrum .
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
        `
      </div>
    </section>
  );
};

export default About;

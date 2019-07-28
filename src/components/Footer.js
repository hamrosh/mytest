import React from 'react';
import styles from '../css/footer.module.css';
import { Link } from 'gatsby';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        {links.map((itm, indx) => {
          return <Link to={itm.path}>{itm.text}</Link>;
        })}
      </div>

      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; CtrlJS pvt ltd {new Date().getFullYear()} all rights
        reservered.
      </div>
    </div>
  );
};

export default Footer;

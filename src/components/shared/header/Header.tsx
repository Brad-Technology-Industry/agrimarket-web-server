import React from "react";

import styles from "./header.module.css";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(`${id}`);

    console.log({ element });

    if (element !== null) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y - 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav role="navigation" className={styles.navbar}>
      <div className={styles.logo}>
        <h2>Welcome</h2>
      </div>

      <ul className={styles.menu}>
        <li className={styles.list}>
          <button
            onClick={() => {
              scrollToSection("#home");
            }}
            className={styles.ref}
          >
            Home
          </button>
        </li>
        <li className={styles.list}>
          <button
            onClick={() => {
              scrollToSection("#about");
            }}
            className={styles.ref}
          >
            Products
          </button>
        </li>
        <li className={styles.list}>
          <button
            onClick={() => {
              scrollToSection("#services");
            }}
            className={styles.ref}
          >
            Testimonials
          </button>
        </li>
        <li className={styles.list}>
          <button
            onClick={() => {
              scrollToSection("#projects");
            }}
            className={styles.ref}
          >
      Contacts
          </button>
        </li>
        
      </ul>
    </nav>
  );
};

export default Header;

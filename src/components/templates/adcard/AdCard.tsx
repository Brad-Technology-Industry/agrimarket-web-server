import React from "react";

import styles from "../adcard";

import Yams from "../../../assets/yams.jpeg";
import Tomatoes from "../../../assets/tomatoes.jpg";
import BellPepper from "../../../assets/bell-peppers.jpg";
import Carrot from "../../../assets/carrot.jpg";
import Plantain from "../../../assets/plantain.png";
import Potatoes from "../../../assets/irish_potatoes.jpeg";

const AdCard = () => {
  return (
    <section id="products" className={styles.products}>
      <div className={styles.title}></div>

      <div className={styles.products__cards}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Yams} alt="Product1" />
          </div>
          {/* star rating  */}
          <h2>White Yam</h2>
          <p>
            Big fat yam directly from the Ndop ready for your tasty and spicy
            porridge.
          </p>
          <a href="">
            <h4>XAF 2000</h4>
          </a>
          <br />
          <h6>The Great Mountaina Garden</h6>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Tomatoes} alt="Product1" />
          </div>
          <h2>Fresh Tomatoes</h2>
          <p>
            Freshly harvested tomatoes from botanic garden ready for delicious
            stew
          </p>
          <a href="">
            <h4>XAF 500</h4>
            <br />
            <h6>The Great Mountaina Garden</h6>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={BellPepper} alt="Product1" />
          </div>
          <h2>Bell Peppers</h2>
          <p>
            Freshly harvested bell pepper, the missing ingredient for that
            perfect meal
          </p>
          <a href="">
            <h4>XAF 200</h4>
          </a>
          <br />
          <h6>The Great Mountaina Garden</h6>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Carrots} alt="Product1" />
          </div>
          <h2>Carrots</h2>
          <p>
            Juicy sweet tasty carrots, the vegetable for to add flavor to your
            fried rice.
          </p>
          <a href="">
            <h4>XAF 700</h4>
          </a>
          <br />
          <h6>BradAgric Business</h6>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Plantain} alt="Product1" />
          </div>
          <h2>Plantain</h2>
          <p>
            Bunch of Plantain with healthy clusters, adequate to make Chips,
            dodo and Condre
          </p>
          <a href="">
            <h4>XAF 5500</h4>
          </a>
          <br />
          <h6>BradAgric Business</h6>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Cucumber} alt="Product1" />
          </div>
          <h2>Cucumber</h2>
          <p>
            Freshly harvested cucumber, the perfect vegetable for colouring
            salad
          </p>
          <a href="">
            <h4>XAF 250</h4>
          </a>
          <br />
          <h6>BradAgric Business</h6>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Potatoes} alt="Product1" />
          </div>
          <h2>Potatoes</h2>
          <p>
            Freshly harvested Potatoes, the perfect vegetable for colouring
            salad
          </p>
          <a href="">
            <h4>XAF 1500</h4>
          </a>
          <br />
          <h6>BradAgric Business</h6>
        </div>
      </div>
    </section>
  );
};

export default AdCard;

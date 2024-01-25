import "./home-hero.scss";
function HomeHero() {
  return (
    <section id="hero" className="hero">
      <div className="home-hero">
        {" "}
        <div className="hero-content">
          <div className="hero-left">
            <h2 className="section-title">Dé specialist…</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="primary-btn">
              <img
                src="../../assets/feather-shopping-cart-white.svg"
                alt="shoping cart"
              />
              Winkel
            </a>
            <div className="arrow-container">
              <img src="../../assets/Group_34.png" alt="" />
              <img src="../../assets/Group_35.png" alt="" />
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-right-content">
              <div className="hero-right-image">
                <img src="../../assets/window.png" alt="" />
              </div>
              <div className="hero-right-text">
                <h3>
                  <span>Dak</span> <br />
                  Lichtkoepels
                </h3>
                <p>
                  De renovatie van bestaande koepels of het plaatsen van een
                  nieuwe koepel ? Een traditionele…
                </p>
                <div className="hero-right-text-link">
                  <a href="#">Klik hier voor meer informatie</a>
                  <img src="../../assets/awesome-arrow-right.png" alt="right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-bottom-content-box">
            <img
              className="hero-bottom-icon"
              src="../../assets/Group_76.png"
              alt=""
            />
            <div className="hero-bottom-arrow-box">
              <h3>Assortiment</h3>
              <img src="../../assets/awesome-arrow-right-white.png" alt="" />
            </div>
          </div>
          <div className="hero-bottom-content-box">
            <img
              className="hero-bottom-icon"
              src="../../assets/testimonial.png"
              alt=""
            />
            <div className="hero-bottom-arrow-box">
              <h3>Getuigenissen</h3>
              <img src="../../assets/awesome-arrow-right-white.png" alt="" />
            </div>
          </div>
          <div className="hero-bottom-content-box">
            <img
              className="hero-bottom-icon"
              src="../../assets/loop-arrow.png"
              alt=""
            />
            <div className="hero-bottom-arrow-box">
              <h3>Up-To-Date</h3>
              <img src="../../assets/awesome-arrow-right-white.png" alt="" />
            </div>
          </div>
          <div className="hero-bottom-content-box">
            <img
              className="hero-bottom-icon"
              src="../../assets/customer-support.png"
              alt=""
            />
            <div className="hero-bottom-arrow-box">
              <h3>Services</h3>
              <img src="../../assets/awesome-arrow-right-white.png" alt="" />
            </div>
          </div>
          <div className="hero-bottom-content-box">
            <img
              className="hero-bottom-icon"
              src="../../assets/Group_76.png"
              alt=""
            />
            <div className="hero-bottom-arrow-box">
              <h3>Wie zijn wij</h3>
              <img src="../../assets/awesome-arrow-right-white.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;

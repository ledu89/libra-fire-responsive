import "./testimonials.scss";
function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonial-container">
        <h2>Tevreden klanten vertellen</h2>
        <div className="testimonial-carousel-container">
          <div className="testimonial-container-box">
            <div className="testimonial-box-image">
              <img src="../../assets/item1-img.png" alt="" />
            </div>
            <div className="testimonial-text">
              <h3>Robby Stordeur - Toyota Motor Europe</h3>
              <p>
                “Toyota kiest milieubewust voor banken uit recycling materiaal.
                Wij zijn zeer tevreden van...
              </p>
            </div>
            <div className="link-container">
              <a href="#">Klik hier voor meer informatie </a>
              <img src="../../assets/awesome-arrow-right.png" alt="right" />
            </div>
          </div>
          <div className="testimonial-container-box">
            <div className="testimonial-box-image">
              <img src="../../assets/item2-img.png" alt="" />
            </div>
            <div className="testimonial-text">
              <h3>Steve Drechsel zaakvoerder van SD Dakwerken</h3>
              <p>
                ““In een van mijn gesprekken met Chris Leurs, de
                projectverantwoordelijke Dak & Gevel bij Van Wauwe…
              </p>
            </div>
            <div className="link-container">
              <a href="#">Klik hier voor meer informatie </a>
              <img src="../../assets/awesome-arrow-right.png" alt="right" />
            </div>
          </div>
          <div className="testimonial-container-box">
            <div className="testimonial-box-image">
              <img src="../../assets/item3-img.png" alt="" />
            </div>
            <div className="testimonial-text">
              <h3>Bob Lauman - zaakvoerder Dakrubbercentrale</h3>
              <p>
                “Snelheid, wendbaarheid en de beste marktprijzen, dat zijn naar
                mijn aanvoelen de belangrijkste troeven van Van Wauwe…
              </p>
            </div>
            <div className="link-container">
              <a href="#">Klik hier voor meer informatie </a>
              <img src="../../assets/awesome-arrow-right.png" alt="right" />
            </div>
          </div>
        </div>
        <a href="#" className="primary-btn">
          Getuigenissen klanten
        </a>
      </div>
    </section>
  );
}

export default Testimonials;

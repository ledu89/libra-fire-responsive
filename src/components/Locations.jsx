import "./locations.scss";
function Locations() {
  return (
    <section className="locations-section">
      <h2>Bezoek één van onze showrooms</h2>
      <div className="locations-container">
        <div className="location-container-box">
          <div className="location-content-box-content">
            <h3>Deurne (Antwerpen)</h3>
            <div className="location-info">
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\pin-location.svg" alt="" />
                </div>
                <div className="location-text">
                  <p>Oude Bosuilbaan 43, 2100 Deurne</p>
                </div>
              </div>
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\phone.svg" alt="" />
                </div>
                <div className="location-text">
                  <p>03/326 75 70</p>
                </div>
              </div>
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\email.svg" alt="" />
                </div>
                <div className="location-text">
                  <p>verkoop@vanwauwe.com</p>
                </div>
              </div>
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\time.svg" alt="" />
                </div>
                <div className="location-text">
                  <p className="location-text-day">Maandag - Vrijdag</p>
                  <p>
                    van 7u tot 8u <br /> Op afspraak via nummer{" "}
                    <span>03 360 79 99</span>
                  </p>
                  <p className="location-text-day">Maandag - Vrijdag</p>
                  <p>Van 8u tot 17u</p>
                  <p className="location-text-day">
                    Woensdag - Donderdag & Vrijdag
                  </p>
                  <p>
                    van 17u tot 18u op <br /> Op afspraak via nummer{" "}
                    <span>03 360 79 99</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-container-box">
          <div className="location-content-box-content">
            <h3>Lubbeek (Leuven)</h3>
            <div className="location-info">
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\pin-location.svg" alt="" />
                </div>
                <div className="location-text">
                  <p>Staatsbaan 4E, 3210 Lubbeek</p>
                </div>
              </div>
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\phone.svg" alt="" />
                </div>
                <div className="location-text">
                  <p>016/62 09 01</p>
                </div>
              </div>
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\email.svg" alt="" />
                </div>
                <div className="location-text">
                  <p>verkoop@vanwauwe.com</p>
                </div>
              </div>
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\time.svg" alt="" />
                </div>
                <div className="location-text">
                  <p className="location-text-day">Maandag - Vrijdag</p>
                  <p>
                    van 7u tot 8u <br /> Op afspraak via nummer{" "}
                    <span>03 360 79 99</span>
                  </p>
                  <p className="location-text-day">Maandag - Vrijdag</p>
                  <p>Van 8u tot 17u</p>
                  <p className="location-text-day">
                    Woensdag - Donderdag & Vrijdag
                  </p>
                  <p>
                    van 17u tot 18u op <br /> Op afspraak via nummer{" "}
                    <span>03 360 79 99</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-container-box">
          <div className="location-content-box-content">
            <h3>Kontich</h3>
            <div className="location-info">
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\pin-location.svg" alt="" />
                </div>
                <div className="location-text">
                  <p>Prins Boudewijnlaan 17 - unit 1, 2550 Kontich</p>
                </div>
              </div>
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\phone.svg" alt="" />
                </div>
                <div className="location-text">
                  <p>123/4567 890</p>
                </div>
              </div>
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\email.svg" alt="" />
                </div>
                <div className="location-text">
                  <p>verkoop@vanwauwe.com</p>
                </div>
              </div>
              <div className="location-info-row">
                <div className="location-icon">
                  <img src="..\assets\time.svg" alt="" />
                </div>
                <div className="location-text">
                  <p className="location-text-day">Maandag - Vrijdag</p>
                  <p>
                    van 8u tot 12u30
                    <br /> van 13u tot 16u
                    <span>03 360 79 99</span>
                  </p>
                  <p className="location-text-day">Zaterdag en zondag</p>
                  <p>gesloten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="primary-btn">
        Onze showrooms
      </a>
    </section>
  );
}

export default Locations;

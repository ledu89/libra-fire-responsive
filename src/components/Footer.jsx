import "./footer.scss";
function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-container">
          {/* <div className="footer-logo">
          <img src="../assets/logo-footer.png" alt="" />
        </div> */}
          <div className="asortiman">
            <h3>Assortiment</h3>
            <div className="asortiman-container">
              <p>Dak</p>
              <p>Isolatie</p>
              <p>Plaat & folie</p>
              <p>Leiding</p>
              <p>Bekleding</p>
              <p>Tuin</p>
              <p>Diverse</p>
            </div>
          </div>
          <div className="visit">
            <h3>Bezoek ons</h3>
            <div className="visit-container">
              <div className="visit-row">
                <div className="visit-row-icon">
                  <img src="../assets/pin-white.png" alt="" />
                </div>
                <div className="visit-row-text">
                  <p>Deurne (Antwerpen)</p>
                  <p>Oude Bosuilbaan 43, 2100 Deurne</p>
                </div>
              </div>
              <div className="visit-row">
                <div className="visit-row-icon">
                  <img src="../assets/pin-white.png" alt="" />
                </div>
                <div className="visit-row-text">
                  <p>Lubbeek (Leuven)</p>
                  <p>Staatsbaan 4E, 3210 Lubbeek</p>
                </div>
              </div>
              <div className="visit-row">
                <div className="visit-row-icon">
                  <img src="../assets/pin-white.png" alt="" />
                </div>
                <div className="visit-row-text">
                  <p>Prins Boudewijnlaan 17 - unit 1, 2550 Kontich</p>
                </div>
              </div>
            </div>
            <div className="visit-social">
              <h3>Volg ons</h3>
              <div className="socials-icons-container">
                <img src="../assets/linkedin.png" alt="linkedin" />
                <img src="../assets/facebook.png" alt="linkedin" />
                <img src="../assets/instagram.png" alt="linkedin" />
                <img src="../assets/youtube.png" alt="linkedin" />
              </div>
            </div>
          </div>
          <div className="instalation">
            <h3>Installateur</h3>
            <div className="instalation-container">
              <p>Graag installateur worden?</p>
              <div className="instalation-image">
                <img src="../assets/footer-img1.png" alt="inslatater worker" />
              </div>
              <a href="##" className="secondary-btn full-width">
                Meer informatie
              </a>
            </div>
          </div>
          <div className="working">
            <h3>Werken bij?</h3>
            <div className="working-container">
              <p>Van Wauwe werft aan…</p>
              <div className="working-image">
                <img src="../assets/footer-img2.png" alt="people talking" />
              </div>
              <a href="##" className="secondary-btn full-width">
                Meer informatie
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter-container">
        <div className="subfooter-content">
          <p>
            Copyright © 2021 Alle rechten voorbehouden. Van Wauwe - BE
            415.527.412
          </p>
          <div className="subfooter-links">
            <ul>
              <li>
                <a href="#">Disclaimer</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Levervoorwaarden</a>
              </li>
              <li>
                {" "}
                <a href="#">Algemene voorwaarden</a>
              </li>
              <li>
                {" "}
                <a href="#">Clubvoorwaarden</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

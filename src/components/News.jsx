import "./news.scss";
function News() {
  return (
    <section className="news-section">
      <div className="news-section-container">
        <div className="news-title">
          <h2>Nieuws</h2>
        </div>
        <div className="news-boxes-container">
          <div className="news-box">
            <div className="news-box-image">
              <img src="../assets/nieuws1.png" alt="" />
            </div>
            <div className="news-box-text">
              <h3>Opleiding Tridex Deurne</h3>
              <p className="news-date">
                <span>EVENEMENTEN</span> 21/01/2019
              </p>
              <p>
                Op donderdag 18 november konden onze professionele klanten een
                opleiding volgen…
              </p>
              <div className="link-container">
                <a href="#">Klik hier voor meer informatie </a>
                <img
                  src="../assets/awesome-arrow-right-white.png"
                  alt="right"
                />
              </div>
            </div>
          </div>
          <div className="news-box">
            <div className="news-box-image">
              <img src="../assets/nieuws2.png" alt="" />
            </div>
            <div className="news-box-text">
              <h3>Vernieuwde showroom Deurne</h3>
              <p className="news-date">
                <span>EVENEMENTEN</span> 21/01/2019
              </p>
              <p>
                Op donderdag 18 november konden onze professionele klanten een
                opleiding volgen…
              </p>
              <div className="link-container">
                <a href="#">Klik hier voor meer informatie </a>
                <img
                  src="../assets/awesome-arrow-right-white.png"
                  alt="right"
                />
              </div>
            </div>
          </div>
          <div className="news-box">
            <div className="news-box-image">
              <img src="../assets/nieuws3.png" alt="" />
            </div>
            <div className="news-box-text">
              <h3>Opleiding Tridex Deurne</h3>
              <p className="news-date">
                <span>EVENEMENTEN</span> 21/01/2019
              </p>
              <p>
                Op donderdag 18 november konden onze professionele klanten een
                opleiding volgen…
              </p>
              <div className="link-container">
                <a href="#">Klik hier voor meer informatie </a>
                <img
                  src="../assets/awesome-arrow-right-white.png"
                  alt="right"
                />
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="secondary-btn">
          Neuews
        </a>
      </div>
    </section>
  );
}

export default News;

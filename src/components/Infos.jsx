import "./infos.scss";

function Infos() {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-text-container">
          <h2>Steeds op de hoogte…</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            morbi non arcu risus. Pellentesque diam volutpat commodo sed
            egestas. <br /> <br /> Consectetur lorem donec massa sapien faucibus
            et molestie. Neque convallis a cras semper auctor neque vitae tempus
            quam. Arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam
            sem
          </p>
          <a href="#" className="primary-btn">
            Meer lezen
          </a>
        </div>
        <div className="info-container-image">
          <img src="../../assets/ladders.png" alt="Ladders" />
        </div>
      </div>
    </section>
  );
}

export default Infos;

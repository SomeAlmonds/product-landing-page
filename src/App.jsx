import firstProduct from "./assets/product-10.jpg";

function App() {
  function closeNave() {
    const navMenu = document.getElementById("nav-menu-checkbox");
    navMenu.checked = false;
  }

  return (
    <>
      <header>
        <div className="navbar">
          <div className="nav-col-1">
            <div className="nav-logo">AL.CO</div>

            <button className="contact-btn btn">CONTACT US</button>
            <div className="nav-cart"></div>
            <label htmlFor="nav-menu-checkbox" className="nav-menu-toggle btn">
              <span className="nav-menu-icon"></span>
            </label>
          </div>

          <div className="nav-col-2">
            <input
              type="checkbox"
              id="nav-menu-checkbox"
              className="nav-menu-checkbox"
            />
            <div className="nav-menu">
              <a href="#home" className="menu-item" onClick={() => closeNave()}>
                Home
              </a>
              <a
                href="#about"
                className="menu-item"
                onClick={() => closeNave()}
              >
                About
              </a>
              <a
                href="#popular"
                className="menu-item"
                onClick={() => closeNave()}
              >
                Popular Products
              </a>
              <a
                href="#ratings"
                className="menu-item"
                onClick={() => closeNave()}
              >
                Ratings
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="home" className="home">
          <div className="col-1">
            <h1>Main product <br /> name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              consequatur, quibusdam provident repellat. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              consequatur.
            </p>
            <button className="btn">DETAILS</button>
          </div>
          <div className="col-2">
            <img src={firstProduct} width={200} alt="product image" />
            <div className="home-video-container"></div>
          </div>
        </section>
        <section id="about"></section>
        <section id="popular"></section>
        <section id="ratings"></section>
        <p>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, esse
            delectus. A repudiandae amet maiores omnis cum. Asperiores autem
            necessitatibus deserunt sit velit quos voluptatibus, rem ullam
            distinctio ipsum sapiente? <br />
          </span>
          <span>
            Molestiae ipsum quod excepturi obcaecati earum exercitationem
            veniam? Veniam temporibus sapiente quos doloribus nobis eaque? Iure,
            distinctio! Sed unde qui commodi libero placeat quo adipisci quis
            similique quia iusto! Vel. <br />
          </span>
          <span>
            Error eligendi nulla, distinctio nam illo consectetur voluptatibus
            ullam esse nobis deserunt ducimus animi quidem libero, placeat
            laudantium consequatur? Iusto, nobis eos. Magnam, ipsa numquam
            assumenda ea corporis mollitia magni. <br />
          </span>
          <span>
            Atque, accusantium. Nesciunt, nobis, consequuntur iure vel eligendi
            saepe dolorem possimus a odit dignissimos, nostrum sunt. Dolore
            consectetur dolorum, labore cum possimus optio fuga iste, tempora,
            distinctio et veritatis nobis! <br />
          </span>
          <span>
            Neque ad aliquid recusandae nobis cupiditate harum quisquam,
            accusantium nihil repellat iusto porro cumque placeat dolores
            obcaecati saepe exercitationem assumenda sunt repudiandae officia
            doloremque fugiat. Voluptas veritatis nam dignissimos commodi.
          </span>
        </p>
      </main>
    </>
  );
}

export default App;

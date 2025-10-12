import product1 from "../assets/product1.jpg";
import product1_2 from "../assets/product1-2.jpg";

export default function Body() {
  return (
    <>
      {/* //////////////////// HOME ////////////////// */} 

      <section id="home" className="home">
        <div className="col-1">
          <h1>
            Main product <br /> name
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            consequatur, quibusdam provident repellat. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            consequatur.
          </p>
          <button type="button" className="btn">DETAILS</button>
        </div>
        <div className="col-2">
          <div className="home-small-img" style={{backgroundImage: `url(${product1})` }}>
          </div>
          <div
            className="home-big-img"
            style={{ backgroundImage: `url(${product1_2})` }}
          ></div>
        </div>
      </section>

      {/* //////////////////// ABOUT ////////////////// */}
      
      <section id="about"></section>
      <section id="popular"></section>
      <section id="ratings"></section>
    </>
  );
}

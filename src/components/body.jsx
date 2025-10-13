import imgs from "../assets/imgImport";
import productList from "../assets/products";

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
          <button type="button" className="btn">
            DETAILS
          </button>
        </div>
        <div className="col-2">
          <div
            className="home-small-img"
            style={{ backgroundImage: `url(${imgs.product1})` }}
          ></div>
          <div
            className="home-big-img"
            style={{ backgroundImage: `url(${imgs.product1_2})` }}
          ></div>
        </div>
      </section>

      {/* //////////////////// ABOUT ////////////////// */}

      <section id="about" className="about">
        <div className="col-1">
          <h1>About Us:</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            deleniti aspernatur nulla odio nisi omnis corporis facilis nesciunt
            ex nemo enim perspiciatis earum animi, cupiditate libero voluptatum
            similique nihil iusto? <br />
            sit amet consectetur adipisicing elit. Possimus deleniti aspernatur
            nulla ipsum dolor sit amet consectetur adipisicing elit. Possimus
            deleniti aspernatur nulla odio nisi omnis corporis facilis nesciunt
            ex nemo enim perspiciatis.
          </p>
          <button type="button" className="btn">
            Learn more
          </button>
        </div>
        <div
          className="col-2"
          style={{ backgroundImage: `url(${imgs.product1_3})` }}
        ></div>
      </section>

      {/* //////////////////// products ////////////////// */}

      <section id="products" className="products">
        <div className="products-scroll-container">
          <ProductScroll product_scroll={'primary'}/>
          <ProductScroll product_scroll={'secondary'}/>
        </div>
      </section>
      <section id="ratings"></section>
    </>
  );
}

function ProductScroll({ product_scroll }) {
  return (
    <div className={`product-scroll-${product_scroll}`}>
      {productList.map((product) => {
        return (
          <div
            className={`scroll-product product-${product.id + 1}`}
            key={product.id}
            style={{ backgroundImage: `url(${product.img})` }}
          >
            <h1>{product.name}</h1>
            <button type="button" className="btn">
              View more
            </button>
          </div>
        );
      })}
    </div>
  );
}

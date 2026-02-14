import "./ProductCard.css";

function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />

      <div className="card-body">
        <h2 className="product-title">{name}</h2>
        <p className="price">₹{price}</p>

        <div className="actions">
          <span className={inStock ? "stock available" : "stock out"}>
            {inStock ? "In Stock" : "Out of Stock"}
          </span>

          <button disabled={!inStock}>
            {inStock ? "Buy Now" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

import ProductCard from "./Experiments/exp3_1/ProductCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      <ProductCard
        name="Wireless Headphones"
        price="1999"
        image="https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg"
        inStock={true}
      />

      <ProductCard
        name="Smart Watch"
        price="2999"
        image="https://m.media-amazon.com/images/I/71Swqqe7XAL._SX679_.jpg"
        inStock={false}
      />
    </div>
  );
}

export default App;
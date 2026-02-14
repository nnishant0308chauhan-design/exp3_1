import ProductCard from "./ProductCard";

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
      <ProductCard
        name="Mobile Phone"
        price="45000"
        image="https://tse3.mm.bing.net/th/id/OIP._k01ghMlndzH3yhM569X5QHaE8?pid=Api&P=0&h=180"
        inStock={true}
      />
    </div>
    
  );
}

export default App;

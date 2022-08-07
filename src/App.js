import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cardIsVisiable = useSelector((state) => state.ui.cardIsVisiable);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch("https://react-http-8333c-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {cardIsVisiable && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cardIsVisiable = useSelector((state) => state.ui.cardIsVisiable);
  return (
    <Layout>
      {cardIsVisiable && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

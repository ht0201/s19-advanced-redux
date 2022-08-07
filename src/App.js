import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/reducers/ui-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cardIsVisiable = useSelector((state) => state.ui.cardIsVisiable);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    const sendDataCart = async () => {
      dispatch(
        uiActions.showNotification({
          status: "Pending...",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const res = await fetch(
        "https://react-http-8333c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) {
        throw new Error("Send data cart failed!");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data sent !",
        })
      );

      // const data = await res.json();
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendDataCart().catch(() =>
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed",
          message: "Send data cart failed !",
        })
      )
    );
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cardIsVisiable && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

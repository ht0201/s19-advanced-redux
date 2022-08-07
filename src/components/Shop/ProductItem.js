import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/reducers/cart-slice";

const ProductItem = (props) => {
  const { title, price, description } = props;
  console.log(props);
  const dispatch = useDispatch();
  const addItemHandler = () => {
    const newItem = {
      itemId: Math.floor(Math.random() * 100),
      title,
      description: "second item",
      price,
      quantity: 1,
      totalPrice: price,
    };
    console.log(newItem);
    dispatch(cartActions.addItemToCart(newItem));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

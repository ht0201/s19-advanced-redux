import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: "1",
    title: "Cake",
    quantity: 1,
    price: 12,
    description: "Cake from egg",
    totalPrice: 12,
  },
  {
    id: "2",
    title: "Egg",
    quantity: 1,
    price: 3,
    description: "Egg from chicken",
    totalPrice: 3,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              description={item.description}
              totalPrice={item.totalPrice}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;

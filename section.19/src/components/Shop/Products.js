import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (title, price, description) => {
    dispatch(
      cartActions.addToCart({ title, quantity: 1, price, total: price })
    );
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
          onClick={addToCartHandler}
        />
        <ProductItem
          title="#22Test22#"
          price={7}
          description="This is a first product - amazing!2222222222"
          onClick={addToCartHandler}
        />
      </ul>
    </section>
  );
};

export default Products;

import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const cartList = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (!cartList.filter((item) => item.title === title).length) {
      props.onClick && props.onClick(title, price, description);
    } else {
      dispatch(actions.increaseItem(title));
    }
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
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

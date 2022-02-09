import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartList = useSelector((state) => state.cartItems);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartList.length}</span>
    </button>
  );
};

export default CartButton;

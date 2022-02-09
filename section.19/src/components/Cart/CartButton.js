import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartList = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const cartBtnClickHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={cartBtnClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartList.length}</span>
    </button>
  );
};

export default CartButton;

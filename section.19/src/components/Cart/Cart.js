import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartList = useSelector((state) => state.cart.cartItems);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Card className={classes.cart}>
      {cartIsVisible && (
        <Fragment>
          <h2>Your Shopping Cart</h2>
          {cartList.length && (
            <ul>
              {cartList.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    total: item.total,
                    price: item.price,
                  }}
                />
              ))}
            </ul>
          )}
        </Fragment>
      )}
    </Card>
  );
};

export default Cart;

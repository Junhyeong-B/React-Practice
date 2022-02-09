import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const productItems = [
    {
      id: "p1",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: "p2",
      title: "TEST Item Second",
      price: 7,
      description: "This is amazing!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

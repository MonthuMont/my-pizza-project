import React from "react";
import SkeletonPizza from "../PizzaComp/SkeletonPizzaBlock/SkeletonPizza";
import PizzaComp from "../PizzaComp/PizzaComp";
import Sortirovka from "../Sortirovka/Sortirovka";
const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://64f981f24098a7f2fc1484a0.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Sortirovka></Sortirovka>
      <div className="container">
        <div className="wrapper">
          {isLoading
            ? [...new Array(6)].map(() => <SkeletonPizza></SkeletonPizza>)
            : items.map((obj) => (
                <PizzaComp
                  key={obj.id}
                  title={obj.title}
                  types={obj.types}
                  sizes={obj.sizes}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                ></PizzaComp>
              ))}
          ;
        </div>
      </div>
    </>
  );
};
export default Home;

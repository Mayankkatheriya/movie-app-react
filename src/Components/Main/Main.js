import "./Main.css";
import Card from "./Card";
import data from "./CardData.json";

const Main = () => {
  return (
    <main>
      {data.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </main>
  );
};

export default Main;

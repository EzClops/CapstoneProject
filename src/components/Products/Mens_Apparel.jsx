import Card from "./Card";
import Home from "../Navigation/Home";
import { useEffect, useState } from "react";

export default function Mens_Apparel({ setApparel, items, setItems, homePage, setHomePage, setItem, token }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHomePage(false);
    setApparel("men's clothing");
    setLoading(false);
  }, []);

  return (
    <>
      <Home items={items} setItems={setItems} homePage={homePage} token={token}/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cards">
          {items.map((item, key) => {
            return <Card key={key} item={item} setItem={setItem} />;
          })}
        </div>
      )}
    </>
  );
}

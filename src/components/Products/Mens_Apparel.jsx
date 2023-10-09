import Card from "./Card";
import Home from "../Navigation/Home";
import { useEffect, useState, useContext } from "react";
import AppContext from "../GetFunctions/AppContext";

export default function Mens_Apparel() {
  const [loading, setLoading] = useState(true);
  const {setApparel, items, setHomePage, setItem} = useContext(AppContext)
  useEffect(() => {
    setHomePage(false);
    setApparel("men's clothing");
    setLoading(false);
  }, []);
  return (
    <>
      <Home/>
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

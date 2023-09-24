import Card from "./Card";
import Home from "../Navigation/Home";
import Checkbox from "../Navigation/Checkbox";
import { useEffect, useState, useRef } from "react";
import Image from '../../Images/icons8-search-50.png'

export default function Mens_Apparel({ setApparel, items, setItems, homePage, setHomePage, setItem, token, setCartPage }) {
  const [loading, setLoading] = useState(true);
  const [searchChange, setSearchChange] = useState("");
  const [ham, setHam] = useState(false)
  const [mobile_menu, setMobile_Menu] = useState(false)
  const [searchImage, setSearchImage] = useState(Image);
  const [isAscendingOrder, setIsAscendingOrder] = useState(false)
  const [isDescendingOrder, setIsDescendingOrder] = useState(false)
  const [isCategoryPage, setIsCategoryPage] = useState(false)
  const productsByPrice = useRef(null)

  useEffect(() => {
    setHomePage(false);
    setApparel("men's clothing");
    setLoading(false);
    setIsCategoryPage(true)
  }, []);
  // console.log(isCategoryPage)
  return (
    <>
      <Home items={items} setItems={setItems} homePage={homePage} token={token}/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        // <Checkbox isAscendingOrder={isAscendingOrder} setIsAscendingOrder={setIsAscendingOrder} isDescendingOrder={isDescendingOrder} setIsDescendingOrder={setIsDescendingOrder} productsByPrice={productsByPrice} setItem={setItem} setHomePage={setHomePage} setMobile_Menu={setMobile_Menu} setHam={setHam} setSearchImage={setSearchImage} setSearchChange={setSearchChange} setCartPage={setCartPage} searchChange={searchChange} allLocalProducts={items} isCategoryPage={isCategoryPage} setIsCategoryPage={setIsCategoryPage} />
        <div className="cards">
          {items.map((item, key) => {
            return <Card key={key} item={item} setItem={setItem} />;
          })}
        </div>
      )}
    </>
  );
}

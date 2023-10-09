import { updateUserAddress } from "../../API/apiCalls";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";
import AppContext from "../GetFunctions/AppContext";

export default function Checkout() {
  const {item, setItem, setCartPage, setCheckoutPage, submitAddress, setSubmitAddress, submitPayment, setSubmitPayment, error, setError, checkoutPage, total, setTotal} = useContext(AppContext)
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

  const userCartId = 1;

  function clearInput() {
    setFirstname("");
    setLastname("");
    setCity("");
    setStreet("");
    setNumber("");
    setZipcode("");
    setPhone("");
    setError("");
    setCard("");
    setMonth("");
    setYear("");
    setCvv("");
  }

  function setToCartPage(){
    setCartPage(true);
    setCheckoutPage(false);
    localStorage.setItem("isCheckoutPage", true)
    setSubmitAddress(false);
    setSubmitPayment(false);
    setError(null);
    navigate("/cart")
  }
  
  function giveLabel(val, setVal, placeholder, maxInput) {
    return (
      <label>
        <input
          required
          value={val}
          placeholder={placeholder}
          onChange={(e) => {
            if (!(maxInput === undefined)) {
              if (
                !(val.length >= maxInput) ||
                e.nativeEvent.inputType === "deleteContentBackward"
              ) {
                setVal(e.target.value);
              }
            } else {
              setVal(e.target.value);
            }
          }}
        />
      </label>
    );
  }

  async function handleSubmitAddress(e) {
    e.preventDefault();
    try {
      const result = await updateUserAddress(
        firstname,
        lastname,
        city,
        street,
        number,
        zipcode,
        phone,
        setError
      );
      console.log(result);
      if (result) {
        clearInput();
        setSubmitAddress(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async function handleSubmitPayment(e) {
    e.preventDefault();
    try {
      if (card.length !== 16 || isNaN(Number(card))) {
        setError("Invalid card number");
        throw new Error("Invalid card number");
      }
      if (month.length !== 2 || isNaN(Number(month))) {
        setError("Invalid month");
        throw new Error("Invalid month");
      }
      if (year.length !== 4 || isNaN(Number(year))) {
        setError("Invalid year");
        throw new Error("Invalid year");
      }
      if (cvv.length !== 3 || isNaN(Number(cvv))) {
        setError("Invalid CVV");
        throw new Error("Invalid CVV");
      }
      clearInput();
      setSubmitPayment(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <div className="ck">
        <div className="checkoutHeader">
          <button
            className="linkColor checkout_To_Cart_Button"
            onClick={() => {
              setToCartPage()
            }}
          >
            <img width="64" height="64" src="https://img.icons8.com/cotton/64/circled-left-2.png" alt="circled-left-2"/>
          </button>
          <h2 className="checkoutHeader">Checkout</h2>
        </div>
        <span>{error && <p>{error}</p>}</span>
        <div className="container">
          <div className="checkout">
            <section className="address">
              <div className="title">
                <h3>Shipping Address</h3>
              </div>
              <form className="form" onSubmit={handleSubmitAddress}>
                {giveLabel(firstname, setFirstname, "Firstname")}
                {giveLabel(lastname, setLastname, "Lastname")}
                {giveLabel(street, setStreet, "Street Address")}
                {giveLabel(number, setNumber, "Apt. #")}
                {giveLabel(city, setCity, "City")}
                {giveLabel(zipcode, setZipcode, "Zipcode")}
                {giveLabel(phone, setPhone, "Phone #")}
                <input type="submit" value="Submit" />
              </form>
            </section>
            <hr></hr>
            <hr></hr>
            <section className="payment">
              <div className="title">
                <h3>Payment</h3>
              </div>
              <form className="form" onSubmit={handleSubmitPayment}>
                <div className="names">
                  {giveLabel(firstname, setFirstname, "Firstname")}
                  {giveLabel(lastname, setLastname, "Lastname")}
                </div>
                <div className="cardNumber">
                  {giveLabel(card, setCard, "Card number", 16)}
                </div>
                <div className="dates_CVV">
                  <div className="dates">
                    {giveLabel(month, setMonth, "MM", 2)}
                    {giveLabel(year, setYear, "YYYY", 4)}
                  </div>
                  <div className="CVV">{giveLabel(cvv, setCvv, "CVV", 3)}</div>
                </div>
                <input type="submit" value="Submit" />
              </form>
            </section>
            <section className="userCart">
              <div className="title">
                <h3>Cart Items</h3>
              </div>
              {!sessionStorage.getItem("token") ? (
                <p>Cart is Empty</p>
              ) : (
                JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)).map((i) => {
                  return (
                    <CartItem
                      productId={i["productId"]}
                      quantity={JSON.parse(localStorage.getItem(`productId:${i["productId"]}[${userCartId}]`))}
                      item={item}
                      setItem={setItem}
                      checkoutPage={checkoutPage}
                      loading={loading}
                      setLoading={setLoading}
                      total={total}
                      setTotal={setTotal}
                    />
                  );
                })
              )}
            </section>
            
            {total === 0 ? setToCartPage() : <p>Total: ${total}</p>}
          </div>
          <button
            onClick={() => {
              if (submitAddress && submitPayment) {
                setCartPage(false);
                setCheckoutPage(false);
                navigate("/placeorder");
              } else {
                setError("Complete both Address and Payment form to place order");
                throw new Error(
                  "Complete both Address and Payment form to place order"
                );
              }
            }}
            className="linkColor"
          >
            Place your order
          </button>
        </div>
      </div>
    </>
  );
}

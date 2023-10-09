import { useNavigate } from "react-router";
import AppContext from "../GetFunctions/AppContext";
import { useContext } from "react";

export default function LogOut(){
    const {setToken, setHomePage, setItem, setItems, setApparel, setUsername, setSubmitAddress, setSubmitPayment, setTotal} = useContext(AppContext)
    const navigate = useNavigate()
    console.log("Loggin out")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("token")
    setUsername("")
    setToken(null)
    setHomePage(true)
    setItem(null)
    setItems([])
    setApparel("")
    navigate("/")
    setSubmitAddress(false)
    setSubmitPayment(false)
    setTotal(0)
}
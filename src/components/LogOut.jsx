import { useNavigate } from "react-router";

export default function LogOut({ setToken, setHomePage, setItem, setItems, setApparel, setUsername, setCartPage }){
    const navigate = useNavigate()

    sessionStorage.removeItem("username")
    sessionStorage.removeItem("token")
    setUsername("")
    setToken(null)
    setHomePage(true)
    setCartPage(false)
    setItem(null)
    setItems([])
    setApparel("")
    navigate("/")
}
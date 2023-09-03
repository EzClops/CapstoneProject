import { useNavigate } from "react-router";

export default function LogOut({ setToken, setHomePage, setItem, setItems, setApparel }){
    const navigate = useNavigate()

    sessionStorage.removeItem("token")
    setToken(null)
    setHomePage(true)
    setItem(null)
    setItems([])
    setApparel("")
    navigate("/")
}
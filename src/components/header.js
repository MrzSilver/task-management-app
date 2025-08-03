import "./header.css"
import { FaSun } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

export default function Header(props) {
    const{theme,setTheme} = props
    function ToggleThemme(){
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return (
        <header>
            <div className = "logo">
                <span>Task management</span>
            </div>
            <div className = "theme">
                <span>{theme === "light" ? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
                <span className = "icon" onClick={ToggleThemme}>
                    {theme === "light" ? <FaSun/> : <FiMoon/>}
                </span>

            </div>
        </header>
    );
}
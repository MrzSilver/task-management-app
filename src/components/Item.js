import "./Item.css"
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
export default function Item(props){
    const {d,deleteTask,editTask} = props;
    return(
        <div className="list-item">
        <p className="title">{d.title}</p>
            <div className="btn-container">
                <BsFillTrashFill className="btn" onClick={()=>deleteTask(d.id)}/>
                <FaEdit className="btn" onClick={()=>editTask(d.id)}/>
             </div>

        </div>
    );
}
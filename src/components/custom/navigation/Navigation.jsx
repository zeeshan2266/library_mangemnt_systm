import { useState } from "react";
import { menuItems } from "@/utlis/constant";
import {Link,useLocation,useNavigate} from "react-router-dom";

const Navigation = () => {
    const[currentIndex,setCurrentIndex] = useState(-1);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    console.log({pathname});

    const handleClick = ({index,path})=>{
        setCurrentIndex(index);
        navigate(path);
    };
    return(
        <ul className="p-2">
            {menuItems.map(({title,path},index)=>{
                return(
                    
                    <li 
                    key={title}
                    className={`my-2 p-2 rounded-md bg-primary cursor-pointer ${currentIndex === index || pathname === path? "bg-primary text-white"
                        :""}`}
                    onClick={()=>handleClick ({index,path})}
                    >
                                        
                    <Link to={path}>{title}</Link>

                    </li>
                )
            }
        )}
        </ul>
    )
}
  
export default Navigation

import { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
const Restaurentmenu = () => {
    const[resinfo,setResinfo]=useState(null);
    const {resId} =useParams();
    useEffect(()=>{
        fetchmenu();
    },[resId])
    const fetchmenu=async ()=>{
        // const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        setResinfo(json.data)
    }

    const {itemCards}=resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card||{};
    console.log(itemCards)
  return(
    <div className="menu">
        <h1>{resinfo?.cards[0]?.card?.card?.text}</h1>
        <h2>{resinfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h2>
        <h2>{resinfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h2>

        <ul>
            {itemCards && itemCards.map((i,id)=><li key={i.card.info?.id}>{i.card.info.name}</li>)}
        </ul>
    </div>
  )
}

export default Restaurentmenu
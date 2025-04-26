
import { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useRestaurentmenu from "../utils/useRestaurentmenu";
const Restaurentmenu = () => {
    const {resId} =useParams();
    const resinfo=useRestaurentmenu(resId)

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
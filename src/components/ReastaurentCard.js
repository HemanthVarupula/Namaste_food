import { CDN_URL } from "../utils/constants";

export const RestaurentCard=({resData})=>{
    // const{resData}=props;
    const {name,cuisines,avgRating,deliveryTime}=resData;
    return(
        <div className="res-card">
        <img className="res-img" src={ CDN_URL +resData.cloudinaryImageId}    />
        <h3>{name}</h3> 
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        </div>
    )
}
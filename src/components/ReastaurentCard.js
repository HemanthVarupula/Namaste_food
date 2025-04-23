import { CDN_URL } from "../utils/constants";

export const RestaurentCard=(props)=>{
    const {resData}=props;
    // const{resData}=props;
    const {name,cuisines,avgRating,deliveryTime}=resData;
    return(
        <div className="res-card">
        <img className="res-img" src={ CDN_URL +resData.cloudinaryImageId}    />
        <h3>{name}</h3> 
        <h4>{cuisines}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        </div>
    )
}
import { RestaurentCard } from "./ReastaurentCard"
import { resobj } from "./ReastaurentCard";
const Body=()=>{
    return(
        <div className="body">
        <div className="search">search</div>
        <div className="res-container">
           
            {/* <RestaurentCard img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/2/ef5ef046-40af-4f88-9207-ebf1fd6cc3a6_5972f0ff-45ab-4f98-a8c1-04f87556973c.JPG"} resData={resobj[1]}/>
             <RestaurentCard img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a4ffed13eb197c6df43dfe1c756560e5"} resData={resobj[0]} />
             */}
             {resobj.map((i,id)=><RestaurentCard resData={i} key={id}/>)}
        </div>
        </div>
    )
}

export default Body;
import { RestaurentCard } from "./ReastaurentCard"
// import { resobj } from "../utils/mockdata";
import { useState } from "react";
import { useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { resobj } from "../utils/mockdata";
const Body=()=>{
    let [listOfRestaurent,setListOfRestaurent]=useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const[searchtext,setSearchtext]=useState("");
    const [offset, setOffset] = useState(16); 

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.scrollHeight;
    
        if (scrollTop + windowHeight >= fullHeight - 300) {
          update();
        }
        console.log("Scrolling...", window.scrollY);
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

const fetchData = async () => {
    const data = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9580069&lng=77.6092188&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const JSON = await data.json();
    console.log(JSON);
    const restaurantArray = JSON?.data?.cards
      .filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((card) => card?.card?.card?.info);

    setListOfRestaurent(restaurantArray || []);
    setFilteredRes(restaurantArray || []);
  };
  const update = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=${offset}&page_type=null`
      );
  
      const JSON = await data.json();
  
      const restaurantArray = JSON?.data?.cards
        ?.filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        ?.map((card) => card?.card?.card?.info);
  
      setListOfRestaurent((prev) => [...prev, ...(restaurantArray || [])]);
      setFilteredRes((prev) => [...prev, ...(restaurantArray || [])]);
      setOffset(offset + 16); // increment for next scroll
    } catch (error) {
      console.error("Update error:", error);
    }
  };
  
  if(listOfRestaurent.length===0){
    return <Shimmer/>
  }
  const handleSearch = () => {
    const filteredData = listOfRestaurent.filter((res) =>
      res?.name?.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilteredRes(filteredData);
  };
    return(
        <div className="body">
        <div className="search">
          <div className="search-input">
            <input type="text" value={searchtext} onChange={(e)=>{setSearchtext(e.target.value)}}/>
          </div>
          <div><button className="search-btn" onClick={
            handleSearch
          }>Search</button></div>
        </div>
        <button className="filter-btn" onClick={()=>{setFilteredRes(listOfRestaurent.filter(res=>res.avgRating>4.3))}}>Top Rated Restaurents</button>
        <div className="res-container">
             {filteredRes.map((i,id)=><RestaurentCard resData={i} key={id}/>)}
        </div>
        </div>
    )
}

export default Body;
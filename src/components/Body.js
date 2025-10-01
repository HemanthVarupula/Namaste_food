import { RestaurentCard } from "./ReastaurentCard"
// import { resobj } from "../utils/mockdata";
import { useState } from "react";
import { useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { resobj } from "../utils/mockdata";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Body=()=>{
    let [listOfRestaurent,setListOfRestaurent]=useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const[searchtext,setSearchtext]=useState("");
    const [offset, setOffset] = useState(4); 
    const isFetching = useRef(false);
    const onlinestatus=useOnlinestatus();
    useEffect(()=>{
        fetchData();
    },[])
    
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollTop = window.scrollY;
    //     const windowHeight = window.innerHeight;
    //     const fullHeight = document.body.scrollHeight;
    
    //     if (scrollTop + windowHeight >= fullHeight - 300 && !isFetching.current) {
    //       isFetching.current = true;
    //       update().then(() => {
    //         isFetching.current = false;
    //       });
    //     }
    //   };
    
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    
const fetchData = async () => {
    const data = await fetch(
      // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9580069&lng=77.6092188&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      //  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&collection=80352&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const JSON = await data.json();
    // console.log(JSON);
    const restaurantArray = JSON?.data?.cards
      .filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((card) => card?.card?.card?.info);
      // console.log(restaurantArray)
    setListOfRestaurent(restaurantArray || []);
    setFilteredRes(restaurantArray || []);
  };
  const update = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=${offset}&page_type=null`
        // 'https://www.swiggy.com/dapi/restaurants/list/update'  
      );
  
      const JSON = await data.json();
      console.log(JSON)
  
      const restaurantArray = JSON?.data?.cards
        ?.filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        ?.map((card) => card?.card?.card?.info);
  
      setListOfRestaurent((prev) => [...prev, ...(restaurantArray || [])]);
      setFilteredRes((prev) => [...prev, ...(restaurantArray || [])]);
      setOffset(offset + 4); // increment for next scroll
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
  if(onlinestatus===false) return <h1>check internet connection </h1>
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
             {filteredRes.map((i,id)=>(<Link to={"/restaurent/"+i.id} key={id} className="rmcolor"><RestaurentCard resData={i} /></Link>))}
        </div>
        </div>
    )
}

export default Body;
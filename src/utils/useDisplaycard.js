// import React from 'react'
// import { useState,useEffect ,useRef} from 'react';

// const useDisplaycard = () => {
//      let [listOfRestaurent,setListOfRestaurent]=useState([]);
//      const [filteredRes, setFilteredRes] = useState([]);
//      const isFetching = useRef(false);
//      const [offset, setOffset] = useState(4); 

//      useEffect(()=>{
//              fetchData();
//          },[])
//          const fetchData = async () => {
//             const data = await fetch(
//               // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9580069&lng=77.6092188&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
//                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
//             );
        
//             const JSON = await data.json();
//             console.log(JSON);
//             const restaurantArray = JSON?.data?.cards
//               .filter(
//                 (card) =>
//                   card?.card?.card?.["@type"] ===
//                   "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
//               )
//               .map((card) => card?.card?.card?.info);
        
//             setListOfRestaurent(restaurantArray || []);
//             setFilteredRes(restaurantArray || []);
//           };
//         //   useEffect(() => {
//         //     const handleScroll = () => {
//         //       const scrollTop = window.scrollY;
//         //       const windowHeight = window.innerHeight;
//         //       const fullHeight = document.body.scrollHeight;
          
//         //       if (scrollTop + windowHeight >= fullHeight - 300 && !isFetching.current) {
//         //         isFetching.current = true;
//         //         update().then(() => {
//         //           isFetching.current = false;
//         //         });
//         //       }
//         //     };
          
//         //     window.addEventListener("scroll", handleScroll);
//         //     return () => window.removeEventListener("scroll", handleScroll);
//         //   }, []);
          
//         // const update = async () => {
//         //   try {
//         //     const data = await fetch(
//         //       `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=${offset}&page_type=null`
//         //       // 'https://www.swiggy.com/dapi/restaurants/list/update'  
//         //     );
        
//         //     const JSON = await data.json();
//         //     console.log(JSON)
        
//         //     const restaurantArray = JSON?.data?.cards
//         //       ?.filter(
//         //         (card) =>
//         //           card?.card?.card?.["@type"] ===
//         //           "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
//         //       )
//         //       ?.map((card) => card?.card?.card?.info);
        
//         //     setListOfRestaurent((prev) => [...prev, ...(restaurantArray || [])]);
//         //     setFilteredRes((prev) => [...prev, ...(restaurantArray || [])]);
//         //     setOffset(offset + 4); // increment for next scroll
//         //   } catch (error) {
//         //     console.error("Update error:", error);
//         //   }
//         // };
//         const handleSearch = () => {
//             const filteredData = listOfRestaurent.filter((res) =>
//               res?.name?.toLowerCase().includes(searchtext.toLowerCase())
//             );
//             setFilteredRes(filteredData);
//           };
//   return (listOfRestaurent,filteredRes);
// }

// export default useDisplaycard
import{ useState,useEffect  } from 'react'

const useRestaurentmenu = (resId) => {
    const[resinfo,setResinfo]=useState(null);
useEffect(()=>{
    fetchdata();
},[])
const fetchdata=async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
    const json=await data.json();
    console.log(json);
    setResinfo(json.data)
}
  return resinfo;
  
}

export default useRestaurentmenu
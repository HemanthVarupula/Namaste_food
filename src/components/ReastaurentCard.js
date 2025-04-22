export const resobj=[
    {
        "id": "63048",
        "name": "Sharief Bhai Biryani",
        "cloudinaryImageId": "e10544c67ebc6b4c7f82acc5e34b3366",
        "locality": "Frazer Town",
        "areaName": "Frazer Town",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "South Indian",
          "Kebabs",
          "Ramzan Special",
          "Sweets",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "469102",
        "avgRatingString": "4.3",
        "totalRatingsString": "47K+",
        "promoted": true,
        "adTrackingId": "cid=28136394~p=3~adgrpid=28136394#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=63048~plpr=COLLECTION~eid=a6e2c48d-be4a-4ab3-b53d-c77fab9e4606~srvts=1745355304401~collid=83639",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-23 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹200 OFF",
          "subHeader": "ABOVE ₹799",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {},
          "commsStyling": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "2.5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "28136394"
      },
      {
        "id": "439141",
        "name": "Biryani Blues",
        "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
        "locality": "Church Street",
        "areaName": "Church Street",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Kebabs",
          "Lucknowi",
          "Hyderabadi"
        ],
        "avgRating": 4.4,
        "parentId": "13813",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.1K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-23 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "bolt/bolt%206.png",
                    "description": "bolt!"
                  }
                }
              ]
            },
            "textExtendedBadges": {},
            "textBased": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹549",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {},
          "commsStyling": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "350"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
  
]

export const RestaurentCard=(props)=>{
    const {resData}=props;
    // const{resData}=props;
    const {name,cuisines,avgRating,deliveryTime}=resData;
    return(
        <div className="res-card">
        <img className="res-img" src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +resData.cloudinaryImageId}    />
        <h3>{name}</h3> 
        <h4>{cuisines}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        </div>
    )
}
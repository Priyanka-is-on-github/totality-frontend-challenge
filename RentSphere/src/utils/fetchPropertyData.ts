import React, { useEffect } from "react";

async function fetchPropertyData() {
  const url =
    "https://booking-com.p.rapidapi.com/v2/hotels/search?dest_id=-553173&order_by=popularity&checkout_date=2025-01-19&children_number=2&filter_by_currency=AED&locale=en-gb&dest_type=city&checkin_date=2025-01-18&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_ages=5%2C0&include_adjacency=true&page_number=0&adults_number=2&room_number=1&units=metric";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "966d5f8651msh20a180759698e2ap1dbd36jsn650fd3760242",
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
  return result
  } catch (error) {
    console.error(error);
  }
}

export default fetchPropertyData;

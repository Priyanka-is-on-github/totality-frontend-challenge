const propertyCardsData = [
  {
    id: 1,
    type: "Villa",
    title: "Luxury Beachfront Villa",
    image:
      "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A stunning beachfront villa with panoramic ocean views and direct access to the beach.",
    price: 25000,
    location: "Goa, India",
    bedrooms: 4,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },

  {
    id: 2,
    type: "Apartment",
    title: "Modern Apartment in City Center",
    image:
      "https://images.unsplash.com/photo-1483097365279-e8acd3bf9f18?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A sleek modern apartment in the heart of the city with all the amenities at your fingertips.",
    price: 18000,
    location: "Mumbai, India",
    bedrooms: 3,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 3,
    type: "Villa",
    title: "Cozy Cottage in the Hills",
    image:
      "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A cozy hilltop cottage surrounded by nature, perfect for a peaceful retreat.",
    price: 12000,
    location: "Manali, India",
    bedrooms: 2,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 4,
    type: "house",
    title: "Charming Suburban Home",
    image:
      "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A charming home in a quiet suburban area, ideal for families and long-term stays.",
    price: 16000,
    location: "Bengaluru, India",
    bedrooms: 3,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 5,
    type: "building",
    title: "Mountain View Chalet",
    image:
      "https://plus.unsplash.com/premium_photo-1676321046449-5fc72b124490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D",
    description:
      "A beautiful mountain chalet with stunning views and close proximity to hiking trails.",
    price: 22000,
    location: "Shimla, India",
    bedrooms: 4,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 6,
    type: "house",
    title: "Penthouse with Cityscape View",
    image:
      "https://images.unsplash.com/photo-1719294608301-efa8ecd6c9a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D",
    description:
      "A luxurious penthouse apartment offering breathtaking views of the city skyline.",
    price: 45000,
    location: "Delhi, India",
    bedrooms: 5,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 7,
    type: "Villa",
    title: "Secluded Desert Villa",
    image:
      "https://images.unsplash.com/photo-1719297202918-d29af6d1c033?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A unique villa in the middle of the desert, offering a one-of-a-kind serene experience.",
    price: 28000,
    location: "Jaisalmer, India",
    bedrooms: 3,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 8,
    type: "apartment",
    title: "Ocean View Apartment",
    image:
      "https://images.unsplash.com/photo-1719297202918-d29af6d1c033?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A modern apartment overlooking the ocean, perfect for seaside lovers.",
    price: 24000,
    location: "Chennai, India",
    bedrooms: 3,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 9,
    type: "house",
    title: "Vintage Bungalow in Nature",
    image:
      "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A vintage-style bungalow set in lush greenery, ideal for nature lovers.",
    price: 13000,
    location: "Ooty, India",
    bedrooms: 2,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 10,
    type: "office",
    title: "Luxury Mansion with Private Pool",
    image:
      "https://images.unsplash.com/photo-1719299225627-3b902b8805c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D",
    description:
      "A grand luxury mansion featuring a private pool and all high-end amenities.",
    price: 60000,
    location: "Hyderabad, India",
    bedrooms: 6,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 11,
    type: "apartment",
    title: "Beachside Apartment",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950047-b15c3d49b99d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A compact apartment right by the beach, perfect for short stays.",
    price: 15000,
    location: "Goa, India",
    bedrooms: 2,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 12,
    type: "office",
    title: "Riverside Cabin",
    image:
      "https://plus.unsplash.com/premium_photo-1686090449200-57266c6623a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A peaceful cabin by the river, surrounded by nature for a relaxing getaway.",
    price: 11000,
    location: "Rishikesh, India",
    bedrooms: 2,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 13,
    type: "office",
    title: "Modern Studio in IT Hub",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950047-b15c3d49b99d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A sleek and stylish studio apartment in the heart of the IT hub, perfect for business travelers.",
    price: 14000,
    location: "Bengaluru, India",
    bedrooms: 1,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 14,
    type: "Villa",
    title: "Heritage Palace Stay",
    image:
      "https://images.unsplash.com/photo-1618504063109-5a9ba44df100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "Stay in a beautifully preserved heritage palace, offering a royal experience.",
    price: 50000,
    location: "Jaipur, India",
    bedrooms: 7,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 15,
    type: "house",
    title: "Luxury Farmhouse",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A spacious farmhouse with a large garden, perfect for families and gatherings.",
    price: 30000,
    location: "Pune, India",
    bedrooms: 4,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 16,
    type: "Villa",
    title: "Private Villa with Infinity Pool",
    image:
      "https://images.unsplash.com/photo-1618504063109-5a9ba44df100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A luxurious villa featuring a private infinity pool and top-notch amenities.",
    price: 38000,
    location: "Kerala, India",
    bedrooms: 5,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 17,
    type: "building",
    title: "City Loft with Modern Amenities",
    image:
      "https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A chic and modern loft in the city center with easy access to shops and restaurants.",
    price: 19000,
    location: "Mumbai, India",
    bedrooms: 3,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 18,
    type: "Villa",
    title: "Island Resort Bungalow",
    image:
      "https://plus.unsplash.com/premium_photo-1686167993442-ee5eaab0394f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A secluded resort bungalow on an island, surrounded by pristine nature and sea views.",
    price: 40000,
    location: "Andaman Islands, India",
    bedrooms: 4,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 19,
    type: "house",
    title: "Penthouse with Skyline View",
    image:
      "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A stunning penthouse with a panoramic view of the city skyline.",
    price: 35000,
    location: "Delhi, India",
    bedrooms: 4,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 20,
    type: "building",
    title: "Hilltop Retreat",
    image:
      "https://plus.unsplash.com/premium_photo-1683072026248-956849996484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A quiet hilltop retreat, perfect for those looking for solitude and peace.",
    price: 17000,
    location: "Darjeeling, India",
    bedrooms: 3,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 21,
    type: "house",
    title: "Lakeside Cottage",
    image:
      "https://plus.unsplash.com/premium_photo-1686231455909-cecca3e4863c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ5fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A cozy lakeside cottage with breathtaking views and serene surroundings.",
    price: 18000,
    location: "Nainital, India",
    bedrooms: 3,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 22,
    type: "office",
    title: "Urban Studio Loft",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA2fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A stylish urban loft in the city center with modern amenities and easy access to public transport.",
    price: 12000,
    location: "Pune, India",
    bedrooms: 1,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 23,
    type: "house",
    title: "Countryside Farmhouse",
    image:
      "https://plus.unsplash.com/premium_photo-1687960116696-d1e38565140f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQxfHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A rustic farmhouse located in the peaceful countryside, perfect for large families and groups.",
    price: 25000,
    location: "Udaipur, India",
    bedrooms: 5,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 24,
    type: "villa",
    title: "Seaside Luxury Villa",
    image:
      "https://images.unsplash.com/photo-1724304013246-1abe63567e33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ4fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A luxury villa with ocean views, infinity pool, and private beach access.",
    price: 60000,
    location: "Goa, India",
    bedrooms: 6,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 25,
    type: "apartment",
    title: "Hilltop View Apartment",
    image:
      "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A modern apartment offering panoramic views of the surrounding hills.",
    price: 20000,
    location: "Darjeeling, India",
    bedrooms: 3,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 26,
    type: "villa",
    title: "Beachside Bungalow",
    image:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fHww",
    description:
      "A quaint beachside bungalow with direct access to the beach, ideal for a relaxing getaway.",
    price: 16000,
    location: "Kerala, India",
    bedrooms: 2,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 27,
    type: "villa",
    title: "Modern Villa with Private Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fHww",
    description:
      "A spacious modern villa with a private garden and pool, perfect for family vacations.",
    price: 35000,
    location: "Bengaluru, India",
    bedrooms: 4,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 28,
    type: "house",
    title: "Coastal Cliffside Home",
    image:
      "https://images.unsplash.com/photo-1626470159396-8a6b361ab3a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA5fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A cliffside home offering spectacular ocean views and a tranquil atmosphere.",
    price: 22000,
    location: "Vizag, India",
    bedrooms: 3,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 29,
    type: "apartment",
    title: "Heritage Haveli Stay",
    image:
      "https://images.unsplash.com/photo-1626470159396-8a6b361ab3a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA5fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A heritage haveli converted into a luxury stay with a blend of tradition and modern amenities.",
    price: 45000,
    location: "Jodhpur, India",
    bedrooms: 6,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
  {
    id: 30,
    type: "house",
    title: "Mountain Escape Chalet",
    image:
      "https://images.unsplash.com/photo-1626470159396-8a6b361ab3a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA5fHxwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
    description:
      "A beautiful chalet nestled in the mountains, perfect for adventure seekers and nature lovers.",
    price: 30000,
    location: "Leh, India",
    bedrooms: 4,
    aminities: ["AC", "Wi-Fi", "Garden", "Swimming Pool"],
  },
];

export default propertyCardsData;

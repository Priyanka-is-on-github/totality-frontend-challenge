const propertyCardsData = [
    {
      id: 1,
      type:'Villa',
      title: "Luxury Beachfront Villa",
      image: "https://images.unsplash.com/photo-1505691723518-34b23d6b6b09",
      description: "A stunning beachfront villa with panoramic ocean views and direct access to the beach.",
      price: 25000,
      location: "Goa, India",
      bedrooms: 4,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },

    {
      id: 2,
      type:'Apartment',
      title: "Modern Apartment in City Center",
      image: "https://images.unsplash.com/photo-1560185127-6a624173c6d6",
      description: "A sleek modern apartment in the heart of the city with all the amenities at your fingertips.",
      price: 18000,
      location: "Mumbai, India",
      bedrooms: 3,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 3,
      type:'Villa',
      title: "Cozy Cottage in the Hills",
      image: "https://images.unsplash.com/photo-1560184897-a0cde35d3a8f",
      description: "A cozy hilltop cottage surrounded by nature, perfect for a peaceful retreat.",
      price: 12000,
      location: "Manali, India",
      bedrooms: 2,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 4,
      type:'house',
      title: "Charming Suburban Home",
      image: "https://images.unsplash.com/photo-1519923040182-c1f76830f8a8",
      description: "A charming home in a quiet suburban area, ideal for families and long-term stays.",
      price: 16000,
      location: "Bengaluru, India",
      bedrooms: 3,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 5,
      type:'building',
      title: "Mountain View Chalet",
      image: "https://images.unsplash.com/photo-1560448079-9a6532ccb118",
      description: "A beautiful mountain chalet with stunning views and close proximity to hiking trails.",
      price: 22000,
      location: "Shimla, India",
      bedrooms: 4,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 6,
      type:'house',
      title: "Penthouse with Cityscape View",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      description: "A luxurious penthouse apartment offering breathtaking views of the city skyline.",
      price: 45000,
      location: "Delhi, India",
      bedrooms: 5,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 7,
      type:'Villa',
      title: "Secluded Desert Villa",
      image: "https://images.unsplash.com/photo-1558199141-b70e225d2172",
      description: "A unique villa in the middle of the desert, offering a one-of-a-kind serene experience.",
      price: 28000,
      location: "Jaisalmer, India",
      bedrooms: 3,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 8,
      type:'apartment',
      title: "Ocean View Apartment",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      description: "A modern apartment overlooking the ocean, perfect for seaside lovers.",
      price: 24000,
      location: "Chennai, India",
      bedrooms: 3,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 9,
      type:'house',
      title: "Vintage Bungalow in Nature",
      image: "https://images.unsplash.com/photo-1505691723518-34b23d6b6b09",
      description: "A vintage-style bungalow set in lush greenery, ideal for nature lovers.",
      price: 13000,
      location: "Ooty, India",
      bedrooms: 2,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 10,
      type:'office',
      title: "Luxury Mansion with Private Pool",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      description: "A grand luxury mansion featuring a private pool and all high-end amenities.",
      price: 60000,
      location: "Hyderabad, India",
      bedrooms: 6,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 11,
      type:'apartment',
      title: "Beachside Apartment",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      description: "A compact apartment right by the beach, perfect for short stays.",
      price: 15000,
      location: "Goa, India",
      bedrooms: 2,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 12,
      type:'office',
      title: "Riverside Cabin",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      description: "A peaceful cabin by the river, surrounded by nature for a relaxing getaway.",
      price: 11000,
      location: "Rishikesh, India",
      bedrooms: 2,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 13,
      type:'office',
      title: "Modern Studio in IT Hub",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      description: "A sleek and stylish studio apartment in the heart of the IT hub, perfect for business travelers.",
      price: 14000,
      location: "Bengaluru, India",
      bedrooms: 1,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 14,
      type:'Villa',
      title: "Heritage Palace Stay",
      image: "https://images.unsplash.com/photo-1580894894513-acd763b14f78",
      description: "Stay in a beautifully preserved heritage palace, offering a royal experience.",
      price: 50000,
      location: "Jaipur, India",
      bedrooms: 7,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 15,
      type:'house',
      title: "Luxury Farmhouse",
      image: "https://images.unsplash.com/photo-1590487989352-32976928947e",
      description: "A spacious farmhouse with a large garden, perfect for families and gatherings.",
      price: 30000,
      location: "Pune, India",
      bedrooms: 4,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 16,
      type:'Villa',
      title: "Private Villa with Infinity Pool",
      image: "https://images.unsplash.com/photo-1535920527003-0c2dfb7fda94",
      description: "A luxurious villa featuring a private infinity pool and top-notch amenities.",
      price: 38000,
      location: "Kerala, India",
      bedrooms: 5,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 17,
      type:'building',
      title: "City Loft with Modern Amenities",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      description: "A chic and modern loft in the city center with easy access to shops and restaurants.",
      price: 19000,
      location: "Mumbai, India",
      bedrooms: 3,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 18,
      type:'Villa',
      title: "Island Resort Bungalow",
      image: "https://images.unsplash.com/photo-1505691723518-34b23d6b6b09",
      description: "A secluded resort bungalow on an island, surrounded by pristine nature and sea views.",
      price: 40000,
      location: "Andaman Islands, India",
      bedrooms: 4,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 19,
      type:'house',
      title: "Penthouse with Skyline View",
      image: "https://images.unsplash.com/photo-1558199141-b70e225d2172",
      description: "A stunning penthouse with a panoramic view of the city skyline.",
      price: 35000,
      location: "Delhi, India",
      bedrooms: 4,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 20,
      type:'building',
      title: "Hilltop Retreat",
      image: "https://images.unsplash.com/photo-1560448079-9a6532ccb118",
      description: "A quiet hilltop retreat, perfect for those looking for solitude and peace.",
      price: 17000,
      location: "Darjeeling, India",
      bedrooms: 3,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
  {
      id: 21,
      type:'house',
      title: "Lakeside Cottage",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      description: "A cozy lakeside cottage with breathtaking views and serene surroundings.",
      price: 18000,
      location: "Nainital, India",
      bedrooms: 3,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 22,
      type:'office',
      title: "Urban Studio Loft",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      description: "A stylish urban loft in the city center with modern amenities and easy access to public transport.",
      price: 12000,
      location: "Pune, India",
      bedrooms: 1,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 23,
      type:'house',
      title: "Countryside Farmhouse",
      image: "https://images.unsplash.com/photo-1586023492123-4df68308b15c",
      description: "A rustic farmhouse located in the peaceful countryside, perfect for large families and groups.",
      price: 25000,
      location: "Udaipur, India",
      bedrooms: 5,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 24,
      type:'villa',
      title: "Seaside Luxury Villa",
      image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      description: "A luxury villa with ocean views, infinity pool, and private beach access.",
      price: 60000,
      location: "Goa, India",
      bedrooms: 6,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 25,
      type:'apartment',
      title: "Hilltop View Apartment",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      description: "A modern apartment offering panoramic views of the surrounding hills.",
      price: 20000,
      location: "Darjeeling, India",
      bedrooms: 3,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 26,
      type:'villa',
      title: "Beachside Bungalow",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      description: "A quaint beachside bungalow with direct access to the beach, ideal for a relaxing getaway.",
      price: 16000,
      location: "Kerala, India",
      bedrooms: 2,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 27,
      type:'villa',
      title: "Modern Villa with Private Garden",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      description: "A spacious modern villa with a private garden and pool, perfect for family vacations.",
      price: 35000,
      location: "Bengaluru, India",
      bedrooms: 4,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 28,
      type:'house',
      title: "Coastal Cliffside Home",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      description: "A cliffside home offering spectacular ocean views and a tranquil atmosphere.",
      price: 22000,
      location: "Vizag, India",
      bedrooms: 3,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 29,
      type:'apartment',
      title: "Heritage Haveli Stay",
      image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      description: "A heritage haveli converted into a luxury stay with a blend of tradition and modern amenities.",
      price: 45000,
      location: "Jodhpur, India",
      bedrooms: 6,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    },
    {
      id: 30,
      type:'house',
      title: "Mountain Escape Chalet",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      description: "A beautiful chalet nestled in the mountains, perfect for adventure seekers and nature lovers.",
      price: 30000,
      location: "Leh, India",
      bedrooms: 4,
      aminities: ['AC', 'Wi-Fi', 'Garden', 'Swimming Pool']
    }
  ];
  

export default  propertyCardsData


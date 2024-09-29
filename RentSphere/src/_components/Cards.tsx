import React from 'react'


const PropertyType = [
    {
      image:
        "src/assets/images1/1.png",
   
      type: "House & Villa",
      number: "234 Property",
    },
    {
      image:
      "src/assets/images1/2.png",
   
      type: "Family House",
      number: "265 Property",
    },
    {
      image:
      "src/assets/images1/3.png",
   
      type: "Apartment",
      number: "123 Property",
    },
    {
      image:
      "src/assets/images1/4.png",
   
      type: "Office & Studio",
      number: "321 Property",
    },
  ];

function Cards() {


  return (
   
<div className="m-16">
            <h2 className="text-2xl font-bold text-center mb-8">
             Featured Property Types
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {PropertyType.map((Property, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-2xl overflow-hidden p-6 text-center "
                >
                  <img
                    src={Property.image}
                    alt='property type'
                    className="w-12 h-12 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">{Property.type}</h3>
                  <p className="text-gray-500">{Property.number}</p>
                </div>
              ))}
            </div>
          </div>
  )
}

export default Cards
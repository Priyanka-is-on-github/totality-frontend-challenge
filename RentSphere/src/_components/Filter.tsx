import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'

// import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../components/ui/dropdown-menu"
  import { Button } from "../components/ui/button"
import { FilterIcon, ListFilterIcon, SearchIcon } from 'lucide-react'

function Filter() {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    amenities: '',
  });

   
console.log('filter=', filters)
    

    const handleChange = (e: { target: { name: any; value: any } }) => {
      const { name, value } = e.target;
      setFilters((prev) => ({ ...prev, [name]: value }));
    };
  
    // const handleSubmit = (e: { preventDefault: () => void }) => {
    //   e.preventDefault();
    //   onFilterSortChange(filters);
    // };


  return (

    <>
   

   
 <Box id="head" sx={{ position:"absolute",backgroundColor:"transparent", height:"10vh" , width:"80%", top:"27%", left:"10%",}}>    
 
 
 <Typography variant='h1' id="heading1"  sx={{fontSize:{xs:"50px", lg:"50px"}, color:'white', fontWeight:'bold'}}>Effortless Home Rentals for Every Journey</Typography> 
 <Typography  variant='h5' id="heading" sx={{fontSize:{xs:"25px", lg:"20px"},  color:'skyblue',fontWeight:'bold'}}>Find new and features property located in your local city</Typography>
 </Box>

 <form action="">
   
    <Box sx={{position:"absolute", inset:0, margin:"auto" , width:"85%", height:{xs:"50%", lg:"20%", sm:"20%"}, bgcolor:"transparent", borderRadius:4 , display:"flex", alignItems:"center", justifyContent:"center" , marginTop:{xs:'30rem', lg:'20rem'}}}> 
      <Box sx={{ width:"95%" , display:"flex", border:"5px solid skyblue", backgroundColor:'white',flexWrap:"wrap" , flexDirection:{xs:"column" , sm:"row", lg:"row"}, padding:'6px'}} id="detail">  

           <Box sx={{ flex:"1" }}> 
            <p className='font-semibold'>Search your Location:</p>
            <input
        type="text"
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={handleChange}
      />
           </Box>

          

           <Box sx={{flex:"1",  }}>
            <p className='font-semibold'> Price</p>
            <div  className='flex gap-x-1 '>
            <input type="number"  id='price' placeholder='Min' onChange={handleChange} name='minPrice' value={filters.minPrice}/> 
            <input type="number"  id='price' placeholder='Max' onChange={handleChange} name='maxPrice 'value={filters.maxPrice}/> 
           
            </div>
         
           </Box>

           <Box sx={{flex:"1", paddingLeft:'5px'}}>
            <h6 className='font-semibold'>Number of Bedrooms</h6>
           <select name="bedrooms" value={filters.bedrooms} onChange={handleChange} >
        <option value="">Number of bedrooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
           </Box>
          

           <Box sx={{flex:"1", }}>
            <h6 className='font-semibold'>Amenities</h6>
           <select name="amenities" value={filters.amenities} onChange={handleChange} className='text-slate'>
        <option value="">Amenities</option>
        <option value="AC">AC</option>
        <option value="Wi-Fi">Wi-Fi</option>
        <option value="Garden">Garden</option>
        <option value="Swimming Pool">Swimming Pool</option>
      </select>
         
           </Box>

           <Box sx={{padding:'3px', paddingTop:'5px'}}>
           <button type="submit"> 
            <SearchIcon/>Apply Filters</button>


           </Box>

           

         
           
      </Box>
          
       

         </Box> 
        
         </form>  
        </>
  )
}

export default Filter
import { Box, Typography } from '@mui/material'
import React from 'react'

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
    const [position, setPosition] = React.useState("bottom")
  return (
    <>
   

   
 <Box id="head" sx={{ position:"absolute",backgroundColor:"transparent", height:"10vh" , width:"80%", top:"27%", left:"10%",}}>    
 
 
 <Typography variant='h1' id="heading1"  sx={{fontSize:{xs:"50px", lg:"50px"}, color:'white', fontWeight:'bold'}}>Effortless Home Rentals for Every Journey</Typography> 
 <Typography  variant='h5' id="heading" sx={{fontSize:{xs:"25px", lg:"20px"},  color:'skyblue',fontWeight:'bold'}}>Find new and featuskyblue property located in your local city</Typography>
 </Box>
   
    <Box sx={{position:"absolute", inset:0, margin:"auto" , width:"85%", height:{xs:"50%", lg:"20%", sm:"20%"}, bgcolor:"transparent", borderRadius:4 , display:"flex", alignItems:"center", justifyContent:"center" , marginTop:{xs:'30rem', lg:'20rem'}}}> 
      <Box sx={{ width:"95%" , display:"flex", border:"5px solid skyblue", backgroundColor:'white',flexWrap:"wrap" , flexDirection:{xs:"column" , sm:"row", lg:"row"}}} id="detail">  

           <Box sx={{ flex:"1" }}> 
            <p className='para'>Search your Destination:</p>
            <input type="text"  id='destination' placeholder='Enter name here' />    
           </Box>

          

           <Box sx={{flex:"1",  }}>
            <p className='para'>Max Price</p>
            <div  className='inpt inptrange'>
            <input type="range"  id='price' placeholder='Enter Price' /> 
            </div>
         
           </Box>

           <Box sx={{flex:"1", }}>
           <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Number of bedrooms</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
         
           </Box>
          

           <Box sx={{flex:"1", }}>
           <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Amenities</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="1">AC</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2">Wi-fi</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="3">swimming pool</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="3">Garden</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
         
           </Box>

           <Box sx={{padding:'3px', paddingTop:'5px'}}>
          <SearchIcon/>


           </Box>

           

           {/* <Button
                variant="contained"
                sx={{ position:"absolute",padding: "10px 40px", borderRadius: 10, fontWeight: 700, whiteSpace:"nowrap", top:"87%" , left:"43%"}} 
              >
               More Filter
              </Button> */}
           
      </Box>
          
       

         </Box> 
        
      
        </>
  )
}

export default Filter
import { useEffect, useState } from "react";
function UseEffect(){

    let[list,setList]=useState([])
  
    async function fetchdata(){
         let data= await fetch("http://localhost:8081/api/getEmployee");
         let final=await data.json();
         setList(final)
         console.log(final)
         
      };
      console.log(list);    
      
      useEffect(()=>{
        fetchdata();
      },[])
      return(
        <>
  
        <h1>USEEFFECT</h1>
       { list.map((value)=>{
          return(
          <>
            <div>
              <h3>{value.name}</h3>
            </div>
          </>
          );
          
        })
      }
        </>
  
      )
  }
  export default UseEffect;
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled} from 'styled-components'
const Main = styled.div`
width:100%;
height:800px;
background-color: yellow;`



function Cart() {
  var d = useParams()
  console.log("paramvalue",d.value)

  const [value,setValue] = useState([])

  async function apiDisplay(){
    const apiData =  await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    console.log("hiii",apiData.data.categories)
    setValue(apiData.data.categories)

  }
  console.log("api", value)

  useEffect(()=>{
    
    apiDisplay()
    
  },[])
  const filteredData = value.filter((fil)=>{
    return fil.strCategory == d.value
    

  })
  console.log("filtered data",filteredData)
  
  return (
    
    <Main>
    {filteredData.map((displayValue)=>{
      return(
        <div>
        <img src={displayValue.strCategoryThumb} alt="" />
        <h3>{displayValue.strCategory}</h3>
        <p>{displayValue.strCategoryDescription}</p>
        </div>
      )

    })
  
    }
    
    </Main>
  )
}

export default Cart
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { styled} from 'styled-components'
import { Link } from 'react-router-dom'
const Master = styled.div`
height:450px;
width:100%;
display: flex;
flex-wrap:wrap;
overflow:scroll;`
const Box = styled.div`
background-color: yellow;
width: 190px;
margin: 40px;
margin-bottom:30px
text-align: center;

`
const Item = styled.img`
width: 150px;
height: 150px;`


function Main() {
  
const [apivalue,setApivalue] = useState([])
  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((ApiResult)=>{
      console.log(ApiResult.data.categories)
      setApivalue(ApiResult.data.categories)

    }).catch((error)=>{
      console.log(error.message)

    })
  },[])
  console.log("$",apivalue)
  return (
    
    <Master>
    {apivalue.map((list)=>{
      return(
      
        <Box key={list.idCategory}>
        <Link to = {`/cart/${list.strCategory}`}>

        <Item src={list.strCategoryThumb} alt="" />
        <h4>{list.strCategory}</h4></Link>
        
        </Box>
        
      )
    })}
    
  
    </Master>
  )
}

export default Main
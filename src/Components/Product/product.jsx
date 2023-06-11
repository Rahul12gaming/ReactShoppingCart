import { Box,Card,Typography,styled, CircularProgress} from '@mui/material';
import {data} from '../../Data/data.js'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
const Image=styled('img')({
    marginTop:'10px'
})
const Product=()=>
{
   
    return (
        <>
       <Box style={{marginTop:90,display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
       
           {
            data.map(product=>(
                <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                
                    <Card style={{border:'1px solid black',width:350,marginRight:10,marginBottom:20,textAlign:'center'}}>
                    <Image src={product.url} />
                    <Typography variant='h5'>{product.title.main}</Typography>
                    <Typography variant='h7' style={{color:'#4D4D4D'}}>{product.title.subTitle}</Typography>
                    <Typography>
                        <span style={{fontWeight:600}}>{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                        <span style={{color:'#777777'}}><strike>{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                        <span style={{color:'#FF6B35'}}>{product.price.discount}</span>
                    </Typography>
                  </Card> 
                </Link>
            ))
           }
       
       </Box>
       
       </>
    )
}
export default Product;
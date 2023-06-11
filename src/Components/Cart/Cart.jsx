import { Box,Grid,Typography,styled,Card,ButtonGroup, Button} from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
const Component=styled(Box)`
display:flex;
flex-wrap:wrap;
margin:50px 150px`;
const LeftComponent=styled(Box)`
margin-right:80px`;
const RightComponent=styled(Box)`
`
const StyledButton=styled(Button)`
background:black;
color:#FFFFFF;
width:200px;
height:50px;
font-weight:400;
font-size:20px;
border-radius:25px;
margin-top:20px`
const Cart=()=>
{
   const getdata=useSelector((state)=>state.cartReducer.carts)
   const Quantity=useSelector((state)=>state.cartReducer.quantity)
   console.log(Quantity);
   const [counter,setCounter]=useState(1);
   const [total,setTotal]=useState(false)
  const dispatch=useDispatch()
   const increment=(item)=>{
    setCounter(counter+1)
    setTotal(true)
    
   }
   const decrement=()=>
   {
    setCounter(counter-1)
   }
   
   
    return (
        <Box style={{marginTop:80,marginLeft:'auto',marginRight:'auto'}}>
            <Typography style={{textAlign:'center',fontSize:28,fontWeight:400}}>My Cart({getdata.length})</Typography>
            
                
                    {
                    getdata.map(data=>(
                        <>
                        <Card style={{marginTop:55,marginRight:30,marginLeft:30,boxShadow:'4px 0px 4px 6px black'}}>
                        <Component>
                            
                            <LeftComponent>
                                <img src={data.url} style={{width:200,height:300}}/>
                            </LeftComponent>
                            <RightComponent>
                                <Typography style={{fontSize:28}}>{data.title.main}</Typography>
                                <Typography style={{color:'#4D4D4D'}}>{data.title.subTitle}</Typography>
                                <Typography>
                                    <span style={{fontWeight:600,fontSize:18}}>{data.price.cost}</span>&nbsp;&nbsp;&nbsp;
                                    <span style={{color:'#4D4D4D'}}><strike>{data.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                                    <span style={{color:'#FF6B35'}}>{data.price.discount}</span>
                                </Typography>
                                <Typography style={{marginTop:10,letterSpacing:5}}>Quantity:
                                    <ButtonGroup >
                                        <Button disabled={counter==0} onClick={()=>decrement()}>-</Button>
                                        <Button>{counter}</Button>
                                        <Button onClick={()=>increment()}>+</Button>
                                    </ButtonGroup>
                                </Typography>
                                <Typography>Total: {data.price.cost}</Typography>
                                <Typography style={{fontWeight:600}}>Delivery:</Typography>
                                <Typography >Delivered by 1Dec</Typography>
                                <StyledButton onClick={()=>dispatch({type:"REMOVE_CART",payload:data.id})}>Remove</StyledButton>
                            </RightComponent>
                            
                        </Component>
                        </Card>
                        </>

                    ))
                    
                    }
        </Box>
       
    )
}
export default Cart
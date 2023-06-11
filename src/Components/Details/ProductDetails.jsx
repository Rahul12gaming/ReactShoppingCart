import { Box, Grid, Typography,styled, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";
import { data } from "../../Data/data";
import { Add } from "../../redux/action/cartAction";

const Component=styled(Grid)`
padding:50px 150px;`
const Image=styled('img')({
    boxShadow:'2px 2px 2px 2px black'
});
const StyledButton=styled(Button)`
background:black;
color:#FFFFFF;
width:200px;
height:50px;
border:20px;
margin-top:20px`
const ProductDetails=()=>
{
    const {id}=useParams();
    const dispatch=useDispatch()
    const send=(e)=>{
        dispatch(Add(e))
    }
    return (
        <Box style={{marginTop:100}}>
            
                    <Component container lg={12} md={12} sm={12} xs={12}>
                   
                        <Grid item lg={5} md={5} sm={12} xs={12}>
                           
                           <Image src={data[id].url} style={{width:400}}/>
                          
                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12}>
                            <Typography style={{fontSize:25}}>{data[id].title.main}</Typography>
                            <Typography style={{color:'#4D4D4D'}}>{data[id].title.subTitle}</Typography>
                            <Typography>
                            <span style={{fontWeight:600,fontSize:18,paddingTop:20}}>{data[id].price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span style={{color:'#777777'}}><strike>{data[id].price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color:'#FF6B35'}}>{data[id].price.discount}</span>
                            </Typography>
                            <Link to={"/cart"} style={{textDecoration:'none'}}>
                            <StyledButton onClick={()=>send(data[id])} >Add To Cart</StyledButton>
                            </Link>

                        </Grid>
                    </Component>
                
        </Box>
    )
}
export default ProductDetails;
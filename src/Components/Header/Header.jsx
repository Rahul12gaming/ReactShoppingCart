import {Link} from "react-router-dom"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const { Box, AppBar, Toolbar, Typography } = require("@mui/material")

const Header=()=>
{
    return(
        <Box>
            <AppBar style={{background:'#FFFFFF'}}>
                <Toolbar>
                    <Typography color="black" style={{fontSize:28,fontWeight:600}}>Shopping Cart</Typography>
                    <Typography color='black' style={{marginLeft:'auto'}}>
                        <Link to={"/cart"} style={{textDecoration:'none', color:'black'}} >
                        My Cart <ShoppingBagOutlinedIcon style={{marginTop:'10px'}}/>
                        </Link>
                    </Typography>
                </Toolbar>
                
            </AppBar>
        </Box>
    )
}
export default Header;
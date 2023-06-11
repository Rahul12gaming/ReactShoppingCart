export const cartReducer=(state={carts:[],
quantity:1},action)=>{
    switch(action.type)
    {
        case "ADD_CART":
            const item=action.payload
            const exist=state.carts.find(product=>product.id===action.payload.id);
            if(!exist)
            {
                return{
                    ...state,
                    carts:[...state.carts,action.payload]
                }
            }
            else
            {
                return {
                    ...state,carts:state.carts.map(data=>data.product===item.product?item:data),
                    quantity:state.quantity+1
                    
                }
            }
        case "REMOVE_CART":
            return {
                ...state,carts:state.carts.filter(data=>data.id!=action.payload)
            }
           
        default:
            return state
    }
}
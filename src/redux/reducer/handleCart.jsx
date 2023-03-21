
const Cart=[]
const handleCart=(state=Cart,action)=>{
    const product=action.payload;
    switch (action.type) {
        case "Add_TO_CART":
            // To check if items are already present
            const exist=state.find((x)=>x.id===product.id);
            if(exist){
                // to increase the quantity
                return state.map((x)=>
                    x.id===product.id ? {...x,qty:x.qty+1}:x
                )
            }else{
                const product=action.payload
                return[
                    ...state,{...product,qty:1}
                ]
            }         
            break;

            case "DELETE_CART":
                const exist1=state.find((x)=>x.id===product.id);
                if(exist1.qty===1){
                    return state.filter((x)=>x.id !==exist1.id)
                }else{
                    return state.map((x)=>x.id===product.id?{...x,qty:x.qty-1}:x)
                }
    
        default:
            return state
            break;
    }
}
export default handleCart
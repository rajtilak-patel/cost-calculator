export const cartReducers = (state,action) =>{
    switch (action.type) {
       case "ADD_PRODUCTS":
            return {...state , products: action.payload}
            
        default:
            break;
    }
}
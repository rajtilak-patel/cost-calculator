import axios from 'axios'
import { useEffect, useReducer } from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import { cartReducers } from './reducers/cartReducers';

function App() {
    
   const [state,dispatch] = useReducer(cartReducers,{
        products:[],
        carts:[],
   })

  const fetchProducts = async()=>{
       const {data} = await axios.get(`https://dummyjson.com/products`)

       dispatch({
        type :"ADD_PRODUCTS",  
        payload: data.products,
       })
      //  console.log(data.products);
  }

  console.log(state);

    useEffect(()=>{
       fetchProducts()
    },[])
 
  return (
    <>
      <div style={{display:"flex"}}>
      <Products state={state} dispatch ={dispatch} />
      <Cart state={state} dispatch ={dispatch} />
      </div>
     
    </>
  );
}

export default App;

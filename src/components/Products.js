import React from 'react'

const Products = ({state , dispatch}) => {
    const {products , cart} = state;
    // console.log(products);
  return (
    <div style={{display:"flex",
                  flexWrap:"wrap",
                  justifyContent:"space-evenly",
                  width:"80%"}}>
      products
      {
        products.map((prod)=>{
            <div key={prod.id} 
               style={{display:"flex",
            flexDirection:"column",
            margin:"10px",
            padding:"10px",
            backgroundColor:"#ececec",
             width:"20%"}}
               >
               <img src={prod.thumbnail} alt="" 
               style={{height:200,objectFit:'cover'}}/>
            </div>
        })
      }
    </div>
  )
}

export default Products

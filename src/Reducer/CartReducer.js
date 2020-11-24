import React from 'react';
import {CartConst} from '../Action/ActionConstant';
import {toast} from 'react-toastify';
import { map } from 'jquery';

const initState={

    products:[],
    error:null,
    message:''
}
const CartReducer=(product=initState,action)=>{
    
    const pds=  product.products
        switch (action.type) {
            case `${CartConst.PRODUCT_CART}_SUCCESS`:
                const prod_presence=pds.find(({id})=>id==action.payload.products.id);
               // console.log(prod_presence);
               

                  

                if(prod_presence !== undefined){
                const prod_presence2={...prod_presence,qty:prod_presence.qty+1};
                //console.log(prod_presence2);
                const summerFruitsCopy = pds.map(elem => 
                    elem .id === prod_presence.id ? 
                        {...elem,qty:prod_presence.qty+1} : elem );

                   

                    product={
                        ...product,
                        products: summerFruitsCopy
                    }
                   
                    toast.success('🦄 product added !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
               // console.log(product.products);

                    return product;

                }else{

                    action.payload.products['qty']=1;
                    pds.push(action.payload.products)
                    product={
                        ...product,
                        products: pds
                    }

                    toast.success('🦄 product added !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                 
                //console.log(product.products);

                    return product;
                }
            case `CART_INCS_SUCCESS`:
             // const updt_prod={...action.payload.products,qty:action.payload.products.qty+1} 
              const aftrIncArr = pds.map(elem => 
                elem .id === action.payload.products.id ? 
                    {...elem,qty:action.payload.products.qty+1} : elem );

               product={
                        ...product,
                        products: aftrIncArr
                    }
                console.log(product);
                return product;
            case `CART_DESC_SUCCESS`:
             // const updt_prod={...action.payload.products,qty:action.payload.products.qty+1} 
              const aftrDesArr = pds.map(elem => 
               elem.qty > 1 && elem .id === action.payload.products.id ? 
                    {...elem,qty:action.payload.products.qty-1} : elem );

               product={
                        ...product,
                        products: aftrDesArr
                    }
               // console.log(product);
                return product;

            case `CART_DELT_SUCCESS`:
            
            const filteredItem = pds.filter((item) => item.id != action.payload.products.id);
           
               product={
                        ...product,
                        products: filteredItem
                    }
                return product;
                
            case `${CartConst.PRODUCT_CART}_FAILURE`:
                product={
                    ...product,
                    error:action.payload.error
                }
                return product;
                
                default:
                    return product;
                    
        }

}

export default CartReducer;
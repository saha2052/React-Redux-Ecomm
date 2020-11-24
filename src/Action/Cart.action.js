import React from 'react';
import {CartConst} from './ActionConstant';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';

export const Cart=(prodSingle)=>{
 
 return async(dispatch)=>{
    axios.post(`https://fakestoreapi.com/carts`,prodSingle)
    .then((res)=>{
       
        dispatch({
            type:`${CartConst.PRODUCT_CART}_SUCCESS`,
            payload:{
                message:"Add product in Cart",
                products:prodSingle
            }
        })
    }).catch((error)=>{
        dispatch({
            type:`${CartConst.PRODUCT_CART}_FAILURE`,
            payload:{
                error:error
            }
        })
    })
}
}

export const CartProdIncDcs=(cart_prod_sngl)=>{
 
    switch (cart_prod_sngl.action) {
        case 'decrease':
            return async(dispatch)=>{

                dispatch({
                    type:`CART_DESC_SUCCESS`,
                    payload:{
                        message:"Add product in Cart",
                        products:cart_prod_sngl.s_product
                    }
                })

            }

        case 'increase':
            return async(dispatch)=>{

                dispatch({
                    type:`CART_INCS_SUCCESS`,
                    payload:{
                        message:"Add product in Cart",
                        products:cart_prod_sngl.s_product
                    }
                })

            }
        case 'delete':
            return async(dispatch)=>{

                dispatch({
                    type:`CART_DELT_SUCCESS`,
                    payload:{
                        message:"Delete product in Cart",
                        products:cart_prod_sngl.s_product
                    }
                })

            }
            
    
        default:
            break;
    }

 return (dispatch)=>{
  
}
}


import {ProductConst} from './ActionConstant';
import axios from 'axios';

export const ProductDetail=()=>{

    return async(dispatch)=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
            dispatch({
                type:`${ProductConst.PRODUCT_GET_DTL}_SUCCESS`,
                payload:{
                    message:"Get all products",
                    products:res.data
                }
            })
        }).catch((error)=>{
            dispatch({
                type:`${ProductConst.PRODUCT_GET_DTL}_FAILURE`,
                payload:{
                    error:error
                }
            })
        })
    }
}
import {ProductConst} from '../Action/ActionConstant';
const initState={

    products:[],
    error:null,
    message:''
}
const ProductReducer=(product=initState,action)=>{
   // console.log(action.payload.products);
        switch (action.type) {
            case `${ProductConst.PRODUCT_GET_DTL}_SUCCESS`:
                product={
                    ...product,
                    products:action.payload.products
                }
                return product;
            case `${ProductConst.PRODUCT_GET_DTL}_FAILURE`:
                product={
                    ...product,
                    error:action.payload.error
                }
                return product;
                
                default:
                    return product;
                    
        }
}

export default ProductReducer;
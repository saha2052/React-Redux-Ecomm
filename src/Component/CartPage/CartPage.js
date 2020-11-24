import {React,useState,useEffect} from 'react';
import {CartProdIncDcs} from '../../Action/Cart.action';

import {useDispatch,useSelector} from 'react-redux';

import './cartpage.css'
import {Link} from 'react-router-dom';
import Layout from '../../UILayout/Layout/Layout'
const CartPage=()=>{

    const dispatch = useDispatch();
    const cart = useSelector(cart => cart.cart);
var total=0;
 
cart.products.map(elemnt=>{
    var num=(elemnt.qty*elemnt.price)
    total=parseInt(total)+parseInt(num.toFixed(2))
    return total;
})

const [allTotal,setAllTotal]=useState({
    final_price:total
})
const [optVal,setOptVal]=useState({
    value:0
})
    useEffect(() => {
        
        setAllTotal({
            final_price:parseInt(total)+parseInt(optVal.value)
        })

    },[total]);

console.log(total);
    const decrease=(id_d)=>{
        const s_prodct=cart.products.find(({id})=>id==id_d)
        dispatch(CartProdIncDcs({
            s_product:s_prodct,
            action:'decrease'
        }))
    }
    const increase=(id_i)=>{
       
        const s_prodct=cart.products.find(({id})=>id==id_i)
        dispatch(CartProdIncDcs({
            s_product:s_prodct,
            action:'increase'
        }))
    }
    const delt=(id_del)=>{
       
        const s_prodct=cart.products.find(({id})=>id==id_del)
        dispatch(CartProdIncDcs({
            s_product:s_prodct,
            action:'delete'
        }))
    }

    

    const addDeliver=(e)=>{
        setAllTotal({
            final_price:parseInt(total)+parseInt(e.target.value)
        })
        setOptVal({
            value:parseInt(e.target.value)
        })
        //return total=total+Number(e.target.value)
    }
//console.log(cart);
    return (
        <>
        <Layout>
        <div className="card">
    <div className="row">
        <div className="col-md-8 cart">
            <div className="title">
                <div className="row">
                    <div className="col">
                        <h4><b>Shopping Cart</b></h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">{cart.products.length} items</div>
                </div>
            </div>
            {
                cart.products.map(ele=>(

            <div key={ele.id} className="row border-top border-bottom">
                <div className="row main align-items-center">
                    <div className="col-2"><img className="img-fluid" src={ele.image}/></div>
                    <div className="col">
                <div className="row text-muted">{ele.category}</div>
                        <div className="row">{ele.title}</div>
                    </div>
                <div className="col">
                     <a href="#!" onClick={()=>decrease(ele.id)}>-</a><a href="#" className="border">{ele.qty}</a><a href="#" onClick={()=>increase(ele.id)}>+</a> </div>
                    <div className="col">&#x20B9; {((ele.price)*(ele.qty)).toFixed(2)} <span className="close"><a href="#" onClick={()=>delt(ele.id)}>X</a></span></div>
                </div>
            </div>
                ))

            }
           
            <div className="back-to-shop"><a href="#">&leftarrow;</a><span className="text-muted">Back to shop</span></div>
        </div>
        <div className="col-md-4 summary">
            <div>
                <h5><b>Summary</b></h5>
            </div>
            <hr/>
            <div className="row">
        <div className="col" >ITEMS {cart.products.length}</div>
        <div className="col text-right">&#x20B9; {total}</div>
            </div>
            <form>
                <p>SHIPPING</p> 
                <select value={optVal.value} onChange={addDeliver} name="delivery">
                    <option className="text-muted" value="0">Choose Delivery</option>
                    <option className="text-muted" value="5">Standard-Delivery- &#x20B9;5.00</option>
                    <option className="text-muted" value="10">Express-Delivery- &#x20B9;10.00</option>
                </select>
                <p>GIVE CODE</p> <input id="code" placeholder="Enter your code"/>
            </form>
            <div className="row" >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">&#x20B9; {allTotal.final_price}</div>
            </div> <button className="btn">CHECKOUT</button>
        </div>
    </div>
</div>
</Layout>
        </>
    )
}

export default CartPage;
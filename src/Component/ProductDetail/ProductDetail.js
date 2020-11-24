import {React} from 'react';
import './productdetail.css';
import Layout from '../../UILayout/Layout/Layout';
import {useDispatch,useSelector} from 'react-redux';
import {Cart} from '../../Action/Cart.action';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetail=(props)=>{

    const dispatch = useDispatch();
    const product = useSelector(product => product.products);
    const prod=product.products.find(({id})=>id==props.match.params.id)

  const addCart=(prod)=>{
     
    dispatch(Cart(prod));
  }
    return(
        <>
        <Layout>
        	<div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={prod.image} /></div>
						  <div className="tab-pane" id="pic-2"><img src={prod.image} /></div>
						  <div className="tab-pane" id="pic-3"><img src={prod.image} /></div>
						  <div className="tab-pane" id="pic-4"><img src={prod.image} /></div>
						  <div className="tab-pane" id="pic-5"><img src={prod.image} /></div>
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						</ul>
						
					</div>
					<div className="details col-md-6">
                    <h3 className="product-title">{prod.title}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">41 reviews</span>
						</div>
						<p className="product-description">{prod.description}.</p>
                <h4 className="price">current price: <span>{prod.price}</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5>
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button" onClick={()=>addCart(prod)}>add to cart</button>
							<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ToastContainer/>
    </Layout>
        </>
    )
}

export default ProductDetail;
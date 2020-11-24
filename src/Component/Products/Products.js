import {React,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Layout from '../../UILayout/Layout/Layout'
import {ProductDetail} from '../../Action/Product.action'
const Products=()=>{

    const dispatch = useDispatch();
    const product = useSelector(product => product.products);
    console.log(product);

    useEffect(() => {
        if(product){
          dispatch(ProductDetail())
        }
      }, [dispatch]);

    return(
        <>
        <Layout>

        <div className="container py-5">
    <div className="row text-center text-white mb-5">
        <div className="col-lg-7 mx-auto">
            <h1 className="display-4">Product List</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-8 mx-auto">
           
            <ul className="list-group shadow">
               {
                   product.products.map(ele=>(

                <li key={ele.id} className="list-group-item">
                  <Link to={`productdetails/${ele.id}`}>  
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                   <h5 className="mt-0 font-weight-bold mb-2">{ele.title}</h5>
                            <p className="font-italic text-muted mb-0 small">
                                {ele.description}
                                </p>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                       <h6 className="font-weight-bold my-2">₹ {ele.price}</h6>
                                <ul className="list-inline small">
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                </ul>
                            </div>
                        </div><img src={ele.image} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                    </Link>
                </li> 
                   ))

                
              }
               
            </ul> 
        </div>
    </div>
</div>

        </Layout>
        </>
    )
}

export default Products;
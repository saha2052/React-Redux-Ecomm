import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter as Router,Redirect} from 'react-router-dom';
import Products from './Component/Products/Products';
import ProductDetail from './Component/ProductDetail/ProductDetail';
import CartPage from './Component/CartPage/CartPage'

function App() {
  return (
    <div className="App">
   <Router>
     <Route exact path="/products" component={Products} />
     <Route  path="/productdetails/:id" component={ProductDetail}/>
     <Route  path="/cart" component={CartPage}/>

     <Route exact path="/" ><Redirect to="/products" /></Route>
   </Router>
    </div>
  );
}

export default App;

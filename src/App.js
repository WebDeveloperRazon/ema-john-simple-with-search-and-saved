import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Shop></Shop>}></Route>
      <Route path="/shop" element={<Shop></Shop>} ></Route>
      <Route path="/inventory" element={<Inventory></Inventory>} ></Route>
      <Route path="/orders" element={<OrderReview></OrderReview>} ></Route>
      <Route path ="/placeOrder"  element = {<PlaceOrder></PlaceOrder>}></Route>
      <Route path="*" element={<NotFound></NotFound>} ></Route>

      </Routes>
    </div>
  );
}

export default App;

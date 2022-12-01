import "./App.css";
import Home from "./Components/Home";
import { Routes, Route, useParams } from "react-router-dom";
import DetailProduct from "./Components/detail";

import Products from "./Components/products";

function App(props) {
  let { caseId } = useParams();
  return ( //hàm điều hướng 
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        
        <Route path="/products/:cateId" element={<Products cateId={true}/>} />
        
        <Route path="*" element={<alert>FAIL</alert>} />
        
        
        <Route
          path="/detail/:caseId"
          element={<DetailProduct caseId={caseId} />}
        />
        <Route />
      </Routes>
    </div>
  );
}
export default App;

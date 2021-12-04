import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import ProductHome from './modules/productmodule/ProductHome';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<ProductHome />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

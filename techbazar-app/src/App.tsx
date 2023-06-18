// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
   
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import AdminPage from './AdminPage';
// import SeeProductPage from './SeeProductPage';

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/admin">Add Product</Link>
//           </li>
//           <li>
//             <Link to="/products">See Products</Link>
//           </li>
//         </ul>
//       </nav>
//       <Switch>
//         <Route path="/admin" component={AdminPage} />
//         <Route path="/products" component={SeeProductPage} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import AdminPage from './AdminPage';
// import SeeProductPage from './SeeProductPage';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/admin">Add Product</Link>
//           </li>
//           <li>
//             <Link to="/products">See Products</Link>
//           </li>
//         </ul>
//       </nav>
//       <Switch>
//         <Route path="/admin" component={AdminPage} />
//         <Route path="/products" component={SeeProductPage} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;




import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AdminPage from './AdminPage';
import SeeProductPage from './SeeProductPage';

import logo from './logo.svg';
import './App.css';
import { HomePage } from './Pages/Homepage';
import { MainRoutes } from './Pages/MainRoutes';


const App: React.FC = () => {
  return (

    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Add Product</Link>
          </li>
          <li>
            <Link to="/products">See Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products" element={<SeeProductPage />} />
      </Routes>
    </Router>

    <div className="App">
      <MainRoutes/>
    </div>

  );
};

export default App;
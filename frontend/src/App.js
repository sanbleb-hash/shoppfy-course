import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";

import ProductScreen from "./screens/ProductScreen";
import Cart from './components/Cart'
import Loading from "./components/Loading";


function App () {
  return (
    <main className='h-auto w-full bg-gray-100'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/cart'component={Cart}/>
          <Route path='/login' component={Loading} Route />
          <Route path='/' exact><HomeScreen /></Route>
          <Route path='/product/:id' component={ProductScreen} />

        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;

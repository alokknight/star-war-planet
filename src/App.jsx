import Home from './pages/home';
import HeaderNavBar from './components/HeaderNavBar';
import Favourites from './pages/favourites';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderNavBar />
        <Routes>
          <Route path="/star-war-planets" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

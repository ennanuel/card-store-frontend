import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cart, Home, ViewCard, AddCard, Login, Register, UserDetails, Cards, Search, EditUser, Pay, Success, Orders, Order } from './pages';
import { Layout } from './components';
import { authenticateUser } from './state/features/userSlice';
import { Loading } from './components/fetch_states';
import './styles/App.scss';

const App = () => {
  const dispatch = useDispatch();
  const { loading, noUser } = useSelector(state => state.user);
  const { pathname } = useLocation();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  useEffect(() => { 
    if (!noUser) return;
    dispatch(authenticateUser());
  }, [dispatch, noUser]);

  if (loading) return (
    <div style={{ height: '100vh', width: '100vw'}} className="flex-row jc-center ai-center">
      <Loading />
    </div>
  )

  return (
    <div id="App" ref={divRef}>
      {
        noUser ?
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Login />} />
          </Routes>
          :
          <Routes>
            <Route element={<Layout />}>
              <Route path="/*" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/card/:card_id/:name" element={<ViewCard />} />
              <Route path="/add-card" element={<AddCard />} />
              <Route path="/user/:user_id" element={<UserDetails />} />
              <Route path="/edit_user/:user_id" element={<EditUser />} />
              <Route path="/cards/:fetchType/:searchValue" element={<Cards />} />
              <Route path="/search/:searchValue" element={<Search />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/success" element={<Success />} />
              <Route path="/orders/:filter/:page" element={<Orders />} />
              <Route path="/order/:id" element={<Order />} />
            </Route>
          </Routes>
      }
    </div>
  )
};

export default App

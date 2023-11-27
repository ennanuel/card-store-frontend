import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cart, Home, ViewCard, AddCard, Login, Register, UserDetails, Cards, Search, EditUser, Pay, Success, Orders, Order, ChooseUser } from './pages';
import { Layout } from './components';
import { authenticateUser } from './state/features/userSlice';
import { Loading } from './components/fetch_states';
import handlePath, { getPathTitle } from './utils/pathhandler';
import './styles/App.scss';

const App = () => {
  const dispatch = useDispatch();
  const { loading, noUser } = useSelector(state => state.user);
  const { pathname } = useLocation();
  const divRef = useRef(null);
  const siteTitleRef = useRef(document.getElementById('title'));

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
    const siteTitle = getPathTitle(pathname)
    siteTitleRef.current.innerText = siteTitle;
  }, [pathname, siteTitleRef]);

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
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<ChooseUser />} />
          </Routes>
          :
          <Routes>
            <Route element={<Layout />}>
              <Route path="/*/:page?" element={<Home />} />
              <Route path="/search/:searchValue/:page?" element={<Search />} />
              <Route path="/cards/:fetchType/:searchValue/:page?" element={<Cards />} />
              <Route path="/card/:card_id/:name" element={<ViewCard />} />
              <Route path="/add-card" element={<AddCard />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders/:filter/:page" element={<Orders />} />
              <Route path="/order/:id" element={<Order />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/success" element={<Success />} />
              <Route path="/user/details" element={<UserDetails />} />
              <Route path="/user/edit" element={<EditUser />} />
            </Route>
          </Routes>
      }
    </div>
  )
};

export default App

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import Home from './pages/Home';
import About from './pages/About';
import Queues from './pages/Queues';
import Polling from './pages/Polling';
import Announcements from './pages/Announcements';
import RootLayout from './layouts/RootLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import store from './store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import checkAuth from './utils/checkAuth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="queues" element={<Queues />} />
      <Route path="polling" element={<Polling />} />
      <Route path="announcements" element={<Announcements />} />
      <Route path="sing-in" element={<SignIn />} />
      <Route path="sing-up" element={<SignUp />} />
      <Route
        path="profile"
        element={<Profile />}
        loader={async () => await checkAuth()}
      />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  );
}

export default App;

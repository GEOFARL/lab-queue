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
import store from './store';

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
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

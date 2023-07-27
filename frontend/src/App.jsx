import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Queues from './pages/Queues';
import Polling from './pages/Polling';
import Announcements from './pages/Announcements';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="queues" element={<Queues />} />
      <Route path="polling" element={<Polling />} />
      <Route path="announcements" element={<Announcements />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

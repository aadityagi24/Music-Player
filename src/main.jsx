import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from './components/Main.jsx';
import Songs from './components/Songs/Songs.jsx';
import SongDetails from './components/Songs/SongDetails.jsx';
import { store } from './store/store.jsx';
import { Provider } from 'react-redux';
import Liked from './components/Songs/Liked.jsx';

// ✅ Use HashRouter for safe routing on GitHub Pages or static hosting:
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,  // ✅ Better: sets default child route
        element: <Main />
      },
      {
        path: "/Dashboard",
        element: <Main />
      },
      {
        path: "/Playlist",
        element: <Songs />
      },
      {
        path: "/songDetails/:id",
        element: <SongDetails />
      },
      {
        path: "/liked",
        element: <Liked />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

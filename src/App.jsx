import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Layout from "./Layout";
import Users from "./Users";
import UserPosts from "./UserPosts";
import UserAlbums from "./UserAlbums";
import UserTodos from "./UserTodos";
import AlbumPhotos from "./AlbumPhotos";
import PostComments from "./PostComments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-database/" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId/posts" element={<UserPosts />} />
          <Route path="users/:userId/albums" element={<UserAlbums />} />
          <Route path="users/:userId/todos" element={<UserTodos />} />
          <Route path="albums/:albumId/photos" element={<AlbumPhotos />} />
          <Route path="posts/:postId/comments" element={<PostComments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

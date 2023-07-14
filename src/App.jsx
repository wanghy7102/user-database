import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Layout from "./Layout";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-database/" element={<Layout />}>
          <Route index element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

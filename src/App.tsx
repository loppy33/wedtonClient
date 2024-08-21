import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import ConnectWallet from "./pages/ConnectWallet/ConnectWallet";
import Tasks from "./pages/Tasks/Tasks";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="friends" element={<Friends />} /> */}
          <Route index element={<Friends />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="connectWallet" element={<ConnectWallet />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

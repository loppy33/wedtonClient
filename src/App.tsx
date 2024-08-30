import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import ConnectWallet from "./pages/ConnectWallet/ConnectWallet";
import Tasks from "./pages/Tasks/Tasks";
import Task from "./pages/Tasks/Task/Task";
import { useEffect, useState } from "react";

export default function App() {
  const [notify, setNotify] = useState<string[]>([]);

  useEffect(() => {
    setNotify(['Message 1', 'Message 2', 'Message 3']);
  }, []);

  useEffect(() => {
    if (notify.length > 0) {
      const timer = setTimeout(() => {
        setNotify((prevNotify) => prevNotify.slice(1));
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [notify]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="friends" element={<Friends />} /> */}
          <Route index element={<Friends />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="/connectWallet" element={<ConnectWallet />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

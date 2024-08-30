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
  const [hiddenIndices, setHiddenIndices] = useState<number[]>([]);

  // Инициализируем уведомления
  useEffect(() => {
    setNotify(['Message 1', 'Message 2', 'Message 3']);
  }, []);

  useEffect(() => {
    if (notify.length > 0 && hiddenIndices.length < notify.length) {
      const index = hiddenIndices.length;

      // Добавляем класс hidden с задержкой
      const hideTimer = setTimeout(() => {
        setHiddenIndices((prev) => [...prev, index]);
        // Удаляем уведомление через 0.3 секунды после добавления класса hidden
        setTimeout(() => {
          setNotify((prevNotify) => prevNotify.filter((_, i) => i !== 0));
          setHiddenIndices([]);
        }, 300); // 0.3 секунды на анимацию скрытия
      }, 1000);


      return () => {
        clearTimeout(hideTimer);
        // clearTimeout(removeTimer);
      };
    }
  }, [notify, hiddenIndices]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout notify={notify} hiddenIndices={hiddenIndices} />}>
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

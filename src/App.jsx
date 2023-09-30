// import { useLoginMutation } from "./features/auth/auth-slice";

import { Route, Routes } from "react-router-dom";
import Login from "./app/pages/login/login";
import MainPage from "./app/pages/main-page/main";
import Dashboard from "./app/pages/dashboard/dashboard";

function App() {
  // const [login, { data: loginUser }] = useLoginMutation();

  // const handleLogin = () => {
  //   login({
  //     email: "anamul@gmail.com",
  //     password: "johndoe",
  //   });
  // };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

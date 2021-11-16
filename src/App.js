import { BrowserRouter, Route,Routes } from "react-router-dom";
import Header from "./Layouts/Header"
import City from "./Pages/City/City";
import Home from "./Pages/Home/Home";
import NotFound from "./Components/NotFound/NotFound"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header/> } exact>
    <Route index element={<Home/>}/>
    <Route path="/City/:city" element={<City/>} exact />
    <Route path="*" element={<NotFound/>} />
    </Route> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./Components/Sign/SignUp.js"
import { GlobalStyle } from "./GlobalStyle.js";

function App() {
    return (
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          {/* <Route path="/" element={<SignIn/>}/> */}
          <Route path="/cadastro" element={<SignUp/>}/>
          {/* <Route/>
          <Route/>           */}
        </Routes>
      </BrowserRouter>
    );
  }

export default App;

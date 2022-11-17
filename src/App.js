import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./Components/Sign/SignUp.js"
import SignIn from "./Components/Sign/SignIn.js"
import { GlobalStyle } from "./GlobalStyle.js";
import { AuthProvider } from "./Providers/AuthProvider.js";
import Transactions from "./Components/Transactions /Transactions.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/transacoes" element={<Transactions/>}/>
           {/* <Route/>*/}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

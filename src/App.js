import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./Components/Sign/SignUp.js"
import SignIn from "./Components/Sign/SignIn.js"
import Transactions from "./Components/Transactions /Transactions.js";
import Operations from "./Components/Operations/Operations.js"
import { GlobalStyle } from "./GlobalStyle.js";
import { AuthProvider } from "./Providers/AuthProvider.js";
import { OperationTypeProvider } from "./Providers/OperationTypeProvider.js";


function App() {
  return (
    <AuthProvider>
      <OperationTypeProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/transacoes" element={<Transactions />} />
            <Route path="entrada" element={<Operations/>} />
            {/* <Route path="/saida"></Route> */}
          </Routes>
        </BrowserRouter>
      </OperationTypeProvider>
    </AuthProvider>
  );
}

export default App;

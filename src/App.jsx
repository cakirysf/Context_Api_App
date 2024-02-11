import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import CheckoutPage from "./pages/CheckoutPage"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

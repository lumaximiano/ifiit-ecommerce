import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/GlobalStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import ModalCarrinho from './components/ModalCarrinho'
import Home from './pages/Home'
import Categoria from './pages/Categoria'
import Entrega from './pages/Entrega'
import Pagamento from './pages/Pagamento'
import Confirmacao from './pages/Confirmacao'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <ModalCarrinho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:id" element={<Categoria />} />
          <Route path="/entrega" element={<Entrega />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
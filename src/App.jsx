import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductPage from './pages/ProductPage/ProductPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'

function ProductRoute() {
  const { id } = useParams()
  return <ProductPage key={id} />
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductRoute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

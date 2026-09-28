import { Link } from 'react-router-dom'

function Cart() {
  return (
    <main className="page">
      <h1>Your Cart</h1>
      <p>Your cart is currently empty.</p>
      <Link to="/courses" className="page__cta">
        Browse courses
      </Link>
    </main>
  )
}

export default Cart
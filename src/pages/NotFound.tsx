import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="page">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="page__cta">
        Back home
      </Link>
    </main>
  )
}

export default NotFound

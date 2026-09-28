import { Link } from 'react-router-dom'

function Join() {
  return (
    <main className="page">
      <h1>Join ByteSpace</h1>
      <p>Create your account to start building with us.</p>
      <Link to="/signin" className="page__cta">
        Already have an account? Sign in
      </Link>
    </main>
  )
}

export default Join
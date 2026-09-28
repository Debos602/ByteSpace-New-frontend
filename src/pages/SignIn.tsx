import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <main className="page">
      <h1>Sign In</h1>
      <p>Sign in to your ByteSpace account to continue.</p>
      <Link to="/join" className="page__cta">
        Create an account
      </Link>
    </main>
  )
}

export default SignIn
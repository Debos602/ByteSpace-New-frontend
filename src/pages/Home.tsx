import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="page">
      <h1>Hi, Developer</h1>
      <p>
        ByteSpace is a digital product studio focused on thoughtful interfaces and
        reliable software.
      </p>
      <Link to="/about" className="page__cta">
        Learn more
      </Link>
    </main>
  )
}

export default Home

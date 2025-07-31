import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="card max-w-md mx-auto text-center">
        <h1 className="text-4xl font-display font-semibold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Link to="/" className="btn-primary">
          Go back home
        </Link>
      </div>
    </div>
  )
}

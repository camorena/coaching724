import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="card max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-display font-semibold mb-4">
          Welcome to <span className="text-primary">Coaching724</span>
        </h1>
        <p className="text-lg mb-8">
          A scalable, secure, enterprise-grade coaching platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/services" className="btn-primary">
            Our Services
          </Link>
          <a 
            href="https://github.com/your-username/coaching724" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 rounded-lg font-semibold text-foreground bg-white hover:bg-gray-100"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  )
}

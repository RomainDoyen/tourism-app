import { Link } from 'react-router-dom'
import './ErrorPage.css'

export default function ErrorPage() {
  return (
    <div className="card-container">
      <div className="error-page">
        <div className="error-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-message">Page non trouvée</h2>
          <p className="error-description">
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="back-home">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

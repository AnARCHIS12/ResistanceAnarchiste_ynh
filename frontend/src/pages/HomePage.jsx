import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mock';
import { AlertTriangle } from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Résistance Anarchiste';
  }, []);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">Ⓐ</div>
          <div className="logo-text">
            RÉSISTANCE
            <br />
            ANARCHISTE
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <Link to="/" className="nav-item active">Accueil</Link>
          <Link to="/visuels" className="nav-item">Visuels</Link>
          <Link to="/doleances" className="nav-item">Manifeste</Link>
          <Link to="/sites" className="nav-item">CNT-AIT</Link>
        </nav>

        {/* Case Rejoins-nous */}
        <div style={{
          backgroundColor: '#ff0000',
          color: 'white',
          padding: '15px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '16px',
          margin: '20px 0'
        }}>
          REJOINS-NOUS
        </div>



        {/* Réseaux Sociaux */}
        <div className="group-section">
          <h3>RÉSEAUX SOCIAUX</h3>
          {mockData.socialMedia.map((social, index) => (
            <div key={index} className="group-item">
              <div className="group-name">{social.platform}</div>
              <a href={social.handle.startsWith('http') ? social.handle : `https://${social.handle}`} target="_blank" rel="noopener noreferrer" className="group-link">
                <div className="telegram-icon">📱</div>
                {social.handle}
              </a>
            </div>
          ))}
        </div>

        {/* Réseau des collectifs */}
        <div className="group-section">
          <h3>RÉSEAU DES COLLECTIFS</h3>
          <div className="group-item">
            <div className="group-name" style={{color: '#ff0000'}}>EN CONSTRUCTION</div>
            <p style={{fontSize: '12px', color: '#ccc', marginTop: '5px'}}>
              Les groupes régionaux et thématiques sont actuellement en cours de formation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          <div className="date-header">
            {mockData.movement.date}
          </div>

          <div className="main-message">
            <p>Démanteler l'État et le gouvernement, supprimer le capitalisme et le système monétaire et instaurer l'anarchisme, la liberté concrète.</p>
          </div>

          <div className="call-to-action">
            <span className="red-text">{mockData.movement.callToAction}</span>
          </div>

          <div className="warning-box">
            <AlertTriangle className="warning-icon" size={40} />
            <div className="warning-text">
              {mockData.warning}
            </div>
          </div>

          <div className="principles-section">
            <h2 className="principles-title">
              Nos principes de résistance
            </h2>
            <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
              Face à l'oppression, nous revendiquons :
            </p>
            <ul className="principles-list">
              {mockData.principles.map((principle, index) => (
                <li key={index} className="principle-item">
                  {principle}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '30px', fontWeight: 'bold', fontSize: '18px' }}>
              Nous disons <span style={{color: '#ff0000'}}>NON</span> et appelons tous les exploités du monde à se mobiliser contre ce système d'oppression.
            </p>
          </div>

          {/* Map placeholder */}
          <div className="map-container">
            <div style={{ 
              width: '100%', 
              height: '300px', 
              background: '#333', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#ffcc00',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              🗺️ CARTE DES COLLECTIFS ANARCHISTES
              <br />
              (Interactive map à venir)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
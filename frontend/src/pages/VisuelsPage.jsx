import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Share2, FileImage } from 'lucide-react';

const VisuelsPage = () => {
  const visuels = [
    {
      title: "Affiche Révolution",
      type: "PNG",
      size: "1920x1080",
      description: "Affiche pour la révolution anarchiste"
    },
    {
      title: "Bannière Action Directe", 
      type: "JPG",
      size: "1200x400",
      description: "Bannière pour réseaux sociaux"
    },
    {
      title: "Logo Résistance",
      type: "SVG", 
      size: "Vectoriel",
      description: "Logo du mouvement de résistance"
    },
    {
      title: "Tract Abolition État",
      type: "PDF",
      size: "A4",
      description: "Tract à distribuer"
    },
    {
      title: "Sticker Anarchie",
      type: "PNG",
      size: "500x500", 
      description: "Sticker rond pour collage urbain"
    },
    {
      title: "Drapeau Noir",
      type: "PNG",
      size: "2000x1333",
      description: "Drapeau noir de l'anarchie"
    }
  ];

  return (
    <div className="app-container">
      {/* Sidebar simplifié */}
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon">Ⓐ</div>
          <div className="logo-text">
            RÉSISTANCE
            <br />
            ANARCHISTE
          </div>
        </div>

        <nav className="nav-menu">
          <Link to="/" className="nav-item">Accueil</Link>
          <Link to="/visuels" className="nav-item active">Visuels</Link>
          <Link to="/doleances" className="nav-item">Manifeste</Link>
          <Link to="/sites" className="nav-item">CNT-AIT</Link>
        </nav>



        <div style={{padding: '20px 0', color: '#ffcc00'}}>
          <h3 style={{marginBottom: '15px'}}>MATÉRIEL DE PROPAGANDE</h3>
          <p style={{fontSize: '14px', lineHeight: '1.4'}}>
            Téléchargez et partagez nos visuels pour répandre les idées anarchistes.
            Tous les contenus sont libres de droits.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#000',
            textAlign: 'center'
          }}>
            VISUELS DE LA RÉSISTANCE
          </h1>

          <p style={{
            fontSize: '18px', 
            marginBottom: '40px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Matériel de propagande anarchiste - Libre diffusion
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginBottom: '40px'
          }}>
            {visuels.map((visuel, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(0,0,0,0.1)',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #000',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,0,0,0.1)';
                e.target.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(0,0,0,0.1)';
                e.target.style.transform = 'translateY(0)';
              }}>
                
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#000',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px'
                }}>
                  <FileImage size={60} color="#ffcc00" />
                </div>

                <h3 style={{
                  color: '#000',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {visuel.title}
                </h3>

                <p style={{
                  fontSize: '14px',
                  marginBottom: '15px',
                  color: '#333'
                }}>
                  {visuel.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px',
                  fontSize: '12px',
                  color: '#666'
                }}>
                  <span>{visuel.type}</span>
                  <span>{visuel.size}</span>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '10px'
                }}>
                  <button 
                    onClick={() => alert('Téléchargement de ' + visuel.title)}
                    style={{
                    backgroundColor: '#ff0000',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flex: '1',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#cc0000'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#ff0000'}>
                    <Download size={14} />
                    TÉLÉCHARGER
                  </button>

                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: visuel.title,
                          text: visuel.description,
                          url: window.location.href
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Lien copié dans le presse-papiers');
                      }
                    }}
                    style={{
                    backgroundColor: '#000',
                    color: '#ffcc00',
                    border: '1px solid #ffcc00',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '12px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#ffcc00';
                    e.target.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#000';
                    e.target.style.color = '#ffcc00';
                  }}>
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#000',
            padding: '20px',
            borderRadius: '8px',
            border: '3px solid #ffcc00',
            textAlign: 'center',
            color: '#ffcc00'
          }}>
            <h3 style={{fontSize: '20px', marginBottom: '15px'}}>
              📢 CONSIGNES D'UTILISATION
            </h3>
            <ul style={{
              listStyle: 'none',
              textAlign: 'left',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              <li>• Diffusion libre et encouragée</li>
              <li>• Impression en haute qualité recommandée</li>
              <li>• Collage urbain avec précaution</li>
              <li>• Partage sur tous réseaux sociaux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisuelsPage;
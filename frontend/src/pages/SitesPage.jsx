import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Users, Globe, Zap } from 'lucide-react';

const SitesPage = () => {
  return (
    <div className="app-container">
      {/* Sidebar */}
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
          <Link to="/visuels" className="nav-item">Visuels</Link>
          <Link to="/doleances" className="nav-item">Manifeste</Link>
          <Link to="/sites" className="nav-item active">CNT-AIT</Link>
        </nav>



        <div style={{padding: '20px 0', color: '#ffcc00'}}>
          <h3 style={{marginBottom: '15px'}}>SYNDICALISME RÉVOLUTIONNAIRE</h3>
          <p style={{fontSize: '14px', lineHeight: '1.4', marginBottom: '15px'}}>
            La CNT-AIT : organisation anarcho-syndicaliste pour l'émancipation des travailleurs.
          </p>
          <div style={{fontSize: '12px'}}>
            <div>🏴 Fondée en 1922</div>
            <div>🔥 Action directe</div>
            <div>🌍 Solidarité internationale</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          <h1 style={{
            fontSize: '40px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#000',
            textAlign: 'center'
          }}>
            CNT-AIT
          </h1>

          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Confédération Nationale du Travail - Association Internationale des Travailleurs
          </p>

          {/* Présentation */}
          <div style={{
            backgroundColor: '#000',
            color: '#ffcc00',
            padding: '30px',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <h2 style={{fontSize: '24px', marginBottom: '20px', color: '#fff'}}>QU'EST-CE QUE LA CNT-AIT ?</h2>
            <p style={{fontSize: '16px', lineHeight: '1.6', marginBottom: '15px'}}>
              La CNT-AIT est une organisation anarcho-syndicaliste révolutionnaire qui lutte pour l'émancipation 
              complète de la classe ouvrière par l'action directe et la solidarité.
            </p>
            <p style={{fontSize: '16px', lineHeight: '1.6'}}>
              <strong style={{color: '#fff'}}>Démanteler l'État et le gouvernement, supprimer le capitalisme et le système monétaire et instaurer l'anarchisme, la liberté concrète.</strong>
            </p>
          </div>

          {/* Principes */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', color: '#000'}}>NOS PRINCIPES</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #ff0000'
              }}>
                <h3 style={{color: '#ff0000', fontSize: '18px', marginBottom: '10px'}}>🔥 ACTION DIRECTE</h3>
                <p style={{fontSize: '14px', lineHeight: '1.5'}}>
                  Grèves, sabotage, boycotts : nous agissons directement contre l'exploitation 
                  sans passer par les institutions bourgeoises.
                </p>
              </div>
              <div style={{
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #ff0000'
              }}>
                <h3 style={{color: '#ff0000', fontSize: '18px', marginBottom: '10px'}}>🏴 AUTOGESTION</h3>
                <p style={{fontSize: '14px', lineHeight: '1.5'}}>
                  Les travailleurs et travailleuses doivent contrôler directement leurs outils de production 
                  et organiser la société selon leurs besoins.
                </p>
              </div>
              <div style={{
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #ff0000'
              }}>
                <h3 style={{color: '#ff0000', fontSize: '18px', marginBottom: '10px'}}>🤝 SOLIDARITÉ</h3>
                <p style={{fontSize: '14px', lineHeight: '1.5'}}>
                  L'union fait la force : solidarité entre tous les exploités, 
                  au-delà des frontières et des corporations.
                </p>
              </div>
              <div style={{
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #ff0000'
              }}>
                <h3 style={{color: '#ff0000', fontSize: '18px', marginBottom: '10px'}}>🚫 ANTI-ÉTATISME</h3>
                <p style={{fontSize: '14px', lineHeight: '1.5'}}>
                  Refus total de l'État et de ses institutions. 
                  Pas de participation électorale, pas de collaboration de classe.
                </p>
              </div>
            </div>
          </div>

          {/* Histoire */}
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            padding: '30px',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#000'}}>NOTRE HISTOIRE</h2>
            <div style={{fontSize: '16px', lineHeight: '1.6'}}>
              <p style={{marginBottom: '15px'}}>
                <strong>1936-1939 :</strong> Participation active à la Révolution espagnole aux côtés de la CNT-FAI.
              </p>
              <p style={{marginBottom: '15px'}}>
                <strong>1946 :</strong> Refondation de la section française de la CNT après la guerre, adhésion à l'Association Internationale des Travailleurs (AIT).
              </p>
              <p style={{marginBottom: '15px'}}>
                <strong>1968 :</strong> Présence dans les luttes de Mai 68 avec les mots d'ordre révolutionnaires.
              </p>
              <p>
                <strong>Aujourd'hui :</strong> Continuation de la lutte pour l'émancipation totale des travailleurs 
                et l'abolition du système capitaliste et étatique.
              </p>
            </div>
          </div>

          {/* Moyens d'action */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', color: '#000'}}>NOS MOYENS D'ACTION</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              {[
                { icon: '✊', title: 'GRÈVES SAUVAGES', desc: 'Arrêts de travail spontanés sans préavis' },
                { icon: '🔧', title: 'SABOTAGE', desc: 'Perturbation de la production capitaliste' },
                { icon: '🚫', title: 'BOYCOTTS', desc: 'Refus de consommer les produits de l\'exploitation' },
                { icon: '📢', title: 'PROPAGANDE', desc: 'Diffusion des idées révolutionnaires' },
                { icon: '🤝', title: 'ENTRAIDE', desc: 'Solidarité concrète entre travailleurs et travailleuses' },
                { icon: '🚩🏴', title: 'OCCUPATION', desc: 'Prise de contrôle des lieux de travail' }
              ].map((action, index) => (
                <div key={index} style={{
                  backgroundColor: '#000',
                  color: '#ffcc00',
                  padding: '15px',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '24px', marginBottom: '8px'}}>{action.icon}</div>
                  <div style={{fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#fff'}}>{action.title}</div>
                  <div style={{fontSize: '12px'}}>{action.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{
            backgroundColor: '#ff0000',
            color: '#fff',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h2 style={{fontSize: '28px', marginBottom: '20px'}}>REJOINDRE LA CNT-AIT</h2>
            <p style={{fontSize: '16px', lineHeight: '1.5', marginBottom: '25px'}}>
              Tu refuses l'exploitation capitaliste ? Tu veux détruire le système salarial ? 
              Rejoins la CNT-AIT pour l'abolition de l'État et du Capital !
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <a 
                href="https://cnt-ait.info"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#000',
                  color: '#ffcc00',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <ExternalLink size={16} />
                SITE OFFICIEL
              </a>
              <a 
                href="mailto:contact@cnt-ait.info"
                style={{
                  backgroundColor: '#000',
                  color: '#ffcc00',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                ✉️ CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitesPage;
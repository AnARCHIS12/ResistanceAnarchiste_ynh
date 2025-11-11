import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Flame, Users } from 'lucide-react';

const DoleancesPage = () => {
  const manifesteSections = [
    {
      title: "I. L'ABOLITION DE L'ÉTAT",
      icon: <Flame size={24} />,
      content: [
        "L'État n'est qu'un instrument de domination au service des classes dirigeantes. Il maintient les inégalités par la violence légale et perpétue l'exploitation.",
        "Nous refusons toute forme de gouvernement, qu'il soit de droite ou de gauche. Le pouvoir corrompt et l'autorité opprime.",
        "Notre objectif : la destruction complète de l'appareil étatique et son remplacement par des structures horizontales d'autogestion."
      ]
    },
    {
      title: "II. LA RÉVOLUTION SOCIALE",
      icon: <Users size={24} />,
      content: [
        "Le capitalisme détruit l'humanité et la planète. Il transforme tout en marchandise : notre travail, nos relations, notre environnement.",
        "L'argent est l'instrument de notre asservissement. Nous voulons abolir le système monétaire et instaurer le libre accès, gratuit et universel avec prise au tas selon ses besoins.",
        "Face à cette barbarie, nous prônons l'action directe : grèves sauvages, sabotages, occupations, boycotts.",
        "La révolution ne viendra pas des urnes mais de la rue, des usines, des quartiers en lutte."
      ]
    },
    {
      title: "III. L'AUTOGESTION GÉNÉRALISÉE",
      icon: <BookOpen size={24} />,
      content: [
        "Nous voulons une société où chacun participe directement aux décisions qui l'affectent.",
        "Assemblées populaires, conseils ouvriers, communes libres : voilà les structures de la société future.",
        "Ni patrons, ni chefs, ni représentants : l'autogestion intégrale pour tous les aspects de la vie sociale."
      ]
    }
  ];

  const tactiques = [
    "Grève générale et occupation des lieux de travail",
    "Sabotage économique des infrastructures capitalistes", 
    "Création de zones autonomes temporaires",
    "Désobéissance civile massive et coordonnée",
    "Boycott des institutions étatiques et capitalistes",
    "Propaganda par le fait et exemplarité révolutionnaire"
  ];

  const principes = [
    {
      principe: "ANTI-AUTORITARISME",
      definition: "Refus de toute hiérarchie et de toute forme de pouvoir coercitif"
    },
    {
      principe: "ÉGALITÉ RÉELLE", 
      definition: "Abolition des classes sociales et partage équitable des richesses"
    },
    {
      principe: "LIBERTÉ TOTALE",
      definition: "Épanouissement de chaque individu sans contrainte extérieure"
    },
    {
      principe: "SOLIDARITÉ",
      definition: "Entraide mutuelle et coopération volontaire"
    },
    {
      principe: "ACTION DIRECTE",
      definition: "Prise en charge collective et immédiate des problèmes"
    },
    {
      principe: "FÉDÉRALISME",
      definition: "Association libre de communes autonomes et autogérées"
    },
    {
      principe: "ABOLITION MONÉTAIRE",
      definition: "Destruction du système monétaire : libre accès, gratuit et universel avec prise au tas selon ses besoins"
    },
    {
      principe: "AUTHENTIQUE DÉMOCRATIE",
      definition: "Participation directe de tous aux décisions qui les concernent"
    },
    {
      principe: "RÉVOLUTION",
      definition: "Transformation radicale et totale de la société par l'action directe"
    },
    {
      principe: "AUTODÉFENSE POPULAIRE",
      definition: "Remplacement de la police et de l'armée par la population elle-même"
    }
  ];

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
          <Link to="/doleances" className="nav-item active">Manifeste</Link>
          <Link to="/sites" className="nav-item">CNT-AIT</Link>
        </nav>



        <div style={{padding: '20px 0', color: '#fff'}}>
          <h3 style={{marginBottom: '15px'}}>NOTRE VISION</h3>
          <p style={{fontSize: '14px', lineHeight: '1.4'}}>
            Une société sans État, sans classes, sans exploitation. 
            L'anarchie comme seule voie vers la liberté véritable.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#000',
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>
            MANIFESTE ANARCHISTE
          </h1>

          <div style={{
            backgroundColor: '#000',
            color: '#ffcc00',
            padding: '30px',
            borderRadius: '8px',
            margin: '40px 0',
            border: '3px solid #ff0000',
            textAlign: 'center'
          }}>
            <h2 style={{fontSize: '28px', marginBottom: '20px', color: '#fff'}}>
              🏴 "NI DIEU NI MAÎTRE" 🏴
            </h2>
            <p style={{fontSize: '18px', fontStyle: 'italic', lineHeight: '1.6'}}>
              "La liberté des autres étend la mienne à l'infini" - Michel Bakounine
            </p>
          </div>

          {/* Principes Fondamentaux */}
          <div style={{marginBottom: '50px'}}>
            <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: '#000'}}>
              PRINCIPES FONDAMENTAUX
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {principes.map((item, index) => (
                <div key={index} style={{
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '2px solid #ff0000',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,0,0,0.2)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <h3 style={{color: '#ff0000', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px'}}>
                    {item.principe}
                  </h3>
                  <p style={{fontSize: '14px', lineHeight: '1.4', color: '#000'}}>
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sections du Manifeste */}
          {manifesteSections.map((section, index) => (
            <div key={index} style={{marginBottom: '40px'}}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px',
                padding: '15px',
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: '8px'
              }}>
                {section.icon}
                <h2 style={{fontSize: '24px', fontWeight: 'bold'}}>
                  {section.title}
                </h2>
              </div>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  marginBottom: '15px',
                  padding: '10px',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  borderLeft: '4px solid #ff0000',
                  color: '#000'
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* Tactiques d'Action */}
          <div style={{
            backgroundColor: '#ff0000',
            color: '#fff',
            padding: '30px',
            borderRadius: '8px',
            margin: '40px 0'
          }}>
            <h2 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', textAlign: 'center'}}>
              🔥 TACTIQUES D'ACTION DIRECTE 🔥
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              {tactiques.map((tactique, index) => (
                <li key={index} style={{
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  padding: '15px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  border: '2px solid #fff'
                }}>
                  • {tactique}
                </li>
              ))}
            </ul>
          </div>

          {/* Appel Final */}
          <div style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '40px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '4px solid #fff'
          }}>
            <h2 style={{fontSize: '32px', marginBottom: '20px', color: '#fff'}}>
              L'HEURE EST À LA RÉVOLTE !
            </h2>
            <p style={{fontSize: '20px', lineHeight: '1.5', marginBottom: '20px'}}>
              Démanteler l'État et le gouvernement, supprimer le capitalisme et le système monétaire et instaurer l'anarchisme, la liberté concrète.
            </p>
            <p style={{fontSize: '24px', fontWeight: 'bold', color: '#ff0000'}}>
              ORGANISONS-NOUS • RÉSISTONS • DÉTRUISONS L'ORDRE ÉTABLI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoleancesPage;
import Background from './background.jsx';
import Email from './components/accueil/email.jsx';
import PhotoProfil from './components/accueil/photoprofil.jsx';
import Header from './components/accueil/header.jsx';
import Hi from './components/accueil/EcritureStart.jsx';
import Fleche from "./components/accueil/fleche.jsx";
import './App.css';
import TimelineItem from './components/aboutme/Timeline.jsx';
import AboutText from './components/aboutme/aboutmetext.jsx';
import HeaderProject from './components/projects/headerProject.jsx';
import ProjectCard from './components/projects/projects.jsx'; 
import HeaderExperiences from './components/experiences/headerExperiences.jsx';
import Titre from './components/experiences/titreExp.jsx'
import CarteProfessionnel from './components/experiences/CarteProfessionnel.jsx';
import CarteDiplome from './components/experiences/CarteDiplome.jsx';
import HeaderContact from './components/contact/headerContact.jsx';
import Formulaire from './components/contact/Formulaire.jsx';
import Footer from './components/contact/fin.jsx';


function App() {

  // les données pour les cartes avant return
  const DataProjets = [
    {
      id: 1, 
      title: "Train Delay IA",
      description: "Web app built with Streamlit using a Scikit-learn model to predict train delays from CSV data.",
      imageSrc: "tardis.png",
      imageAlt: "Capture du projet Train Delay",
      skills: ["Python", "Sklearn", "Streamlit"],
      repoLink: "https://github.com/jarodpg/Tardis-Train-Delay-IA"
    },
    {
      id: 2,
      title: "YOWL",
      description: "Web app providing personalized advice on fitness and personal development, designed to meet user needs.",
      imageSrc: "yowl.png", 
      imageAlt: "Capture du site E-commerce",
      skills: ["Figma", "Css", "Docker", "React"], 
      repoLink: "https://github.com/jarodpg/YOWL"
    },
    {
      id: 3,
      title: "Hackathon / EcoBoard",
      description: "Hackathon-winning MVP for Les Shifters, collecting and displaying ecological data automatically. Our team won first place in the class hackathon.",
      imageSrc: "hackathon.png", 
      imageAlt: "Capture du site E-commerce",
      skills: ["Figma", "Css", "React","Product Design",], 
      repoLink: "https://github.com/jarodpg/Hackaton-EcoBoard"
    },
    {
      id: 4,
      title: "E-todo Web App",
      description: "A full-stack web app (todo app) with authentication is containerized using Docker.It includes a front-end, a back-end API, and a database.",
      imageSrc: "etodo.png", 
      imageAlt: "Capture du site",
      skills: ["BackEnd", "TailWind", "Docker", "React"], 
      repoLink: "https://github.com/jarodpg/etodo"
    }
  ];

  const DataDiplomes = [
    {
      id: 1,
      titre: "Bachelor's Degree in Computer Science",
      ecole: "Epitech",
      date: "2025 - 2028",
      details: "1st Year: Full Stack Development, IA, CyberSecurity",
      lienImage: "epitech.png" // Remplace par ton icone
    },
    {
      id: 2,
      titre: "General Baccalaureate",
      ecole: "Lycée Pierre d'Ailly, Compiègne",
      date: "2022 - 2025",
      details: "With Honors, specializations: Life and Earth Sciences, English",
      lienImage: "pierredailly.png" // Remplace par ton icone
    },
    {
      id: 3,
      titre: "National Brevet Diploma",
      ecole: "Collège Jean Paul II, Compiègne",
      date: "2018 - 2022",
      details: "Best possible mention, 698 / 800",
      lienImage: "jp2.png" // Remplace par ton icone
    }
  ];

  const DataExperiencesPro = [
    {
      id: 1,
      titre: "Middle School internship",
      entreprise: "USCB /  Soccer club",
      date: "April 2022",
      description: "Observation internship to learn about the role of director at the Choisy-au-Bac soccer academy.",
      competences: ['Observer',"Excel Management"], 
      lienImage: "choisy.png"   
    },
    {
      id: 2,
      titre: "Service Civique",
      entreprise: "USCB / Soccer club",
      date: "2023 - 2024",
      description: "During my civic service, I took care of the stadium maintenance. I also coached youth teams aged 5 to 12 and planned their training sessions..",
      competences: ["Communication", "Project gestion", "Organization", 'Creativity', "Supervision"],
      lienImage: "servicecivique.png" 
    },
    {
      id: 3,
      titre: "First-Year End-of-Year Workshop",
      entreprise: "Upskill Handball",
      date: "2025",
      description: "Operational enhancement of the Upskill Handball database: searching for public information, adding photos, updating player profiles, and quality control.",
      competences: ["OSINT", "Communication", "Rigor","Accuracy"],
      lienImage: "upskill.png" 
    }
  ];


  // return principal contient uniquement l'affichage
  return (
    <>
      <Background />

      {/* // ================================================================
      //                         HOME PAGE
      // ================================================================ */}


      <div className='top-bar' style={{display:'flex', flexDirection:"row", justifyContent:'space-between'}}>

        <div>
          <Email />
        </div>

        <div>
          <Header />
        </div>

      </div>

      <div className='hero-section' style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginRight:'35vh', marginLeft:'15vh'}}>

        <div>
          <Hi />
        </div>

        <div  className='photo-container' style={{display:'flex', justifyContent:'flex-end', marginTop:'5vh'}}>
          <PhotoProfil />
        </div>

      </div>

      <Fleche />

      {/* // ================================================================
      //                         ABOUT ME
      // ================================================================ */}


      <div className="about-section" style={{display:"flex", gap:"20vh"}}>


        <div className="about-text-wrapper" style={{marginLeft:"17vh", marginTop:"8vh", display:"flex", justifyContent:"center"}}>
          <AboutText />
        </div>

        <div className="about-timeline-wrapper" style={{marginTop:"15vh"}}>
          <TimelineItem />
        </div>


      </div>  

      {/* // ================================================================
      //                         PROJECTS
      // ================================================================ */}

      <div className="projects-section" style={{marginLeft:"12vh", marginTop:"8vh", paddingTop:"3vh"}}>
        <HeaderProject />


        {/* .map pour afficher lensemble des données 1 par 1 */}
        <div className="projects-container" style={{ display: "flex", flexWrap: "wrap", gap: "10vh", marginTop: "10vh" }}>

          {DataProjets.map((project) => (

            <ProjectCard 


              key={project.id} 
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              skills={project.skills}
              repoLink={project.repoLink}





            />
          ))}
        </div>

      {/* // ================================================================
      //                         EXPERIENCES
      // ================================================================ */}

     <div className="experiences-section" style={{marginLeft:"1.5vh", marginTop:"8vh", display: "flex", flexDirection: "column"}}>
        
        <HeaderExperiences />
        
        {/* --- Colonne 1 : Experiencs pro --- */}
        <div className="experiences-wrapper" style={{ display: 'flex', marginTop: '4vh', paddingBottom: '10vh', gap: "5vw" }}>

          
          <div className="experience-col" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            
            
            <p className="dégradéTITRE experiences-subtitle" style={{  fontFamily:"Satoshi",fontSize: "5vh", fontWeight: "500", margin: "0 0 2vh 0" }}>
                Professional
            </p>
            
            <div className='colonne-scrollable' style={{ fontFamily:"Satoshi", display: 'flex', flexDirection: 'column', gap: '2vh', height: '60vh' , fontFamily:"Satoshi"}}>
              {DataExperiencesPro.map((exp) => (
                <CarteProfessionnel 
                  key={exp.id}
                  titre={exp.titre}
                  entreprise={exp.entreprise}
                  date={exp.date}
                  description={exp.description}
                  competences={exp.competences}
                  lienImage={exp.lienImage}
                />
              ))}
            </div>
          </div>

          {/* --- Colonne 2 : Diplômes --- */}
          <div className="experience-col" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2vh', fontFamily:"Satoshi"}}>
            
            
            <p className="dégradéTITRE experiences-subtitle" style={{ fontSize: "5vh", fontWeight: "500", margin: "0 0 2vh 0", fontFamily:"Satoshi" }}>
                Degrees
            </p>

            <div className='colonne-scrollable' style={{  fontFamily:"Satoshi",display: 'flex', flexDirection: 'column', gap: '2vh', height: '60vh' }}>
              {DataDiplomes.map((diplome) => (
                <CarteDiplome 
                  key={diplome.id}
                  titre={diplome.titre}
                  ecole={diplome.ecole}
                  date={diplome.date}
                  details={diplome.details}
                  lienImage={diplome.lienImage}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

         {/* // ================================================================
      //                         CONTACT ME
      // ================================================================ */}


      <div className="contact-section" style={{display:'flex',flexDirection:"column",justifyContent:"center", marginRight:"17vh", marginTop:"5vh"}}>

        <HeaderContact />

        <Formulaire />

      </div>

          <Footer />
      </div>
    </>
  );
}

export default App;
function CarteProfessionnel({ titre, entreprise, date, description, competences, lienImage }) {
  return (
    <div className="carte-style-neon">
      
      
      <div className="ligne-haut-pro">

        <div>

          <h3 className="titre-rouge-clair">{titre}</h3>

          <p className="texte-gris-clair">{entreprise} - {date}</p>

        </div>


        {lienImage && <img src={lienImage} alt="logo" className="icone-pro" />}
      </div>



    
      <p className="description-blanche">{description}</p>

      {/* compétences en bas */}

      <div className="liste-competences">

        {competences.map((competence, index) => (

          <span key={index} className="etiquette-competence">{competence}</span>
        ))}
        
      </div>

    </div>
  );
}

export default CarteProfessionnel;
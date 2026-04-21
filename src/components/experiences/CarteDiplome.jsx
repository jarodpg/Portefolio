function CarteDiplome({ titre, ecole, date, details, lienImage }) {
  return (
    <div className="carte-style-neon disposition-diplome">
      
      <div className="boite-icone-diplome">

        {lienImage && <img src={lienImage} alt="icone diplome" className="icone-diplome" />}
      </div>

      <div className="boite-texte-diplome">

        <h3 className="titre-rouge-clair">{titre} - {ecole}</h3>

        <p className="texte-gris-clair">{date}</p>
        
       
        <p className="details-diplome">{details}</p>
      </div>

    </div>
  );
}

export default CarteDiplome;
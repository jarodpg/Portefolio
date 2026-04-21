function Projects({ title, description, imageSrc, imageAlt, skills, repoLink}) {
    return(
        <>

            <div className="CardContour">

                <img style={{width:"60vh", borderRadius:"1vh"}} src={imageSrc} alt={imageAlt}/>


                <h3 className="titre-card">
                    {title}
                </h3>


                <h5 className="description-card" style={{margin: "0.5vh "}}>
                    {description}
                </h5>



                <div style={{display:"flex", gap:"1vh"}}>
                    
                    {skills.map((skill, index) => (
                        <h5 key={index} className="competences-card">
                            {skill}
                        </h5>
                    ))}
                </div>


                <a href={repoLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>

                <div style={{display:"flex", alignItems:"center", gap:"1vh", marginTop: "2vh"}}>

                    <img style={{width:"5vh", height:"5vh", borderRadius:"2vh"}} src="githubBlanc.png" alt="Github Logo"/>

                    <p className="GithubRepo" style={{margin: 0}}>
                        Github Repository
                    </p>
                </div>
            </a>

            </div>

        </>
    )
}

export default Projects
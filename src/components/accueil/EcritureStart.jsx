function Hi (){
    return(
        <>
        <div style={{marginTop:'7vh'}}>

            <div className='titre-principal' style={{fontFamily:'Satoshi', fontSize:'6vh', fontWeight:'800', color:'white'}}>
            I am Jarod
            </div>

            <div className="sous-titre" style={{fontFamily:'Satoshi', fontSize:'8vh', fontWeight:'800', color:'#C8272F', paddingTop:'5vh'}}>
            Computer Science <span style={{display:'block'}}>student</span>
            </div>

            <div className="texte-intro" style={{fontFamily:'Satoshi', fontSize:'3vh', fontWeight:'800', color:'#B4B4B4'}}>
                <p>
                    Currently pursuing a Bachelor’s degree at Epitech, I thrive in collaborative environments, leading group projects to build innovative solutions. I am dedicated to mastering the technologies of tomorrow.                </p>
            </div>

            <div className="cv-and-icons" style={{display: "flex",gap: '6vh',paddingTop: "2vh",alignItems: "center" }}>
            
                <div style={{ paddingTop:"2vh"}}>
                    <a href="/for all Jarod Putman-Grain.pdf" download> 
                        <button className="downloadcv">Download CV</button>
                    </a>
                </div>
                
                <div className='appicon' style={{display:"flex",gap:"4vh",marginTop:"2vh" 
                }}
                >
                    <button style={{background:'none', border:"none", cursor:"pointer"}}
                    onClick={() => window.open("https://www.instagram.com/jaroodd_/")}>
                        <img src="Instagram.svg" alt="icon" width="75vh"/>
                    </button>

                    <button style={{background:'none', border:"none",cursor:"pointer"}}
                    onClick={() => window.open("https://www.linkedin.com/in/jarod-putman-grain-3b6589387/", "_blank")}>
                        <img src="Linkedin.png" alt="icon" width="75vh"/>
                    </button>

                    <button style={{background:'none', border:"none",cursor:"pointer"}}
                    onClick={() => window.open("https://github.com/jarodpg")}>
                        <img src="Github.png" alt="icon" width="75vh"/>
                    </button>
                </div>
            </div>

        </div>
        </>
    )
}

export default Hi   
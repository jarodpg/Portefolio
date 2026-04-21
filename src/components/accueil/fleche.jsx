function Fleche (){
    return(
        <>
        
        <div className="fleche">
            
            <button onClick={() => {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });}}
                style={{background:"none", border:"none", cursor:"pointer"}}>

                <img src="/flechebas.svg" alt="fleche"/>

            </button>

        </div>
        </>
    )
}

export default Fleche
function Header (){
    return(
        <>
        <div className='buttonheader' style={{padding:'2vh', display:'flex', gap:'4vh', marginRight:'7vh', marginTop:'3.8vh',  }}>
            <button onClick={() => {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });}}>About me</button>

            <button onClick={() => {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });}}>Projects</button>

            <button onClick={() => {
                document.getElementById('experiences').scrollIntoView({ behavior: 'smooth' });}}>Experiences</button>
            <button onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });}}>Contact me</button>
        </div>
        </>
    )
}

export default Header
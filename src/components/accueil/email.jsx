function Email() {
  return (
    <>
        <div className='email-container' style={{display:'flex', flexDirection:'row', gap:'2vh', alignItems:'center',marginTop:'4.5vh', marginLeft:'10vh'}}>
            <img src="Mail.svg" alt="email" width={20}/>
            <div style={{ fontFamily: 'Satoshi', fontSize:'2.6vh', color:'white', fontWeight:'bold'}}>
                <p>jarodputman@gmail.com</p>
            </div>
        </div>
    </>
  );
}

export default Email;
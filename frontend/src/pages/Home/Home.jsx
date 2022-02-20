import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button/Button';
import Card from '../../components/shared/Card/Card';
import styles from './Home.module.css';

const Home = () => {
  const signInLinkStyle = {
    color:'#0077FF',
    fontWeight:'bold',
    textDecoration:'none',
    marginLeft:'10px'
  };
  const navigate = useNavigate();
  
  function startRegistration(){
    navigate('/register');
    
  }
  return (

    <div className={styles.cardWrapper}>

    <Card title="Welcome to Coders House" icons="Vector">
    <p className={styles.paragraph}>
        We’re working hard to get Codershouse ready for everyone! 
        While we wrap up the finishing youches,
         we’re adding people gradually to make sure nothing breaks :)
        </p>
        <div>

        <Button onClick={startRegistration} text="Get Your UserName"/>

        </div>
        <div className={styles.signInWrapper}>
          <span className={styles.signintext}>Have an invite text ?</span>
          <Link style={signInLinkStyle} to='/login'>SignIn</Link>
        </div>
    </Card>

        {/*  */}
      
    </div>
    

  )
}

export default Home
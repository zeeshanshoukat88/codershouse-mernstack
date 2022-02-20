import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css';

const Navigation = () => {
    const linkStyle = {
        color:'#fff',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'22px',
        display:'flex',
        alignItems:'center'
    };

    const logoText = {
        marginLeft: '10px'
    }
  return (
      
    <nav className={`${styles.navbar} container   `}>
        <Link style={linkStyle} to="/">
            <img src='/images/Vector.png' alt='Vector'/>
            <span style={logoText}>Coders House</span>
        </Link>
    </nav>
  )
}

export default Navigation
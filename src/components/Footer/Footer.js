import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  
  const { footer } = styles;

  return (
    <footer className={footer}>
        <nav>
            <ul>
                <li>
                    <a href='http://instagram.com' rel='noopener noreferrer'>Instagram</a>
                </li>
                <li>
                    <a href='http://facebook.com' rel='noopener noreferrer'>Facebook</a>
                </li>
            </ul>
        </nav>
        <p>Copyright PH</p>
    </footer>
  )
}

export default Footer
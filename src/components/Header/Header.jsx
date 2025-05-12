import React from 'react'
import { Link } from 'react-router'
import "./HeaderStyles.css"

const Header = () => {
    return (
        <header>
            <Link id='left-part' to={'/'}>
                Bogolu Hemeswar Reddy
            </Link>
            <div id='right-part'>
                <Link to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" fill='white'>
                        <path d="M12,2.1L1,12h3v9h7v-6h2v6h7v-9h3L12,2.1z M18,19h-3v-6H9v6H6v-8.8l6-5.4l6,5.4V19z"></path>
                    </svg>
                    <p> Home</p>
                </Link>
                <Link to={'/about'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                    <p> About</p>
                </Link>
                <Link to={'/projects'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-presentation-icon lucide-presentation"><path d="M2 3h20" /><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /><path d="m7 21 5-5 5 5" /></svg>
                    <p> Projects</p>
                </Link>
                <Link to={'/resume'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-user-icon lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 18a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>
                    <p> Resume</p>
                </Link>
            </div>
        </header>
    )
}

export default Header
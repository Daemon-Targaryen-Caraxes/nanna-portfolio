import React from 'react'
import programmer from '../../../assets/images/programmer.png'
import boy from '../../../assets/images/boy-laugh.svg'

const HomeTab = () => {
    return (
        <div id="home-tab">

            <section id='intro'>
                <div id='main-left-part'>
                    <h1>Hi There! 👋🏻</h1>
                    <h1>This is Hemeswar</h1>
                    <h1>Frontend Developer, Backend Developer</h1>
                </div>
                <div id='main-right-part'>
                    <img src={programmer} alt="programmer" width={150} height={250} />
                </div>
            </section>
            <section id='about-myself'>
                <div>
                    <h2>LET ME INTRODUCE MYSELF</h2>

                    I'm a developer who loves crafting clean, functional, and fun applications, whether it's for the web or something a bit more behind the scenes. My toolkit includes Python, JavaScript, and TypeScript — fluent in all three and always hungry to learn more.

                    Aside from building stuff, I’ve got a curious side that’s drawn to the world of cybersecurity — there’s something thrilling about understanding how systems tick and how to protect them from going boom 💥 (in a bad way).

                    If it's creative, challenging, and code-filled, I’m all in. Let’s build cool things together!
                </div>
                <img src={boy} alt="" />
            </section>
            <section id='find-me'>
                <div id='find-me-top'>
                    <h1>FIND ME ON</h1>
                    <h3>Feel free connect with me</h3>
                </div>
                <div id='find-me-bottom'>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default HomeTab
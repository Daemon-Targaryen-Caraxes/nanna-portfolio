import React from 'react'
import programmers from '../../../assets/images/programmers.png'

const AboutTab = () => {

    return (
        <div id='about'>
            <section id="know-me">
                <div id='know-me-left-part'>
                    <h1>Know Who I'm</h1>
                    <div id="know-me-content">
                        <h3>Hi Everyone, I am Bogolu Hemeswar Reddy from Bellary, Karnataka, India. </h3>
                        <h3> I am currently completed my Diploma in Computer Engineering. </h3>
                        <h3>Completed a 6-month Frontend Developer Internship at Thoughtworks </h3>
                        <h3>
                            Apart from Coding, some other activities that I loved to do!
                            <ul>
                                <li>Playing games</li>
                                <li>Exploring upcoming tech trends</li>
                                <li>Chilling with close mates</li>
                            </ul>
                        </h3>
                    </div>
                </div>
                <img src={programmers} alt="" width={500} />
            </section>
            <section id="skill-set">
                <h1>Professional Skillset</h1>
                <div id='skills'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-css3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" fill='white'><path d="M 13 3 C 10.791 3 9 4.791 9 7 L 9 8 L 14 8 C 14.552 8 15 8.448 15 9 C 15 9.552 14.552 10 14 10 L 9 10 L 8 10 L 7 10 C 4.791 10 3 11.791 3 14 L 3 18 C 3 20.209 4.791 22 7 22 L 8 22 L 8 17 C 8 15.346 9.346 14 11 14 L 19 14 C 19.552 14 20 13.552 20 13 L 20 7 C 20 4.791 18.209 3 16 3 L 13 3 z M 12 5 C 12.552 5 13 5.448 13 6 C 13 6.552 12.552 7 12 7 C 11.448 7 11 6.552 11 6 C 11 5.448 11.448 5 12 5 z M 22 8 L 22 13 C 22 14.654 20.654 16 19 16 L 11 16 C 10.448 16 10 16.448 10 17 L 10 23 C 10 25.209 11.791 27 14 27 L 17 27 C 19.209 27 21 25.209 21 23 L 21 22 L 16 22 C 15.448 22 15 21.552 15 21 C 15 20.448 15.448 20 16 20 L 21 20 L 22 20 L 23 20 C 25.209 20 27 18.209 27 16 L 27 12 C 27 9.791 25.209 8 23 8 L 22 8 z M 18 23 C 18.552 23 19 23.448 19 24 C 19 24.552 18.552 25 18 25 C 17.448 25 17 24.552 17 24 C 17 23.448 17.448 23 18 23 z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-mongodb"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3v19" /><path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-git-fork"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" /><path d="M12 12l0 4" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-vite"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" /><path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" /></svg>
                </div>
            </section>
            <section id="tool-set">
                <h1>Tools I Use</h1>
                <div id="tools">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" fill='white'>
                        <path d="M27.324,4.804l-4.75-1.625c-0.315-0.108-0.667-0.051-0.932,0.152l-10.708,8.21L5.517,8.27 c-0.278-0.169-0.62-0.192-0.918-0.061l-2,0.875C2.235,9.243,2,9.603,2,10v10c0,0.397,0.235,0.757,0.599,0.916l2,0.875 c0.297,0.131,0.639,0.107,0.918-0.061l5.416-3.271l10.708,8.21c0.177,0.136,0.392,0.206,0.608,0.206 c0.109,0,0.218-0.018,0.324-0.054l4.75-1.625C27.728,25.058,28,24.678,28,24.25V5.75C28,5.322,27.728,4.942,27.324,4.804z M6,16.766 v-3.532L8.923,15L6,16.766z M22,19.717L15.038,15L22,10.283V19.717z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-windows"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 13v5c0 1.57 -1.248 2.832 -2.715 2.923l-.113 .003l-.042 .018a1 1 0 0 1 -.336 .056l-.118 -.008l-4.676 -.585v-7.407zm-10 0v7.157l-5.3 -.662c-1.514 -.151 -2.7 -1.383 -2.7 -2.895v-3.6zm0 -9.158v7.158h-8v-3.6c0 -1.454 1.096 -2.648 2.505 -2.87zm10 2.058v5.1h-8v-7.409l4.717 -.589c1.759 -.145 3.283 1.189 3.283 2.898" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-slack"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" /><path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" /><path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" /><path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-npm"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M1 8h22v7h-12v2h-4v-2h-6z" /><path d="M7 8v7" /><path d="M14 8v7" /><path d="M17 11v4" /><path d="M4 11v4" /><path d="M11 11v1" /><path d="M20 11v4" /></svg>

                </div>
            </section>
        </div>
    )
}

export default AboutTab
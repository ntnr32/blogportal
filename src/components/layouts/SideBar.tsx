import React from 'react'

export default function Sidebar() {
    return (
        <section className="sidebar-container text-center">
            <div className="sb-profile p-10">
                <div className="sb-profile-photo w-12 h-12 mx-auto rounded-full overflow-hidden">
                    <img src="https://www.svgrepo.com/show/170303/avatar.svg" alt="Profile" />
                </div>
                <div className="sb-profile-info p-5">
                    <h2>Nitin Res</h2>
                    <span className="text-xs">Personal Blog</span>
                </div>
            </div>
            <div className="sb-details">
                <div className="sb-description text-xs text-justify p-10">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellendus sunt at mollitia
                    tempora necessitatibus quia eum nisi distinctio provident adipisci, aspernatur vel rerum aliquam
                        cum nesciunt modi veritatis a!</p>
                </div>
                <div className="social-links">
                    social links
                </div>
                <div className="page-links">
                    <a href="/">about</a>
                    <a href="/">contact</a>
                </div>
            </div>
            <div className="tech-stack">
                tech stack
            </div>
        </section>
    )
}

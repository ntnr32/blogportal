import React from 'react'
import { Link } from "gatsby"

export default function Sidebar() {
    return (
        <section className="sidebar-container text-center shadow-lg">
            <div className="sb-profile flex m-auto mx-5 items-center lg:block lg:p-10">
                <div className="sb-profile-photo lg:mx-auto w-10 h-10 rounded-full overflow-hidden">
                    <Link to="/"><img src="https://www.svgrepo.com/show/170303/avatar.svg" alt="Profile" /></Link>
                </div>
                <div className="sb-profile-info text-left px-5 lg:text-center lg:p-5">
                    <h2 className="lg:text-2xl">Nitin Res</h2>
                    <span className="text-xs">Personal Blog</span>
                </div>
            </div>
            <div className="hidden lg:block sb-details">
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
            <div className="hidden lg:block tech-stack">
                tech stack
            </div>
        </section>
    )
}

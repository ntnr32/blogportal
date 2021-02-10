import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from '../Image';

export default function Sidebar() {

    return (
        <section className="sidebar-container text-center shadow-lg text-gray-400 font-indieFlower">
            <div className="sb-profile flex m-auto mx-5 items-center lg:block lg:p-10">
                <div className="sb-profile-photo lg:mx-auto w-10 h-10 rounded-full overflow-hidden">
                    <Link to="/"><Image /></Link>
                </div>
                <div className="sb-profile-info text-left px-5 lg:text-center lg:p-5">
                    <h2 className="lg:text-2xl font-semibold">Nitin Res</h2>
                    <span className="text-sm">Personal Blog</span>
                </div>
            </div>
            <div className="hidden lg:block sb-details">
                <div className="sb-description text-sm text-left p-10">
                    <p>I am a back-end developer, but now I concentrate on fullstack technologies.
                        I mostly focus on Microsoft Stack (i.e., Power Platform and Azure) and ReactJS.</p>
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

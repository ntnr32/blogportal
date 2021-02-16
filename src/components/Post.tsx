import React from 'react'
import { Link } from 'gatsby'

export default function Post({ title, date, excerpt, slug }) {
    return (
        <div id="post-1" className="px-4 py-2 md:p-5 hover:bg-gray-100 rounded-xl">
            <Link to={slug} className="flex sm:space-x-10 space-x-5">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <img className="absolute " src="https://www.svgrepo.com/show/170303/avatar.svg" alt="post icon" />
                </div>
                <div id="title">
                    <h1 className="text-base md:text-2xl font-semibold text-gray-500 leading-7 mb-1">{title}</h1>
                    <p id="post-description" className="text-sm md:text-xl text-gray-500">{excerpt}</p>
                    <span className="text-xs text-gray-500">{date}</span>
                </div>
            </Link>
        </div>
    )
}

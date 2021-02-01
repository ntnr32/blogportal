import React from 'react'

export default function Post() {
    return (
        <div id="post-1" className="flex space-x-10">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <img className="absolute " src="https://www.svgrepo.com/show/170303/avatar.svg" alt="post icon" />
            </div>
            <div id="title">
                <h1 className="text-2xl font-semibold text-gray-500 leading-7">How to customize the Personal Blog stater appeareance</h1>
                <p id="post-description" className="text-xl text-gray-500">Gatsby starter instructions</p>
            </div>
        </div>
    )
}

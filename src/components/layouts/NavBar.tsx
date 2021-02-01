import React from 'react'

export default function NavBar() {
    return (
        <nav className="navbar-container border-t lg:border-l lg:border-t-0 border-gray-200 mx-5 lg:mx-0 lg:my-5 items-center lg:items-start">
            <div className="top-menu-items text-center">
                <ul className="flex lg:block">
                    <li>
                        <button type="button" title="Click here to go to Home">
                            <svg className="w-10 p-2 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" title="Click here to Sort">
                            <svg className="w-10 p-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" title="Click here to Search">
                            <svg className="w-10 p-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="bottom-menu-items text-center">
                <ul className="flex lg:block">
                    <li>
                        <button type="button" title="Click here to open in fullscreen">
                            <svg className="w-10 p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" title="Click here to scroll up">
                            <svg className="w-10 p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

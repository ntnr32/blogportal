import * as React from 'react';
import { Link } from 'gatsby';

type PaginationProps = {
    prevPage: string,
    nextPage: string,
    isFirst: Boolean,
    isLast: Boolean
}

const Pagination: React.FC<PaginationProps> = ({ prevPage, nextPage, isFirst, isLast, ...rest }) => {

    const disableLinks = (flag) => {
        return flag ? "pointer-events-none text-gray-300" : "text-gray-500"
    }

    return (
        <div className="flex justify-between px-2 md:px-0" >
            <Link to={prevPage} className={`${disableLinks(isFirst)}`} {...isFirst && { disabled: true }}>
                <span className="flex">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                    <span>Previous</span>
                </span>
            </Link>
            <Link to={nextPage} className={`${disableLinks(isLast)}`} {...isLast && { disabled: true }}>
                <span className="flex">
                    <span>Next</span>
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </span>
            </Link>
        </div>
    )
}

export default Pagination;
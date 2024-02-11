import React from 'react'

const FromHigherToLower = ({isActive}:{isActive:boolean}) => {

const fill = isActive ? 'white' : '#7C7C89'
console.log(isActive)

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                id="sort_FILL0_wght400_GRAD0_opsz24 1"
            >
                <path
                    id="Vector"
                    d="M3 18V16H9V18H3ZM3 13V11H15V13H3ZM3 8V6H21V8H3Z"
                    fill={fill}
                />
            </g>
        </svg>
    )
}

export default FromHigherToLower
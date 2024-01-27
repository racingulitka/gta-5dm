import React from 'react'

const IOItemIcon = ({isSelected}:{isSelected:boolean}) => {
    console.log(isSelected)
    return (
        <svg
            width="120"
            height="98"
            viewBox="0 0 120 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                id="Group 34415"
            >
                <rect
                    id="Rectangle 860"
                    width="120"
                    height="98"
                    rx="7"
                    fill="#202026"
                    fillOpacity="0.5"
                />
                <path
                    id="Vector"
                    opacity={isSelected ? "1" : "0.2"}
                    d="M66.3694 34C57.6945 34 50.7389 40.75 50.7389 49C50.7389 57.325 57.7726 64 66.3694 64C74.9663 64 82 57.25 82 49C82 40.75 74.9663 34 66.3694 34ZM66.3694 54.475C63.1652 54.475 60.508 51.925 60.508 48.85C60.508 45.775 63.1652 43.225 66.3694 43.225C69.5737 43.225 72.2309 45.775 72.2309 48.85C72.1528 52.075 69.5737 54.475 66.3694 54.475ZM50.6607 38.275V60.1H45.1119L38 38.275H50.6607Z"
                    fill="white"
                />
            </g>
        </svg>
    )
}

export default IOItemIcon
import React from 'react'

const ApplePayItemIcon = ({isSelected}:{isSelected:boolean}) => {
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
                id="Group 34413"
            >
                <rect
                    id="Rectangle 858"
                    width="120"
                    height="98"
                    rx="7"
                    fill="#202026"
                    fill-opacity="0.5"
                />
                <path
                    id="Vector"
                    opacity={isSelected ? '1' :"0.2"}
                    d="M37.7903 38.481C36.9699 39.393 35.6573 40.1123 34.3446 40.0095C34.1805 38.7764 34.8232 37.4662 35.5752 36.657C36.3956 35.7193 37.8313 35.0514 38.9936 35C39.1303 36.2845 38.5971 37.5433 37.7903 38.481ZM38.9799 40.2536C37.0793 40.1508 35.4522 41.2683 34.5497 41.2683C33.6336 41.2683 32.2526 40.3049 30.7485 40.3306C28.7932 40.3563 26.9746 41.3968 25.9765 43.0538C23.9255 46.3677 25.4432 51.2745 27.4259 53.9719C28.3967 55.3078 29.5589 56.7721 31.0903 56.7207C32.5397 56.6694 33.114 55.8344 34.8642 55.8344C36.6281 55.8344 37.134 56.7207 38.6654 56.6951C40.2515 56.6694 41.2497 55.3592 42.2205 54.0233C43.3281 52.5076 43.7793 51.0304 43.8066 50.9534C43.7793 50.9277 40.7438 49.8359 40.7164 46.5476C40.6891 43.7988 43.1093 42.4886 43.2187 42.4115C41.8513 40.5105 39.7183 40.3049 38.9799 40.2536ZM49.9597 36.5285V56.5538H53.2687V49.7074H57.8493C62.0333 49.7074 64.9731 47.01 64.9731 43.1051C64.9731 39.2003 62.088 36.5285 57.9586 36.5285H49.9597ZM53.2687 39.1489H57.0835C59.955 39.1489 61.5958 40.5875 61.5958 43.118C61.5958 45.6484 59.955 47.0999 57.0699 47.0999H53.2687V39.1489ZM71.0168 56.7079C73.0951 56.7079 75.0231 55.7188 75.8982 54.1518H75.9666V56.5538H79.0294V46.5861C79.0294 43.696 76.5682 41.8335 72.7807 41.8335C69.2666 41.8335 66.6686 43.7217 66.5729 46.3164H69.5537C69.7998 45.0833 71.0168 44.274 72.6849 44.274C74.7086 44.274 75.8435 45.1603 75.8435 46.7916V47.8963L71.7141 48.1275C67.8719 48.3459 65.7935 49.823 65.7935 52.392C65.7935 54.9867 67.9403 56.7079 71.0168 56.7079ZM71.9056 54.3316C70.1417 54.3316 69.0205 53.5352 69.0205 52.3149C69.0205 51.0561 70.1007 50.324 72.1654 50.2084L75.8435 49.99V51.1204C75.8435 52.9957 74.148 54.3316 71.9056 54.3316ZM83.1178 62C86.3447 62 87.8625 60.844 89.1888 57.3373L95 42.0262H91.6363L87.7394 53.8563H87.671L83.7741 42.0262H80.3147L85.9208 56.6051L85.62 57.4914C85.1141 58.9943 84.2937 59.5723 82.8306 59.5723C82.5708 59.5723 82.0649 59.5466 81.8598 59.5209V61.9229C82.0513 61.9743 82.8717 62 83.1178 62Z"
                    fill="white"
                />
            </g>
        </svg>
    )
}

export default ApplePayItemIcon
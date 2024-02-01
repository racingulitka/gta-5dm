import React from 'react'

const QiwiItemIcon = ({isSelected}:{isSelected:boolean}) => {
    return (
        <svg
            width="108"
            height="72"
            viewBox="0 0 108 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                id="Qiwi-Logo.wine 1"
                opacity={isSelected ? '1':'0.1'}
            >
                <g
                    id="Group"
                >
                    <path
                        id="Vector"
                        d="M53.166 38.4969H54.4688V41.4165H55.4098L57.0989 38.4969H58.523L56.4957 41.9236V41.9474L58.6437 45.6867H57.1715L55.4339 42.5497H54.4934V45.6867H53.1901V38.4961L53.166 38.4969ZM61.5633 40.4034C63.1308 40.4034 64.4103 41.5372 64.4103 43.1056C64.4103 44.6986 63.1554 45.8083 61.5874 45.8083C60.0185 45.8083 58.7636 44.6983 58.7636 43.1056C58.7398 41.5132 59.9944 40.4034 61.5633 40.4034ZM65.4233 40.5233H66.6541V44.5776H68.2712V40.5242H69.5011V44.5776H71.1179V40.5242H72.3486V45.6867H65.4715V40.5233H65.4233ZM75.9927 40.4034C77.4641 40.4034 78.2847 41.4891 78.2847 42.8408C78.2806 43.0104 78.2645 43.1795 78.2365 43.3468H74.6894C74.7619 44.2394 75.4618 44.7224 76.2342 44.7224C76.7642 44.7224 77.2954 44.4809 77.7056 44.1674L78.2127 45.0847C77.6818 45.5421 76.8853 45.8324 76.1375 45.8324C74.4238 45.8324 73.3625 44.6016 73.3625 43.1294C73.3625 41.5132 74.4476 40.4034 75.9927 40.4034ZM78.8876 44.6016C79.5154 44.505 79.9735 43.9747 79.9735 42.1402V40.5242H83.7383V45.6867H82.4588V41.5605H81.2042V42.1396C81.2042 44.3834 80.6013 45.6867 78.8876 45.7349V44.6016ZM87.4056 40.4034C88.8773 40.4034 89.6976 41.4891 89.6976 42.8408C89.6935 43.0104 89.6774 43.1795 89.6494 43.3468H86.1023C86.1751 44.2394 86.8747 44.7224 87.6471 44.7224C88.1774 44.7224 88.7083 44.4809 89.1185 44.1674L89.6259 45.0847C89.0947 45.5421 88.2982 45.8324 87.5504 45.8324C85.8375 45.8324 84.7754 44.6016 84.7754 43.1294C84.7754 41.5132 85.8613 40.4034 87.4056 40.4034ZM90.7597 40.5233H92.038V42.5024H92.6659L93.9207 40.5239H95.3442L93.703 42.9848V43.0095L95.537 45.6867H94.0415L92.69 43.5883H92.0151V45.6867H90.7347V40.5233H90.7597ZM61.5633 44.6986C62.408 44.6986 63.1075 44.0466 63.1075 43.0815C63.1075 42.1404 62.408 41.4644 61.5627 41.4644C60.7189 41.4644 60.0434 42.1169 60.0434 43.0815C60.0434 44.0466 60.718 44.6986 61.5633 44.6986ZM76.9819 42.4545C76.9819 41.7788 76.5227 41.3686 75.9439 41.3686C75.2931 41.3686 74.8101 41.8028 74.6894 42.4542L76.9819 42.4545ZM88.3948 42.4545C88.3948 41.7788 87.9368 41.3686 87.3577 41.3686C86.7052 41.3686 86.223 41.8028 86.1023 42.4542L88.3948 42.4545Z"
                        fill="white"
                    />
                    <path
                        id="Vector_2"
                        d="M71.1916 22.8369V35.0225C71.1926 35.0671 71.1846 35.1114 71.168 35.1528C71.1514 35.1941 71.1266 35.2317 71.0951 35.2632C71.0635 35.2948 71.0259 35.3196 70.9846 35.3362C70.9432 35.3528 70.8989 35.3608 70.8543 35.3598H68.3684C68.3239 35.3608 68.2795 35.3528 68.2382 35.3362C68.1968 35.3196 68.1592 35.2948 68.1277 35.2632C68.0961 35.2317 68.0713 35.1941 68.0547 35.1528C68.0381 35.1114 68.0301 35.0671 68.0311 35.0225V22.8369C68.0301 22.7923 68.0381 22.748 68.0547 22.7066C68.0713 22.6652 68.0961 22.6277 68.1277 22.5961C68.1592 22.5646 68.1968 22.5398 68.2382 22.5232C68.2795 22.5066 68.3239 22.4986 68.3684 22.4996H70.8543C70.8989 22.4986 70.9432 22.5066 70.9846 22.5232C71.0259 22.5398 71.0635 22.5646 71.0951 22.5961C71.1266 22.6277 71.1514 22.6652 71.168 22.7066C71.1846 22.748 71.1926 22.7923 71.1916 22.8369ZM90.5916 22.4996C90.6886 22.4996 90.8093 22.5475 90.9289 22.6441C91.0021 22.7161 91.0021 22.8369 90.978 22.9338L86.8756 35.1432C86.8506 35.2064 86.8076 35.2608 86.7518 35.2995C86.696 35.3382 86.63 35.3594 86.5621 35.3606H84.3424C84.1975 35.3606 84.0768 35.2878 84.0289 35.1432L81.6385 28.0252L79.2499 35.1427C79.2249 35.2058 79.1818 35.2601 79.126 35.2987C79.0702 35.3374 79.0042 35.3586 78.9364 35.3598H76.7167C76.5721 35.3598 76.4511 35.2878 76.4032 35.1424L72.3005 22.933C72.2764 22.8369 72.2764 22.7402 72.3487 22.6441C72.3971 22.5475 72.5179 22.4996 72.614 22.4996H75.389C75.5335 22.4996 75.6543 22.5954 75.703 22.7402L77.8984 29.9549L80.3117 22.7402C80.3366 22.6771 80.3797 22.6227 80.4355 22.584C80.4913 22.5453 80.5573 22.524 80.6252 22.5228H82.5796C82.7241 22.5228 82.8449 22.5954 82.8931 22.7402L85.3064 29.9549L87.5023 22.7402C87.5219 22.6719 87.563 22.6116 87.6194 22.5682C87.6758 22.5249 87.7446 22.5007 87.8158 22.4993L90.5916 22.4996ZM94.7901 22.4996C94.9588 22.4996 95.1036 22.6441 95.1274 22.8369V35.0225C95.1284 35.0671 95.1204 35.1114 95.1038 35.1528C95.0872 35.1941 95.0624 35.2317 95.0309 35.2632C94.9993 35.2948 94.9618 35.3196 94.9204 35.3362C94.879 35.3528 94.8347 35.3608 94.7901 35.3598H92.3045C92.26 35.3608 92.2156 35.3528 92.1743 35.3362C92.1329 35.3196 92.0953 35.2948 92.0638 35.2632C92.0322 35.2317 92.0074 35.1941 91.9908 35.1528C91.9742 35.1114 91.9662 35.0671 91.9672 35.0225V22.8369C91.9662 22.7923 91.9742 22.748 91.9908 22.7066C92.0074 22.6652 92.0322 22.6277 92.0638 22.5961C92.0953 22.5646 92.1329 22.5398 92.1743 22.5232C92.2156 22.5066 92.26 22.4986 92.3045 22.4996H94.7901ZM66.583 34.9264C66.7275 35.0951 66.6071 35.336 66.3896 35.336H63.3491C63.2892 35.3376 63.2297 35.3254 63.1754 35.3002C63.121 35.2751 63.0731 35.2378 63.0356 35.1911L62.5293 34.5641C61.4675 35.239 60.2121 35.65 58.8853 35.65C55.1701 35.65 52.1536 32.6338 52.1536 28.9178C52.1536 25.2017 55.1701 22.1852 58.8855 22.1852C62.6016 22.1852 65.6178 25.2017 65.6178 28.9178C65.6178 30.2452 65.2315 31.5 64.556 32.561L66.583 34.9264ZM41.1746 40.8378C41.8022 41.079 42.0437 42.0198 42.0916 42.4299C42.1885 43.1782 41.9717 43.4677 41.7302 43.4677C41.4887 43.4677 41.1505 43.1785 40.7891 42.5994C40.4266 42.0195 40.2817 41.3687 40.4753 41.0305C40.5955 40.8128 40.8603 40.717 41.1746 40.8378ZM37.507 43.5646C37.8934 43.5646 38.3276 43.7332 38.7137 44.0708C39.4614 44.6984 39.6791 45.4223 39.2928 45.953C39.0754 46.2186 38.7137 46.3875 38.3035 46.3875C37.8934 46.3875 37.4588 46.2426 37.1697 45.9771C36.494 45.3982 36.3012 44.4322 36.7346 43.9022C36.9041 43.6845 37.1697 43.5646 37.507 43.5646ZM29.0624 50.5375C19.8925 50.5378 12.4609 43.1057 12.4609 33.9369C12.4609 24.7675 19.893 17.3359 29.0616 17.3359C38.2304 17.3359 45.6628 24.768 45.6628 33.9366C45.6628 37.0489 44.7943 39.9693 43.3229 42.4543C43.2741 42.5266 43.1534 42.5025 43.1293 42.4058C42.5502 38.3284 40.0652 36.0837 36.4455 35.4085C36.1314 35.3598 36.0833 35.167 36.4937 35.1191C37.6037 35.0225 39.1717 35.0463 39.9923 35.1911C40.0411 34.7667 40.0653 34.3397 40.0649 33.9125C40.0649 27.8557 35.1422 22.933 29.0854 22.933C23.0294 22.933 18.1067 27.8557 18.1067 33.9125C18.1067 39.9693 23.0294 44.892 29.0862 44.892H29.5925C29.4204 43.9124 29.3475 42.9179 29.3748 41.9237C29.3997 41.2479 29.5443 41.151 29.834 41.6822C31.3541 44.3123 33.5259 46.6769 37.7723 47.6182C41.2469 48.3906 44.7215 49.283 48.4613 54.0364C48.7992 54.4466 48.2929 54.8808 47.9066 54.5433C44.0945 51.1645 40.6199 50.0548 37.4586 50.0548C33.9114 50.0795 31.4996 50.5375 29.0624 50.5375ZM60.5505 32.2237L59.2231 30.6066C59.0791 30.4379 59.1999 30.1723 59.4167 30.1723H62.2155C62.3601 29.7863 62.4329 29.352 62.4329 28.9178C62.4329 26.9152 60.9369 25.1776 58.8855 25.1776C56.8353 25.1776 55.3384 26.9152 55.3384 28.9178C55.3384 30.9201 56.835 32.6338 58.8855 32.6338C59.4646 32.6576 60.0443 32.4896 60.5505 32.2237Z"
                        fill="white"
                    />
                </g>
            </g>
        </svg>
    )
}

export default QiwiItemIcon
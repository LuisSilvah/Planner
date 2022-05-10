import React from 'react';
import { Link } from 'react-router-dom';
import "./cloak.scss";

function CloakPage() {
    return (
        <div className="cloak">
          <div className="logo">
            <div className="wrapper-svg">
              <svg width="129" height="122" viewBox="0 0 129 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M129 60.9981C129 27.3547 100.065 0 64.502 0C28.9388 0 0 27.3547 0 60.9981C0 92.7819 25.8368 118.962 58.6905 121.746H58.8487C59.3879 121.79 59.9281 121.828 60.4698 121.861L60.7822 121.878C61.272 121.906 61.7698 121.927 62.2742 121.941H62.6673C63.278 121.941 63.8878 121.969 64.5055 121.969C65.1228 121.969 65.6706 121.969 66.2516 121.945H66.498C67.01 121.93 67.5194 121.911 68.0268 121.885H68.1296C69.274 121.825 70.4113 121.736 71.5411 121.618C103.803 118.308 129 92.3854 129 60.9981ZM71.3204 115.812L70.6991 98.942L86.2768 89.9035C88.0646 91.0625 90.1567 91.7309 92.3213 91.8348C94.486 91.9387 96.6389 91.4741 98.5416 90.4923C100.444 89.5105 102.023 88.0499 103.102 86.2721C104.181 84.4944 104.719 82.4689 104.656 80.4199C104.406 74.5692 99.4474 69.8798 93.261 69.6439C91.53 69.5851 89.807 69.8914 88.2167 70.5404C86.6264 71.1894 85.2088 72.165 84.0665 73.3963C82.9243 74.6277 82.0861 76.084 81.6127 77.6597C81.1393 79.2353 81.0425 80.8909 81.3295 82.5063L70.3352 88.937L69.5375 67.6795L84.8689 58.8116C90.2552 62.6155 97.7538 62.2028 102.637 57.8337C107.52 53.4646 108.371 46.4067 104.653 41.1102C100.936 35.8132 93.7276 33.8145 87.5744 36.3741C81.4212 38.9337 78.1075 45.3092 79.7235 51.4802L69.1702 57.675L68.5454 40.7108C70.9941 39.8152 73.0849 38.2168 74.5239 36.14C75.963 34.0631 76.6782 31.6122 76.5691 29.1313C76.308 23.2 71.4574 18.361 65.2085 17.7977C58.9601 17.2344 53.2306 21.1193 51.7885 26.8972C50.3473 32.675 53.6358 38.573 59.4917 40.7108L58.3523 75.8592L46.8658 68.9381C47.6321 65.9762 47.2662 62.8535 45.8328 60.1222C43.535 55.6029 38.9041 52.398 33.6221 52.0849C31.2478 51.9385 28.8716 52.3446 26.7016 53.2677C24.5317 54.1909 22.634 55.6029 21.1747 57.3803C19.7154 59.1577 18.739 61.2463 18.3308 63.4633C17.9227 65.6802 18.0953 67.958 18.8336 70.0972C19.5718 72.2365 20.8532 74.172 22.5656 75.7344C24.278 77.2968 26.3692 78.4385 28.6562 79.0596C30.9432 79.6806 33.3563 79.7621 35.6843 79.2969C38.0123 78.8317 40.1843 77.834 42.0102 76.3911L58.0213 85.9719L57.0588 115.746C28.3871 112.288 6.11944 89.0552 6.11944 60.9986C6.14262 30.5667 32.3205 5.8012 64.502 5.8012C96.683 5.8012 122.861 30.5596 122.861 60.9943C122.861 89.2497 100.296 112.606 71.3204 115.812V115.812Z" fill="#121212" />
                <path d="M64.1337 22.4766C68.3277 22.4804 71.7265 25.6948 71.7305 29.6613C71.7305 33.6291 68.3292 36.8459 64.1337 36.8459C59.9376 36.8459 56.5363 33.6291 56.5363 29.6613C56.5363 25.6934 59.9376 22.4766 64.1337 22.4766ZM92.7737 74.2504C96.5782 74.2484 99.6676 77.1574 99.6822 80.7554C99.6859 82.0458 99.2848 83.3082 98.5297 84.3829C97.7747 85.4576 96.6995 86.2964 95.4402 86.7931C94.181 87.2898 92.7942 87.4222 91.4554 87.1734C90.1167 86.9246 88.886 86.3058 87.9191 85.3954C86.9522 84.485 86.2926 83.3238 86.0236 82.0588C85.7547 80.7938 85.8885 79.4817 86.4082 78.2886C86.9279 77.0955 87.8101 76.075 88.9432 75.3562C90.0762 74.6374 91.4093 74.2525 92.7737 74.2504V74.2504ZM97.0246 55.3261C92.9949 57.1785 88.1403 55.5953 86.1735 51.7876C85.47 50.4225 85.2103 48.8908 85.4274 47.3861C85.6444 45.8815 86.3284 44.4715 87.3928 43.3345C88.4572 42.1976 89.8543 41.3847 91.4072 40.9986C92.9602 40.6126 94.5993 40.6708 96.1173 41.1659C97.6353 41.661 98.964 42.5707 99.9352 43.7799C100.906 44.9892 101.477 46.4437 101.574 47.9595C101.671 49.4753 101.291 50.9843 100.481 52.2956C99.6711 53.607 98.4683 54.6617 97.0246 55.3265V55.3261ZM32.4314 57.4611C37.2649 57.4653 41.1827 61.1701 41.1868 65.7413C41.1848 70.3116 37.2664 74.0149 32.4339 74.0145C27.6015 74.014 23.6841 70.3092 23.6836 65.7389C23.6831 61.1687 27.5989 57.4634 32.4314 57.4611V57.4611Z" fill="url(#paint0_linear_11_99)" />
                <defs>
                  <linearGradient id="paint0_linear_11_99" x1="62.6362" y1="22.4766" x2="62.6362" y2="87.2958" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4E54C8" />
                    <stop offset="1" stop-color="#8F94FB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <Link to="/home">Beauty Planner</Link>
          </div>
        </div>
    )
}

export default CloakPage;
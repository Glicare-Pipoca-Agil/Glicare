interface IconMovePageRightProps {
    className?: string;  
}

export default function IconMovePageRight({ className }: IconMovePageRightProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
            <path d="M24.4163 20.5827C24.583 20.416 24.6663 20.2216 24.6663 19.9993C24.6663 19.7771 24.583 19.5827 24.4163 19.416L19.7497 14.7493C19.4719 14.4716 19.1663 14.4021 18.833 14.541C18.4997 14.6799 18.333 14.9438 18.333 15.3327L18.333 24.666C18.333 25.0549 18.4997 25.3188 18.833 25.4577C19.1663 25.5966 19.4719 25.5271 19.7497 25.2493L24.4163 20.5827ZM36.6663 19.9993C36.6663 22.3049 36.2286 24.4716 35.353 26.4993C34.4775 28.5271 33.2902 30.291 31.7913 31.791C30.2925 33.291 28.5286 34.4782 26.4997 35.3527C24.4708 36.2271 22.3041 36.6649 19.9997 36.666C17.6952 36.6671 15.5286 36.2293 13.4997 35.3527C11.4708 34.476 9.7069 33.2888 8.20801 31.791C6.70912 30.2932 5.5219 28.5293 4.64634 26.4993C3.77079 24.4693 3.33301 22.3027 3.33301 19.9993C3.33301 17.696 3.77078 15.5293 4.64634 13.4993C5.5219 11.4693 6.70912 9.70546 8.20801 8.20768C9.7069 6.7099 11.4708 5.52212 13.4997 4.64435C15.5286 3.76657 17.6952 3.32935 19.9997 3.33268C22.3041 3.33601 24.4708 3.77379 26.4997 4.64601C28.5286 5.51824 30.2925 6.70545 31.7913 8.20768C33.2902 9.7099 34.478 11.4738 35.3547 13.4993C36.2313 15.5249 36.6686 17.6916 36.6663 19.9993Z" fill="#1C1C1C"/>
        </svg>
    );
}
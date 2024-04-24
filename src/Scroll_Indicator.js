import React, { useEffect, useState } from 'react'

function Scroll_Indicator() {
    const [srcollProgress,setSrcollProgress] = useState(0);

    const onScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (scrollTop / height) * 100;
        setSrcollProgress(scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll',onScroll)
    }, []);

    return (
        <div className='progressMain'>
            <div className='progressLoad' style={{width:`${srcollProgress}%`}}>

            </div>
        </div>
    )
}

export default Scroll_Indicator
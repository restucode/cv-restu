import React from 'react'


import elapak from '../../assets/elapak.png'
import infopreset from '../../assets/infopreset.png'
import restucode from '../../assets/restucode.png'

const Project = () => {
    return (
        <div className="project">
            <h2>Project</h2>
            <div>
                <img src={infopreset} alt="" />
                <a href="https://restucode.netlify.app/">restucode.netlify.app</a>
            </div>
            <div>
                <img src={restucode} alt="" />
                <a href="https://restucode1.netlify.app/">restucode1.netlify.app</a>
            </div>
            <div>
                <img src={elapak} alt="" />
                <a href="https://restucode2.netlify.app/">restucode2.netlify.app</a>

            </div>


        </div>
    );
}

export default Project;
<<<<<<< HEAD
import React from "react";
// import logo from '../../assets/images/logo.svg';
// import forwardIcon from '../../assets/images/serviceIcons/forwardicon.png'
import './SkillsWeHave.css';

// EVEN ICONS
import trainingIcon from '../../assets/images/professional_and_ technical_skill Icons/icons8-training-filled-50.png';

import multiChannelIcon from '../../assets/images/professional_and_ technical_skill Icons/icons8-multichannel-filled-50.png';

import brainStormIcon from '../../assets/images/professional_and_ technical_skill Icons/icons8-brainstorm-skill-filled-50.png';


import robotIcon from '../../assets/images/professional_and_ technical_skill Icons/icons8-robot-filled-50.png';

// EVEN ICONS ENDS HERE.


//ODD ICONS BEGINS HERE.

import reactIcon
    from '../../assets/images/professional_and_ technical_skill Icons/iconReactNative.png';

import androidSkillIcon
    from '../../assets/images/professional_and_ technical_skill Icons/iconAndroid.png';

import cloudSkillIcon
    from '../../assets/images/professional_and_ technical_skill Icons/iconCloud.png';

import dataBaseSkillIcon
    from '../../assets/images/professional_and_ technical_skill Icons/icons8-database-view-filled-50.png';

// import App from "../appArefin/App";


const AllSkills = [
    {
        id: 0,
        Heading:'Technical and Business Requirement Analysis',
        type:'Professional',
        skillLevel:10,
        icon: trainingIcon

    },
    {
        id: 1,
        skillName:'React',
        type:'Technical',
        skillLevel:20,
        icon: reactIcon
    },
    {
        id: 2,
        Heading:'Team Collaboration',
        type:'Professional',
        skillLevel:30,
        icon: multiChannelIcon
    },

    {
        id: 3,
        skillName:'Android',
        type:'Technical',
        skillLevel:40,
        icon:androidSkillIcon
    },

    {
        id: 4,
        Heading:'brainStormIcon',
        type:'Professional',
        skillLevel:50,
        icon: brainStormIcon
    },

    {
        id: 5,
        skillName:'Cloud Engineering',
        type:'Technical',
        skillLevel:60,
        icon:cloudSkillIcon
    },
    {
        id: 6,
        Heading:'Familiarity with all latest tools',
        type:'Professional',
        skillLevel:70,
        icon: robotIcon
    },

    {
        id: 7,
        skillName:'Database',
        type:'Technical',
        skillLevel:80,
        icon:dataBaseSkillIcon
    },



];
// const ourSkills = [];

// const A= (<h1>Hello</h1>);

let evenItems = []; // empty array initialize. 0 even item so evenItems
// are positioned
// in the first/ most left
let oddItems =  [];

class SkillsWeHave extends React.Component {


    render() {


        AllSkills.map((oneSkill, index) => {

                // //console.log('index222:',index);
                // if even

                if (index % 2 === 0) {

                    evenItems[Math.round(index / 2)] = (
                        <span
                            key={oneSkill.id}
                            id={oneSkill.id}
                            className="oneEvenSkillsWeHave__left--span"
                        >

                                <div className="oneSkill__outer--div"

                                >

                            <img className="oneSkill--img"
                                src={oneSkill.icon}
                                alt="logo"
                            />
                                               <span className="slidecontainer"
                                               >
                                                   <input
                                                       className="slider"
                                                       type="range"
                                                       name="points"
                                                       min="0"
                                                       max="100"
                                                       step={1}
                                                       value={oneSkill.skillLevel}
                                                       disabled
                                                   />

                     </span>
                            </div>
                        </span>
                    );
                } else {
                    // //console.log('index: ',index);
                    oddItems[Math.floor(index / 2)] = (
                        <span
                            key={oneSkill.id}
                            id={oneSkill.id}
                             className="oneOddSkillsWeHave__Right--span"
                            style={{
                            }}
                        >
                            <div className="oneSkill__outer--div"

                            >
                            <img className="oneSkill__odd--img"
                                src={oneSkill.icon}
                                alt="logo"

                            />

                                <span
                                    className="slidecontainer"
                                >
                                    <input
                                        className="slider"
                                        type="range"
                                        name="points"
                                        min="0"
                                        max="100"
                                        step={1}
                                        value={oneSkill.skillLevel}
                                        disabled
                                    />

                       </span>
                            </div>
                        </span>
                    )
                }
            }

        );

        return <div>
            <h1 className="skillsWeHave--h1">
                Skills We Have
            </h1>

            <div style={{
                display: 'flex',
                justifyContent:'space-around'

            }}
            >

    <span className="professionalTechnicalSkill" >

        <p style={{color:'#000000'}}   >
            Professional</p>
    </span>
                <span className="professionalTechnicalSkill" >

        <p style={{color:'#000000',}}
          > Technical

        </p>
        </span>

            </div>

            <div id='parentSkillsWeHave'
                 className="skillsWeHave--parent">
                <div
                    className="skillsWeHave__left__div"
                    style={{
                        marginRight:'12vw',
                    }}
                >{evenItems}
                </div>
                <div className="skillsWeHave__right__div">{oddItems}</div>
            </div>

        </div>;

        // return (<HomeCards/>);

    }
}



=======
import React from "react";
// import logo from '../../assets/images/logo.svg';
// import forwardIcon from '../../assets/images/serviceIcons/forwardicon.png'
import './SkillsWeHave.css';

// EVEN ICONS
import trainingIcon from '../../assets/images/professional_and_ technical_skill Icons/icons8-training-filled-50.png';

import multiChannelIcon from '../../assets/images/professional_and_ technical_skill Icons/icons8-multichannel-filled-50.png';

import brainStormIcon from '../../assets/images/professional_and_ technical_skill Icons/icons8-brainstorm-skill-filled-50.png';


import robotIcon from '../../assets/images/professional_and_ technical_skill Icons/icons8-robot-filled-50.png';

// EVEN ICONS ENDS HERE.


//ODD ICONS BEGINS HERE.

import reactIcon
    from '../../assets/images/professional_and_ technical_skill Icons/iconReactNative.png';

import androidSkillIcon
    from '../../assets/images/professional_and_ technical_skill Icons/iconAndroid.png';

import cloudSkillIcon
    from '../../assets/images/professional_and_ technical_skill Icons/iconCloud.png';

import dataBaseSkillIcon
    from '../../assets/images/professional_and_ technical_skill Icons/icons8-database-view-filled-50.png';

// import App from "../appArefin/App";


const AllSkills = [
    {
        id: 0,
        Heading:'Technical and Business Requirement Analysis',
        type:'Professional',
        skillLevel:10,
        icon: trainingIcon

    },
    {
        id: 1,
        skillName:'React',
        type:'Technical',
        skillLevel:20,
        icon: reactIcon
    },
    {
        id: 2,
        Heading:'Team Collaboration',
        type:'Professional',
        skillLevel:30,
        icon: multiChannelIcon
    },

    {
        id: 3,
        skillName:'Android',
        type:'Technical',
        skillLevel:40,
        icon:androidSkillIcon
    },

    {
        id: 4,
        Heading:'brainStormIcon',
        type:'Professional',
        skillLevel:50,
        icon: brainStormIcon
    },

    {
        id: 5,
        skillName:'Cloud Engineering',
        type:'Technical',
        skillLevel:60,
        icon:cloudSkillIcon
    },
    {
        id: 6,
        Heading:'Familiarity with all latest tools',
        type:'Professional',
        skillLevel:70,
        icon: robotIcon
    },

    {
        id: 7,
        skillName:'Database',
        type:'Technical',
        skillLevel:80,
        icon:dataBaseSkillIcon
    },



];
// const ourSkills = [];

// const A= (<h1>Hello</h1>);

let evenItems = []; // empty array initialize. 0 even item so evenItems
// are positioned
// in the first/ most left
let oddItems =  [];

class SkillsWeHave extends React.Component {


    render() {


        AllSkills.map((oneSkill, index) => {

                // //console.log('index222:',index);
                // if even

                if (index % 2 === 0) {

                    evenItems[Math.round(index / 2)] = (
                        <span
                            key={oneSkill.id}
                            id={oneSkill.id}
                            className="oneEvenSkillsWeHave__left--span"
                        >

                                <div className="oneSkill__outer--div"

                                >

                            <img className="oneSkill--img"
                                src={oneSkill.icon}
                                alt="logo"
                            />
                                               <span className="slidecontainer"
                                               >
                                                   <input
                                                       className="slider"
                                                       type="range"
                                                       name="points"
                                                       min="0"
                                                       max="100"
                                                       step={1}
                                                       value={oneSkill.skillLevel}
                                                       disabled
                                                   />

                     </span>
                            </div>
                        </span>
                    );
                } else {
                    // //console.log('index: ',index);
                    oddItems[Math.floor(index / 2)] = (
                        <span
                            key={oneSkill.id}
                            id={oneSkill.id}
                             className="oneOddSkillsWeHave__Right--span"
                            style={{
                            }}
                        >
                            <div className="oneSkill__outer--div"

                            >
                            <img className="oneSkill__odd--img"
                                src={oneSkill.icon}
                                alt="logo"

                            />

                                <span
                                    className="slidecontainer"
                                >
                                    <input
                                        className="slider"
                                        type="range"
                                        name="points"
                                        min="0"
                                        max="100"
                                        step={1}
                                        value={oneSkill.skillLevel}
                                        disabled
                                    />

                       </span>
                            </div>
                        </span>
                    )
                }
            }

        );

        return <div>
            <h1 className="skillsWeHave--h1">
                Skills We Have
            </h1>

            <div style={{
                display: 'flex',
                justifyContent:'space-around'

            }}
            >

    <span className="professionalTechnicalSkill" >

        <p style={{color:'#000000'}}   >
            Professional</p>
    </span>
                <span className="professionalTechnicalSkill" >

        <p style={{color:'#000000',}}
          > Technical

        </p>
        </span>

            </div>

            <div id='parentSkillsWeHave'
                 className="skillsWeHave--parent">
                <div
                    className="skillsWeHave__left__div"
                    style={{
                        marginRight:'12vw',
                    }}
                >{evenItems}
                </div>
                <div className="skillsWeHave__right__div">{oddItems}</div>
            </div>

        </div>;

        // return (<HomeCards/>);

    }
}



>>>>>>> d998f109d5068a3c8af387fdb474faa245912f2d
export default SkillsWeHave;

import React, { Component } from 'react';
import './OurWorkProcessSliderMobile.css';

import WorkProcessCardMobile from './WorkProcessCardMobile';
// import WorkProcessCard2 from './workProcessCard2/WorkProcessCard2WEB';
import workingProcessSliderData from './data/workingProcessSliderData'
import WorkProcessCard2Mobile from "./workProcessCard2/WorkProcessCard2Mobile";

// let index2=0;
class WorkProcessHorizontalScrollerMobile extends Component {

    constructor(props){
        super(props);
        this.state = {
            processes: workingProcessSliderData.processes, //ALL PROCESS ARE LOADED FROM AN ARRAY OF OBJ.

            // {object type is "processes."}
            currentProcess: workingProcessSliderData.processes[0]
        }
    }


    newProcess =(index2) => {

        //console.log('index/index2: ',index2);

        //console.log("hurray arefin");

        const newIndex =  index2;
        // this.state.currentProcess.index+1; // something i don't know.
        // this.setState({
        //     currentProcess: workingProcessSliderData.processes[newIndex]
        // });

        // const newIndex = this.state.currentProcess.index+1; // something i don't know.
        this.setState({
            currentProcess: workingProcessSliderData.processes[newIndex]
        });
    };

    // nextProperty = () => {
    //     const newIndex = this.state.currentProcess.index+1; // something i don't know.
    //     this.setState({
    //         currentProcess: workingProcessSliderData.processes[newIndex]
    //     })
    // };


    // prevProperty = () => {
    //     const newIndex = this.state.currentProcess.index-1;
    //     this.setState({
    //         currentProcess: workingProcessSliderData.processes[newIndex]
    //     })
    // };

    render() {


        const {processes, currentProcess} = this.state; // js assignment or something check redux document.// or react redux.

        return (
            // everything in the team contained by this div
            <div className="App--WorkProcessHorizontalScrollarMobile"
            >

                <div className ="workProcess_colMobile">

                    {/*to provide gradient fog*/}

                    {/*".cards-slider" will align everything in the middle of the page.*/}
                    <div className ={`workProcess_cards-sliderMobile active-slideMobile-${currentProcess.index}`}>

                        <div className ="workProcess_cards-slider-wrapperMobile"
                            // style= {{
                            // ".cards-slider-wrapper" will stretch all the cards next to each other.
                            // once we render all 28 or more processes. to create a container and using flex box to stretch them.

                            // 'transform': `translateX(-${currentProcess.index *(100/ processes.length)}%)` --> "WITHOUT TRANSFORM GRACEFULLY".
                            // SAME AS BELOW.

                            // 'transform': `translateX(-${currentProcess.index*(100/processes.length)}%)`
                            //processes.length is 0 to 29 thus 30.
                            // }}
                        >
                            {
                                // js map() function -->

                                processes.map(
                                    currentProcess =>
                                        <WorkProcessCardMobile
                                            key = {currentProcess._id}
                                            currentProcess = {currentProcess}
                                            currentIndex = {this.state.currentProcess.index}
                                            newItemSelected = {this.newProcess}
                                        />
                                )
                            }
                        </div>



                    </div>
                </div>

                {/*2nd card that shows employee details*/}

                {
                    // js map() function -->


                    <WorkProcessCard2Mobile
                        key={currentProcess._id}
                        currentProcess={currentProcess}
                    />

                }

            </div>
        );
    }
}

export default WorkProcessHorizontalScrollerMobile;


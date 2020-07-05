import React, {Component} from 'react';
import OneThoughtDiv from "./OneThoughtDiv";
import OneBubbleATThoughts from "./OneBubbleATThoughts";
// import Card from "../ourGlobarPartners/PartnerSlider";
import ThoughtData from "./ThoughtData";
// import data from "../theTeam/data/data";
// import './TheTeamHorizontalScroller.css';
import  "./thoughts.css";



let newIndex = 0;
export default class OurPartnersThought extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allThoughts: ThoughtData,
            // data.properties IS AN  array of objects of type
            intialIndex: newIndex,
            mobile: false,
            oneThought: ThoughtData[0],
            // testNumbers:[0,1,2,3,4,5]
        };
        this.incrementIndex = this.incrementIndex.bind(this);
        this.decrementIndex = this.decrementIndex.bind(this);
    }

    componentWillMount() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            this.setState({
                mobile: true
            })
        }
    }

    componentDidMount() {
        let status = this
        window.addEventListener('resize', function () {
            if(window.innerWidth < 768) {
                status.setState({
                    mobile: true
                })
            } else {
                status.setState({
                    mobile: false
                })
            }
        })
    }

    incrementIndex() {
        if(this.state.index + 1 === this.state.blogList.length) {
            this.setState({
                index: 0,
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    decrementIndex() {
        if(this.state.index === 0) {
            this.setState({
                index: this.state.blogList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    newBlogSelected = (currentIndex) => {
        newIndex = currentIndex;
        this.setState({
            oneThought: this.state.allThoughts[newIndex],
        });
    };

    render() {
        const {
            allThoughts,
            oneThought} = this.state;

        // js assignment or something check redux document.// or react redux.
        return (
            <div className="row"></div>
            /*
                    <div className="row" id={'blog'}>
                        <div className="blogDiv">
                         <p className="blogFont">What They Think Of Us</p>
                        <hr className="hrTag"/>

                    {
                      
                        <OneThoughtDiv
                            isMobile={this.state.mobile}
                            key={this.state.allThoughts[newIndex].index}
                            oneThought={oneThought}
                        />
                     
                    }


                    <div className="row ">


                        <div className="col-lg-3 col-lg-offset-5 col-md-7 col-md-offset-3
                         col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3 pageDiv">
                            
                            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-14">

                              
                                {
                                    this.state.allThoughts.map((oneThought, index) =>
                                        <OneBubbleATThoughts
                                            currentIndex={index}
                                            key={index.toString()}
                                            newThought={this.newBlogSelected}
                                            isActive = {index===newIndex}
                                        />
                                    )
                                }</div>
                        </div>

                    </div>


                </div>
            </div>*/
        );
    }
}
import React from "react";

// import './OurGlobarPartners.css';
import './partnerSlider.css';
import Card from './BrandCard';

import SliderData from './SliderData';
import OneBubble from "./OneBubblePartner";


// const images = [companyGoodReaders,
//     companyTesla,
//     companyLamborghini,
//     companySlack,
// ];



let newIndex=4;
let brandsLength  = SliderData.length;

class PartnerSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allBrands: SliderData,
            oneBrand: SliderData[newIndex],

        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick=()=> {
        if(newIndex===SliderData.length-1){

            newIndex=0;
            this.setState({
                oneBrand: SliderData[newIndex]
            });
        }
        else if(newIndex >=SliderData.length){

            newIndex=0;
            this.setState({
                oneBrand: SliderData[newIndex]
            });
        }

        newIndex=newIndex+1;
        this.setState({
            oneBrand: SliderData[newIndex]
        });
    }

    newBrand = (currentIndex) => {
        newIndex = currentIndex;
        this.setState({
            oneBrand: this.state.allBrands[newIndex],
        });
    };

    nextBrand = () => {

        if(newIndex===SliderData.length-1){

            newIndex=0;
            this.setState({
                oneBrand: SliderData[newIndex]
            });
        }
        else if(newIndex >=SliderData.length){

            newIndex=0;
            this.setState({
                oneBrand: SliderData[newIndex]
            });
        }
        else {
            console.log('next button pressed');
            newIndex = newIndex + 1;
            this.setState({
                oneBrand: this.state.allBrands[newIndex],
            })
        }
    };

    handleClickForNewBrand = (index) =>{

        alert("at handleClickForNewBrand");
        newIndex = index;
        this.setState({
            oneBrand: this.state.allBrands[newIndex],
        });

    };

    prevBrand = () => {
        if (newIndex <= 0) {

            // newIndex = this.state.firstIndex;
            this.setState({
                oneBrand:SliderData[0]
            });
        }
        else {
            newIndex = newIndex - 1;
            // this.state.oneEmployee.index - 1;
            this.setState({
                oneBrand:SliderData[newIndex],


            });
        }
    };

    render() {
        const {allBrands, oneBrand} = this.state; // js assignment or something check redux document.// or react redux.
        return (

            <div
                style={{
                    backgroundColor: '#F7F7F7',
                    // visibility: 'hidden',
                }}
            >

                <div style={{

                    backgroundColor: '#000000',
                    height: '44px',
                    textAlign: 'center',
                }}
                >
                    <p
                        style={{
                            color:'#FFFFFF',
                            verticalAlign: 'middle',
                            lineHeight: '40px',
                        }}>
                        Our Global Partners
                    </p>
                </div>


                <div className="globalPartners" style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width:'100%',
                    height:'200px',

                }}
                >

                    <div className ={`cards-slider active-slide-${oneBrand.index}`}>
                        <div className ="cards-slider-wrapper" style= {{
                            'transform': `translateX(-${oneBrand.index*(100/allBrands.length)}%)`
                        }}
                        >
                            {
                                allBrands.map((oneBrand, index) =>
                                    <Card
                                        key={index.toString()}
                                        brand={oneBrand}
                                    />
                                )
                            }
                        </div>
                    </div>

                    <div className="bubbles">
                        {
                        allBrands.map((oneBrand, index) =>
                            <OneBubble
                                currentIndex={index}
                                key={index.toString()}
                                newBrandSelected={this.newBrand}
                                isActive = {index===newIndex}
                            />
                            )
                        }
                    </div>
                    <div className="prev"  onClick={this.nextBrand}
                    >
                        {/*<i className="fab fa-500px"></i>*/}
                    </div>
                    <div className="next"   onClick={this.prevBrand}
                    >
                    </div>
                </div>



            </div>

        );

    }
}


export default PartnerSlider;




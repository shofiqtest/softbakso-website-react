import React from "react";

import './OurGlobarPartners.css';

import companyGoodReaders from "../../assets/images/partners_Page/companygoodreaders.png";
import companyTesla       from "../../assets/images/partners_Page/companytesla.png";
import companyLamborghini from "../../assets/images/partners_Page/companylamborghini.png";
import companySlack       from "../../assets/images/partners_Page/companySlack.png";


import HowWeWork from '../howWeWork/HowWeWork';
import PartnerSlider from "./PartnerSlider";



const images = [companyGoodReaders,
    companyTesla,
    companyLamborghini,
    companySlack,
];

const allImages = [...images,...images,...images,...images,...images];

// export default class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between' }} />
//                 <Slider
//                     options={{
//                         autoPlay: 4000,
//                         pauseAutoPlayOnHover: true,
//                         wrapAround: true,
//                         fullscreen: true,
//                         adaptiveHeight: true,
//                     }}
//                 >
//                     {images.map((image, index) => (
//                         <div style={{ width: '80%', height: '400px', margin: '0 0.5em' }} key={index}>
//                             <img src={image} alt="" />
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         );
//     }
// }

// ---
class OurGlobarPartners extends React.Component {
    render() {


        return (<div>



            {/*IMPORTANT GLOBAL PARTNERS --WORKS BUT HIDDEN FOR NOW*/}
               {/*<PartnerSlider*/}

               {/*/>*/}


            <HowWeWork/>



        </div>);

        // return (<HomeCards/>);

    }
}


export default OurGlobarPartners;
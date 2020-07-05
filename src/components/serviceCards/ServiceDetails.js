import React, { Component } from "react";

import playStore from "../../assets/images/serviceIcons/playStore.png";
import appleStore from "../../assets/images/serviceIcons/appleStore.png";
import share from "../../assets/images/serviceIcons/share.png";
import download from "../../assets/images/serviceIcons/download.png";
import projectManager from "../../assets/images/serviceIcons/projectManager.png";
import Services from "./DataForServices";

class ServiceDetails extends Component {
  // actionLink={this.projectManager}
  // share={this._shareOption}
  // downloadPDF={this._downloadPDF}
  // goToAppStore={this._onAppStore}
  // goToPlayStore={this._onPlayStore}
  // getQuotation={this._getQuotation}

  // projectManager=()=>{
  //
  //
  // }

  // backgroundImage: url("../images/serviceIcons/serviceModalBack.png");
  render() {
    let oneService_id = this.props.id;
    // //console.log("oneService_id in ServiceDetailsPage: ",oneService_id);

    return (
      <div
        key={Services[oneService_id].Heading}
        className="modal-dialog serviceModal"
      >
        <div className="modal-content serviceModalCon">
          <div className="modal-header serviceHeader">
            <button className="btn btn-primary modal-btn" data-dismiss="modal" style={{float:"right"}}><i class="fas fa-times"></i></button>
            <img
              className="serviceHeaderIcon"
              src={Services[oneService_id].icon}
              alt="send"
            />

            <br />
            <p className="serviceHeaderText">
              {Services[oneService_id].Heading}
            </p>
          </div>
          <div
            className="modal-body backImage "
            style={{
              backgroundColor: Services[oneService_id].backgroundColor,
              height: "62vh !important",
              width: "100%",
              textAlign: "left !important",
              backgroundImage: `url(${Services[oneService_id].modalImage})`,
              backgroundRepeat: "no-repeat !important",
              backgroundSize: "cover !important"
            }}
          >
            <div className="row">
              <div className="col-lg-6 col-lg-offset-1">
                <h2 className="serviceBodyHeader">
                  {Services[oneService_id].Heading}
                </h2>

                {/*<p className="serviceModalText" >{modaldescriptionText}</p>*/}

                {/*<p*/}
                {/*style={{*/}
                {/*textAlign:'left'*/}

                {/*}}*/}
                {/*dangerouslySetInnerHTML={{__html: detailedProcess}}*/}
                {/*>*/}
                {/*</p>*/}
                <p
                  className="serviceModalText"
                  style={{ color: Services[oneService_id].textColor }}
                  dangerouslySetInnerHTML={{
                    __html: Services[oneService_id].DescriptionText
                  }}
                >
                  {/*{Services[oneService_id].DescriptionText}*/}
                </p>
                {/* <button onClick={() => this.props.getQuotation()} type="submit" className="btn serviceModalBtn">Get Quotation</button> */}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="serviceFooter">
              <div className="servFtrMrgn"></div>
              <p className="serviceFtrTxt">Find Us</p>
              <div className="ftrlft">
                <img
                  // data-dismiss="modal"

                  onClick={() => this.props.goToPlayStore()}
                  className="serviceHeaderLeftIcon"
                  src={playStore}
                  alt="send"
                />
                <img
                  onClick={() => this.props.goToAppStore()}
                  className="serviceHeaderLeftIcon"
                  src={appleStore}
                  alt="send"
                />
              </div>
              <div className="ftrright">
                <img
                  onClick={() => this.props.goToProjectManageer()}
                  className="serviceHeaderRightIcon"
                  src={projectManager}
                  alt="send"
                />
                <img
                  onClick={() => this.props.downloadPDF()}
                  className="serviceHeaderRightIcon"
                  src={download}
                  alt="send"
                />
                <img
                  onClick={() => this.props.share()}
                  className="serviceHeaderRightIcon"
                  src={share}
                  alt="send"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceDetails;

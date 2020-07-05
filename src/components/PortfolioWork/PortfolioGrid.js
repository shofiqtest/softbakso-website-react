import React, { Component } from "react";

export default class PortfolioGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { mobile: false };
    }
    render() {
        let gridItem = this.props.item.items
        return(
            <div className="row" style={{ marginTop: '30px', marginBottom: '40px'}}>
                {
                    gridItem.map((item,index) => {
                        return(
                            <div className="gridBlock" key={index}>
                                <a href={item.httpUrl} target="_blank">
                                    <img className="gridImage" src={require("../../assets/images/portfolio/" + item.imageUrl)} alt=""/>
                                    <div className="title">{item.description}</div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
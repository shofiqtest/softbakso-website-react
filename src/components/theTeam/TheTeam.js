import React from "react";
import "./TheTeamHorizontalScrollerWeb.css";
import TheTeamHorizontalScrollerWeb from "./TheTeamHorizontalScrollerWeb";
import TheTeamHorizontalScrollerMobile from "./TheTeamHorizontalScrollerMobile";
// import MediaQuery from 'react-responsive'
import MediaQuery from "react-responsive";
// import { useMediaQuery } from 'react-responsive'

// import MediaQuery from 'react-responsive'

class TheTeam extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={750} device={{ deviceWidth: 1600 }}>
          <div>
            <p className="theTeam--h1">The changemakers</p>
            <div
              style={{
                width: "8%",
                margin: "auto"
              }}
            >
              <hr className="theTeamWeb--hr" />
            </div>
            <TheTeamHorizontalScrollerWeb />
          </div>
        </MediaQuery>

        <MediaQuery
          maxDeviceWidth={750}
          device={{ deviceWidth: 750 }}

          // for mobile only
        >
          <div
            style={
              {
                // marginTop:'10%'
              }
            }
          >
            <div
              style={{
                width: "90%",
                margin: "auto",
                // display:'flex',
                display: "content"
              }}
            >
              <h1
                className="theTeam--h1"
                style={{
                  textAlign: "center"
                }}
              >
                The changemakers
              </h1>
              <hr className="Team-Hr-Mobile" />
            </div>

            <TheTeamHorizontalScrollerMobile />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default TheTeam;

import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import ListExamples from "../Examples/ListExamples";
import { connect } from "react-redux";
import TabbedCard from "../../components/TabbedCard/CardContent";
import "./style.css";


// root component
class Home extends Component {
  render() {
    // TODO Remove later
    console.log(`============> examples ${JSON.stringify(this.props.examples)}`)
    return (
      <div id="app">
        {/* <div className="wrap-sidebar">
          <Sidebar />
        </div> */}
        <main className="main-content">
          {/* <ListExamples examples={[{},{}]}/> */}
          <TabbedCard />         
        </main>     
      </div>
    );
  }
}

Home.propTypes = {
  // logoutUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  examples: state.examples.examples
});

export default connect(
  mapStateToProps
  // { logoutUser }
)(Home);

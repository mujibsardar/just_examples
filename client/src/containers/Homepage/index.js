import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import ListExamples from "../Examples/ListExamples";
import "./style.css";

// root component
class Home extends Component {
  render() {
    return (
      <div id="app">
        <div className="wrap-sidebar">
          <Sidebar />
        </div>
        <main className="main-content">
          <ListExamples examples={[{},{}]}/>
        </main>
      </div>
    );
  }
}

// Dashboard.propTypes = {
  // logoutUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired
// };

export default Home;

// const mapStateToProps = state => ({
//   examples: state.examples
// });
//
// export default connect(
//   mapStateToProps,
//   { logoutUser }
// )(Home);

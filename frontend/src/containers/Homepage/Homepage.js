import React from "react";
import AdCards from "../../components/Ads/AdCards";
import CodeHighlighter from "./CodeHighlighter";
import Chips from "../../components/Chips/Chips";
import "./style.css";
const axios = require('axios');

// Sidebar
const Sidebar = (props) => (
  <div className="sidebar">      
      <div className="sidebar__ads">
      <AdCards />
      </div>       
  </div>
);

// search-examples
const Repositiories = (props) => (
  <div className="search-examples">
    <h2 className="search-title">Search Title: Example</h2>
    { props.repos != null ?
      <ul>
        { 
          props.repos.map( (repo) => ( 
            <li className="repo" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <CodeHighlighter />
<Chips />

              <p>
                <a href={repo.html_url} target="_blank">
                  comments
                </a>
              </p>
            </li> 
          ) )
        }
      </ul>
      :
      <p>Loading...</p>
    }
  </div>
);

/**
 * ROOT COMPONENT
 */
class Landing extends React.Component {
  state = {
    appTitle: 'Monthly Sponsors',
    apiUrl: 'https://api.github.com/',
    user: null,
    repos: null
  }

  componentDidMount(){
    const ctx = this; 
    
    // Initial User
    axios.get(this.state.apiUrl + 'users/mconour') 
    .then(function (response) {
      ctx.setState({
        user: response.data
      })
      console.log(ctx.state.user);
      
      // search for user's repos
      axios.get(ctx.state.user.repos_url) 
        .then(function (res) {
          
          //console.log(res.data);
          ctx.setState({
            repos: res.data 
          });
        })
        .catch(function (error) {
          console.log(error);
        });  
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return (
      <div id="app">
        <div className="wrap-sidebar">
          <Sidebar 
            appTitle={this.state.appTitle} 
            user={this.state.user}
          />
        </div>
        <main className="main-content">
          <Repositiories repos={this.state.repos} />          
        </main>
      </div>
    ) 
  }
}

export default Landing;
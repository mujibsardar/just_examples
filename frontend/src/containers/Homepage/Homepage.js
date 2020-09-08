import React from "react";
import AdCards from "../../components/Ads/AdCards";
import CodeHighlighter from "./CodeHighlighter";
import Chips from "../../components/Chips/Chips";
import Author from "../../components/Author/Author";
import "./style.css";
const axios = require('axios');

// Sidebar
const Sidebar = (props) => (
  <div className="sidebar">      
      <div className="ads">
      <AdCards />
      </div>       
  </div>
);

// search-examples
const Cards = (props) => (
  
  <div className="search-examples">
    <h2 className="search-title">Search Title: Example</h2>
    { props.repos != null ?
      <ul>
        { 
          props.repos.map( (repo) => ( 
            <li className="repo" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <Author />              
              <CodeHighlighter /> 
              <Chips />             
            </li> 
          ) )
        }
      </ul>
      :
      <p>Loading...</p>
    }
  </div>
 
);


class Landing extends React.Component {
  state = {    
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
          <Sidebar />
        </div>
        <main className="main-content">
          <Cards repos={this.state.repos} />          
        </main>        
      </div>
    ) 
  }
}

export default Landing;
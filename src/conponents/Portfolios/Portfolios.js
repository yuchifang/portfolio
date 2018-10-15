import React, { Component } from 'react'
import axios from 'axios';
//import Portfolio from '../Portfolio/Portfolio';
import Spinner from './Spinner';
import './Portfolios.scss';

class Portfolios extends Component {
  constructor(){
    super();
    this.state={
      resume:[ ],
    }
  }
  componentDidMount(){
    axios.get("https://5b9e5e91133f660014c91973.mockapi.io/api/v1/resume")
    .then(res=>{this.setState({
      resume:res.data})
      console.log(this.state)
      
    })
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div id="portfolio">
        <h2 className="portfolio_heading">PORTFOLIO </h2>
        {this.state.resume.map((resume)=>{
          if(resume===undefined||resume.length===0){ 
            return <Spinner/>
          }else{
            return (
              <div key={resume.id} 
                   className="portfolio">
                <h1 className="portfolio_title">
                {resume.name}</h1>
                <div>
                  <img className="img"
                  src={resume.img} 
                  alt={resume.name}/>
                  
                  <div className="link">
                    <p>
                      github:<a 
                                className="linka" 
                                href={resume.address}
                                target="_new">
                                {resume.address}</a>
                    </p>
                  </div>
                  <div className="intro">
                    <p>
                      {resume.intro}
                    </p>
                  </div>

                </div>
              </div>
            );
          }
          })
        }
        
      </div>
    )
  }
}
export default Portfolios;

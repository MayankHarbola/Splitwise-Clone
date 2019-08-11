import React from 'react';
import '../styles/landing.css'
import  Header  from './Header';
export const Landing = ()=>{
    return (
        <div className = "landing ">
           <Header/>

            
            <main >
                <div className = "landing-heading">

                 <img align="middle" className = "landing-logo" src={require('../images/logo.png')} alt=""/>   
                <h1 className = "landing-header">Split expenses with friends.</h1>
                <p className = "landing-desc"><strong>Share</strong> bills and IOUs. <strong>Make sure</strong> everyone gets paid back. <strong>Totally free</strong> for web</p>
                <img className = "landing-big" src={require('../images/dsiplay.png')} alt=""/>   
                </div>
                
                <div className = "landing-feature">
                 <div>   
                <img className = "landing-img" src={require('../images/splitwise.png')} alt=""/>   
                </div>
                <div className = "landing-content">
                <h1  >Splitting expenses has </h1><h1>never been easier .</h1> 
                <ul>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Share bills and IOUs,</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Make sure everyone gets paid back</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Totally Free for web,iPhone,and Android.</li>
                </ul>

                <a href="http://localhost:3000/signup">   <button className = "landing-button">  Get Started</button></a>
                </div>
                </div> 
            </main>
        </div>
    )
}
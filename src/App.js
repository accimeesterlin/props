import React from 'react';

import Navbar  from './Navbar';
import Footer from './Footer';



// Class, Smart, Statefull, or Container Component
class App extends React.Component{

  constructor(){
    super();

    this.state = {
      username:'accimeesterlin',
      age:5,
      status:'Full Stack Developer',
      courses:['Georgia Tech Full Stack Development', 'Free Code Camp', 'Udemy' ]
    }
  }


  getData(){
    console.log("Hello World!!!");
  }


  render(){
    return(
      <div> 
        <h1>Hello World!!!</h1>

        <Navbar 
            name = {this.state.username} 
            age = {this.state.age} 
            status = 'Developer' 
            clickMe = {this.getData} />

        <Footer text = 'I am the footer and used in the App'/>
      </div>
    );
  }
}

export default App;
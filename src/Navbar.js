import React from 'react';



// There are 2 ways
// Ways varies based on the component
// Functional, or Container

// Functional, Dumb, Stateless, or Presenational Component
function Navbar(props) {
  

  // NO Function
  // No states


  return(
    <div>
      <p>My name is {props.name}</p>

      <p>I am {props.age} years old</p>

      <p>I am a {props.status} at AT&T</p>

      <button onClick = { props.clickMe }> Click me!!! </button>
    </div>
  );
}


export default Navbar; // Only default export
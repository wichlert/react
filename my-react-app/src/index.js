import React from 'react';

import ReactDOM from 'react-dom/client';
import Booking from './booking_class.js';


//import ReactDOM from 'react-dom/client';

//const myFirstElement = <h1>Hello React!</h1>

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myFirstElement);

/*
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello Akeera</p>);

<body>
  <div id="root"></div>
</body>
U*/

//const myElement = <h1>I Love JSX!</h1>;
//const myElement = React.createElement('h1', {}, 'I do not use JSX!');
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myElement);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booking />);
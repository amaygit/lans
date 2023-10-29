// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./Button.css"
// const Button = () => {
//   return (
//     <div className="button-container">
//           <Link to={""}>
//             <button className="custom-button">Fill Here</button>
//           </Link>
//         </div>
//   )
// }

// export default Button

import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css";

const Button = () => {
  return (
    <div className="button-container">
      <div className="left-button">
        <Link to={"https://docs.google.com/forms/d/e/1FAIpQLSdOjEVZOZfBLBfwKtNmo2U-9Anu_3SAodBnyB989eKa8Wnwuw/viewform"}>
          <button className="custom-button">Internship</button>
        </Link>
      </div>
      <div className="right-button">
        <Link to={"https://docs.google.com/forms/d/e/1FAIpQLSd9uSx0OyCHeHg7vS3PKXdHooWgYKdaSs3IA9H_l8nltQHyYQ/viewform"}>
          <button className="custom-button">Final Year Project</button>
        </Link>
      </div>
    </div>
  );
}

export default Button;

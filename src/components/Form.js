// import "./FormStyles.css"
// import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser';
// const Form = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('service_a1dui12', 'template_saqst0t', form.current, 'PCNr5ljIuRdR9KTh7')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     };
//   return (
//     <div className="form">
//         <form ref={form} onSubmit={sendEmail}>
//             <label>
//                 Your Name
//             </label>
//             <input type="text" name="user_name"></input>

//             <label>
//                 Email
//             </label>
//             <input type="email" name="user_email" ></input>

//             <label>
//                 Subject
//             </label>
//             <input type="text" name="user_subject"></input>

//             <label>
//                 Message
//             </label>
//             <textarea rows="6" name="message"  placeholder="Type Your Message Here!" />
//             {/* <button className="btn">Submit</button> */}
//             <input type="submit" value="Send" className="btn" />
//         </form>
//     </div>
//   )
// }

// export default Form
import "./FormStyles.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a1dui12', 'template_saqst0t', form.current, 'PCNr5ljIuRdR9KTh7')
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true); // Set the submission status to true on success
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="form">
            {isSubmitted ? (
                <div className="success-message">
                    Your form has been successfully submitted!
                </div>
            ) : (
                <form ref={form} onSubmit={sendEmail}>
                    <label>
                        Your Name
                    </label>
                    <input type="text" name="user_name"></input>

                    <label>
                        Email
                    </label>
                    <input type="email" name="user_email" ></input>

                    <label>
                        Subject
                    </label>
                    <input type="text" name="user_subject"></input>

                    <label>
                        Message
                    </label>
                    <textarea rows="6" name="message" placeholder="Type Your Message Here!" />
                    
                    <input type="submit" value="Send" className="btn" />
                </form>
            )}
        </div>
    );
}

export default Form;

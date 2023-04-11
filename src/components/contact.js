const react = require('react');
const reactDom = require('react-dom');

//contact details
const Contact = ()=>{
    return (
        <div>
            <h1>Reach out to me:</h1>
            <div className="Contacts">
                <label>E-mail  :</label>
                <a href="mailto:yourmail@mail.com">yourmail@gmail.com</a>
        </div>
        </div>
    )
}

export default Contact;
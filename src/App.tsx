import './App.scss';
import emailjs from 'emailjs-com';

function App() {
  function sendEmail(e: any) {
    e.preventDefault();
    
    emailjs.sendForm('service_hq6uvkj', 'template_k1vma0d', e.target, '5e-7Dcm7NKWEn8B1x')
      .then((result: any) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error: any) => {
          console.log(error.text);
      });
  }

  return (
    <div className="App">
      <form className="emailForm" onSubmit={sendEmail}>
        <input className="from_name" name="from_name" type="text" placeholder='Name' />
        <input className="phone" name="phone" type="phone" placeholder='Phone Number' />
        <input className="from_email" name="from_email" type="email" placeholder='Email' />
        <input className="zip" name="zip" type="text" placeholder='Zip Code' />
        <input className="text" name="message" placeholder='message' />
        <button className="submitBtn">Get Help Today</button>
      </form>
    </div>
  );
}

export default App;

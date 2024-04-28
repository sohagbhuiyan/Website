import React from "react";
import "./Contact.css";
import cp from "../../assets/s.webp";
import mail from "../../assets/m.jpg";
import loc from "../../assets/pp.jpg";
import call from "../../assets/p.png";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    console.log(event.target.name.value)
    formData.append("access_key", "01c9c44e-f4c8-4183-9e17-8e521f1e5adc");
    formData.append("Name", event.target.name.value);
    formData.append("Email", event.target.email.value);
    formData.append("Message",event.target.message.value);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Your messasge is sent!")
    }
  };
  return (
    <section id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={cp} alt="" className="cpImg" />
      </div>
      <div className="contactSection">
        <div className="contactLeft">
          <h1>Let's talk</h1>
          <p>
            I'm Sohag bhuiyan! I'm available to take new projects, <br /> so
            feel free to contact with me, Thank You!{" "}
          </p>
        <div className="contactDetails">
            <div className="contactDetail">
            <img src={mail} alt="" className="Img" /> <p>smsohag171@gmail.com</p>
            </div>
            <div className="contactDetail">
            <img src={loc} alt="" className="Img" /> <p>Nikunjo, Dhaka</p>
            </div>
            <div className="contactDetail">
            <img src={call} alt="" className="Img" /> <p>+88 01787345180</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contactRight">
            <label htmlFor=""> Your Name: </label>
            <input type="text"  name="name" placeholder="Enter your name" />
            <label htmlFor=""> Your Email: </label>
            <input type="text"  name="email" placeholder="Enter your Email" required/>
            <label htmlFor="">Write your message here :</label>
            <textarea type="text"  name="message" placeholder="Write here!" />
            <button   type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import axios from 'axios'
import React, { useState, Component } from 'react'
import {FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap} from 'react-icons/fa'
import shapeOne from '../../assets/shape-1.png';
import './contact.css'


class Contact extends Component {

    // initialize component state w object called form containing name email subject message
    // and binds handleSubmit method to component to ensure that this refers to the component when called
    constructor() {
        super()
    
        this.state = {
            form: {name: '', email: '', subject: '', message: ''}
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // method for handling form submission
    handleSubmit(e){
        e.preventDefault(); // avoid page reload
        
        // make HTTP POST request to sheet best using axios library and sends form state data as request body
        // after request is succesful, log response to console and clear fields by setting form to an empty object
        axios.post('https://sheet.best/api/sheets/ea0d5fb7-edf9-40f0-ae59-45cf6f80a339', this.state.form).then((response) => {
            console.log(response);
            // Clear form fields
            
            this.setState({
                form: {name:'', email:'', subject:'', message:''}
            })

        });
    }

    // method for handling change in form fields
    // updates state form by merging current state w new object containing changed field
    // allows for real time updating of form values as user types
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            form:({...this.state.form, [name]:value})
        })
        
    };

  render() {
      const { form } = this.state;
    return (
        <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Contact Me</h2>
        <p className="section__subtitle">Let's <span> Talk About Ideas</span></p>

        <div className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__card">
                    <span className="contact__card-icon"><FaRegMap /></span>
                    <h3 className="contact__card-title">Address</h3>
                    <p className="contact__card-data">Munoz, Nueva Ecija, Philippines</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon"><FaRegUser /></span>
                    <h3 className="contact__card-title">Freelance</h3>
                    <p className="contact__card-data">Available Right Now</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon"><FaRegEnvelope /></span>
                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-data">jaynevernice.professional@gmail.com</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon"><FaRegAddressBook /></span>
                    <h3 className="contact__card-title">Phone</h3>
                    <p className="contact__card-data">+63 962 - 825 - 3113</p>
                </div>
            </div>

            {/* form elements are controlled components meaning they are connected to the components state and values are updated
            through handleChange method */}
            <form className="contact__form" onSubmit={this.handleSubmit}>
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your Full Name <b>*</b></label>
                        <input type="text" name='name' onChange={this.handleChange} value={form.name} className="contact__form-input" />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                        <input type="email" name='email' onChange={this.handleChange} value={form.email} className="contact__form-input" />
                    </div>

                </div>

                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your Subject <b>*</b></label>
                    <input type="text" name='subject' onChange={this.handleChange} value={form.subject} className="contact__form-input" />
                </div>

                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
                    <textarea className='contact__form-input' name='message' onChange={this.handleChange} value={form.message}></textarea>
                </div>

                <div className="contact__submit">
                    <p>* Accept the terms and conditions</p>
                    <button type='submit' className='btn text-cs'>Send Message</button>
                </div>
            </form>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className='shape' />
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Contact Me</span>
        </div>
        
    </section>
    )
  }
}

export default Contact

// const Contact = () => {

//     const [form, setForm] = useState({name: '', email: '', subject: '', message: ''});
//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setForm({...form, [name]:value}); 
//     };
    
//     const this. = (e) => {
//         e.preventDefault();
//         axios.post('https://sheet.best/api/sheets/ea0d5fb7-edf9-40f0-ae59-45cf6f80a339', form).then((response) => {
//             console.log(response);
//             // Clear form fields
//             setForm({name:'', email:'', subject:'', message:''});
//         });
//     };  

//   return (
    // <section className="contact section" id="contact">
    //     <h2 className="section__title text-cs">Contact Me</h2>
    //     <p className="section__subtitle">Let's <span> Talk About Ideas</span></p>

    //     <div className="contact__container container grid">
    //         <div className="contact__content">
    //             <div className="contact__card">
    //                 <span className="contact__card-icon"><FaRegMap /></span>
    //                 <h3 className="contact__card-title">Address</h3>
    //                 <p className="contact__card-data">Munoz, Nueva Ecija, Philippines</p>
    //             </div>

    //             <div className="contact__card">
    //                 <span className="contact__card-icon"><FaRegUser /></span>
    //                 <h3 className="contact__card-title">Freelance</h3>
    //                 <p className="contact__card-data">Available Right Now</p>
    //             </div>

    //             <div className="contact__card">
    //                 <span className="contact__card-icon"><FaRegEnvelope /></span>
    //                 <h3 className="contact__card-title">Email</h3>
    //                 <p className="contact__card-data">jaynevernice@gmail.com</p>
    //             </div>

    //             <div className="contact__card">
    //                 <span className="contact__card-icon"><FaRegAddressBook /></span>
    //                 <h3 className="contact__card-title">Phone</h3>
    //                 <p className="contact__card-data">+63 947 - 713 - 8922</p>
    //             </div>
    //         </div>

    //         <form className="contact__form" onSubmit={handleSubmit}>
    //             <div className="contact__form-group grid">
    //                 <div className="contact__form-div">
    //                     <label className="contact__form-tag text-cs">Your Full Name <b>*</b></label>
    //                     <input type="text" name='name' onChange={handleChange} value={form.name} className="contact__form-input" />
    //                 </div>

    //                 <div className="contact__form-div">
    //                     <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
    //                     <input type="email" name='email' onChange={handleChange} value={form.email} className="contact__form-input" />
    //                 </div>

    //             </div>

    //             <div className="contact__form-div">
    //                 <label className="contact__form-tag text-cs">Your Subject <b>*</b></label>
    //                 <input type="text" name='subject' onChange={handleChange} value={form.subject} className="contact__form-input" />
    //             </div>

    //             <div className="contact__form-div contact__form-area">
    //                 <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
    //                 <textarea className='contact__form-input' name='message' onChange={handleChange} value={form.message}></textarea>
    //             </div>

    //             <div className="contact__submit">
    //                 <p>* Accept the terms and conditions</p>
    //                 <button type='submit' className='btn text-cs'>Send Message</button>
    //             </div>
    //         </form>
    //     </div>

    //     <div className="section__deco deco__left">
    //       <img src={shapeOne} alt="" className='shape' />
    //     </div>

    //     <div className="section__bg-wrapper">
    //         <span className="bg__title">Contact Me</span>
    //     </div>
        
    // </section>
//   )
// }

// export default Contact
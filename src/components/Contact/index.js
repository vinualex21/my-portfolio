import { useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinWink } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('contact_service', 'contact_form', refForm.current, '_rbV3iOrBMGX7BcvK')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <div>
                        <h1>
                            Contact Me
                        </h1>
                        <p>
                            {"Have you got an interesting opportunity for me? Make me an offer I can't refuse "}
                            <FontAwesomeIcon icon={faFaceGrinWink} />
                        </p>
                    </div>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <Loader type='ball-zig-zag' />
            </div>
        </>
    )
}

export default Contact;
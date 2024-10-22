import React, { useRef, useState } from 'react'
import { AnimatedModalDemo } from './elements/AnimatedModalDemo';
import Btn from './elements/Btn';
import { Bounce, toast } from 'react-toastify';

const ContactUs = () => {
    const formRef = useRef();
    const [name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Message, setMessage] = useState('');
    const [Error, setError] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
    const payload={
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        };
    const handleForm = async (e) => {
        e.preventDefault()
        if (name.length < 3) {
            toast.error("Oops! Name can't be less than 3 characters.", payload);
        }
        else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email))) {
            toast.error('Oops! Email is Invalid',payload);
        }
        else if (Message.length === 0) {
            toast.error('Oops! You forget to put Message.',payload);
        }
        else if (Phone.length != 10) {
            toast.error('Oops! Invalid Phone No.',payload);
            
        }
        else {
            try {
                await fetch('https://studyio-backend-production.up.railway.app/contact-query', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: name,
                      email: Email,
                      phone: Phone,
                      message: Message,
                    }),
                  });
            } catch (e) {
                console.error(e);
            }
            
            toast.success('😉 Hey '+name+', our team will Contact you Shortly', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                setMessage("");
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
        }




    }
    return (
        <section class="py-24">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 grid-cols-1">
                    <div class="lg:mb-0 mb-10">
                        <div class="group w-full h-full">
                            <div class="relative h-full">
                                <img src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/selected%5C%2Fcontact-image%20(1).jpg?alt=media&token=b5ff7173-40f5-49ca-90c1-986d7590ade5" alt="ContactUs tailwind section" class="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover" />

                                <div class="absolute bottom-0 w-full lg:p-11 p-5">
                                    <div class="bg-white rounded-lg p-6 block">
                                        <a bg-orange-500 class="flex items-center mb-6">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h5 class="text-black text-base font-normal leading-6 ml-5">+91 9992330440 </h5>
                                        </a>
                                        <a bg-orange-500 class="flex items-center mb-6">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" />
                                            </svg>
                                            <h5 class="text-black text-base font-normal leading-6 ml-5">info@studyculture.io</h5>
                                        </a>
                                        <a bg-orange-500 class="flex items-center">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#4F46E5" stroke-width="2" />
                                                <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#4F46E5" stroke-width="2" />
                                            </svg>
                                            <h5 class="text-black text-base font-normal leading-6 ml-5">Head Office: 51 S, Model Town, Hisar, Haryana, India.</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form ref={formRef} onSubmit={(e) => handleForm(e)} class="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl align-middle">
                        <h3 className='font-semibold text-red-600 text-center animate-bounce'>{Error}</h3>
                        <h2 class="text-purple-900 font-manrope text-4xl font-semibold leading-10 mb-11 text-center">Send Us A Message</h2>
                        <input type="text" class="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Name" value={name} onChange={handleChange} required />
                        <input type="text" class="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email" value={Email} onChange={handleEmailChange} required />
                        <input type="number" class="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Phone" value={Phone} onChange={handlePhoneChange} required />

                        <input type="text" class="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Message" value={Message} onChange={handleMessageChange} required/>
                        {/* <button class="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">Send</button> */}
                        <div className='flex justify-center'>
                        <button type="submit"
                                class="flex gap-2 justify-center items-center py-3.5 px-7 rounded-full text-white bg-gradient-to-tr from-orange-500 to-purple-900 shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-purple-900">Submit<svg
                                    width="17" height="13" viewBox="0 0 17 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.5 6.88281L14.8333 6.88281M10.6667 11.8828L15.0774 7.47207C15.3552 7.19429 15.4941 7.0554 15.4941 6.88281C15.4941 6.71022 15.3552 6.57133 15.0774 6.29356L10.6667 1.88281"
                                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>

                        </div>


                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs

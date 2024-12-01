import React, { useEffect, useRef, useState } from 'react'
import { Bounce, toast } from 'react-toastify';
import { APIURL } from '../../utils/constant';
import { scrollToTop } from '../../utils/ScrollToTop';

const ScholarshipForm = () => {
  useEffect(() => {
    scrollToTop()
  }, [])
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const twelthth = useRef("0");
  const tenth = useRef("0");
  const grad = useRef("0");
  const startchoice = useRef(null);
  const [option, setOption] = useState("Canada")
  const otherC = useRef("");
  const handleCountry = (event) => {
    setOption(event.target.value)
  }
  const TostErrorPayload = {
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
  const HandleSubmitForm = async () => {
    console.log(option === "OT")
    if (option === "OT") {
      setOption(otherC.current.value)
    }

    if (name.current.value.length < 3) {
      toast.error("Oops! Name can't be less than 3 characters.", TostErrorPayload);
    }
    else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.current.value))) {
      toast.error('Oops! Email is Invalid', TostErrorPayload);
    }
    else if (phone.current.value.length != 10) {
      toast.error("Oops! Invalid Phone No.", TostErrorPayload);
    }
    else if (tenth.current.value === "") {
      toast.error("Oops! Oops! you forget to put your 10th Marks", TostErrorPayload);
    }
    else if (twelthth.current.value === "") {
      toast.error("Oops! Oops! you forget to put your 12th Marks", TostErrorPayload);
    }
    else if (option === "") {
      toast.error("Oops! you forget to put Country", TostErrorPayload);
    }
    else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.current.value,
          email: email.current.value,
          phone: phone.current.value,
          "10th": tenth.current.value,
          "12th": twelthth.current.value,
          grad: grad.current.value,
          preferedCountry: option,
          start: startchoice.current.value
        })
      };
      try {
        const response = await fetch('https://studyio-backend-production.up.railway.app/Scholarship-query', requestOptions);
        name.current.value = "",
          email.current.value = "",
          phone.current.value = "",
          tenth.current.value = "",
          twelthth.current.value = "",
          grad.current.value = "",
          toast.success('😉 Hey ' + name.current.value + ', our team will Contact you Shortly', {
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
      } catch (error) {
        toast.error(error, TostErrorPayload);
        console.error('Error:', error);
      }
    };


  }




  return (

    <div class="min-h-screen bg-gradient-to-t from-orange-300 flex flex-row-reverse items-center justify-center mt-5 ">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <h2 class="font-semibold text-xl text-gray-600">Secure Your Scholarship Today</h2>
          <p class="text-gray-500 mb-6">Secure your financial aid and achieve your academic goals</p>

          <div class="bg-white  shadow-lg p-4 px-4 md:p-8 mb-6 rounded-2xl">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input ref={name} type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="Full Name"/>
                  </div>

                  <div class="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input ref={email} type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="email@domain.com" />
                  </div>

                  <div class="md:col-span-3">
                    <label for="number">Phone No</label>
                    <input ref={phone} type="number" name="Phone No" id="Phone No" class="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="Phone No" />
                  </div>
                  <div class="md:col-span-2">
                    <label for="number">Grade 10 Score </label>
                    <input ref={tenth} type="number" name="Phone No" id="Phone No" class="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="" />
                  </div>
                  <div class="md:col-span-3">
                    <label for="number">Grade 12 Score</label>
                    <input ref={twelthth} type="number" name="Phone No" id="Phone No" class="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="" />
                  </div>
                  <div class="md:col-span-2">
                    <label for="number">Graduation Score (if any)</label>
                    <input ref={grad} type="number" name="Phone No" id="Phone No" class="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="" />
                  </div>

                  <div class="md:col-span-3">
                    <label for="country">Preferred Country</label>
                    <select onChange={handleCountry} id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">

                      <option value="Canada">Canada</option>
                      <option value="US">United States</option>
                      <option value="Australia">Australia</option>
                      <option value="UK">UK</option>
                      <option value="Europe">Europe</option>
                      <option value="OT">Other</option>
                    </select>
                  </div>

                  {option === "OT" && <div class="md:col-span-2">
                    <label for="city">Enter Country</label>
                    <input ref={otherC} type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="" />

                  </div>}
                  <div class="md:col-span-5">
                    <label for="country">How do you want to start?</label>
                    <select ref={startchoice} id="countries" class="bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

                      <option value="Request a call back">Request a call back</option>
                      <option value="Request a visit to our experience centre">Request a visit to our experience centre</option>
                    </select>
                  </div>
                  <div class="md:col-span-5 text-right">
                    <div class="flex items-center justify-center">
                      {/* <button onClick={HandleSubmitForm} class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-10 rounded-2xl">Submit</button> */}
                      <button type="submit" onClick={HandleSubmitForm}
                        class="flex gap-2 justify-center items-center py-3.5 px-7 rounded-full text-white bg-gradient-to-tr from-orange-500 to-purple-900 shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-purple-900">Submit<svg
                          width="17" height="13" viewBox="0 0 17 13" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 6.88281L14.8333 6.88281M10.6667 11.8828L15.0774 7.47207C15.3552 7.19429 15.4941 7.0554 15.4941 6.88281C15.4941 6.71022 15.3552 6.57133 15.0774 6.29356L10.6667 1.88281"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-gray-600 bg-gradient-to-r from-white mt-5">
                <img className="" src='https://i.ibb.co/vzMmF0g/sc.jpg'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScholarshipForm 

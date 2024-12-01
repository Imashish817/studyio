import React, { useEffect, useRef, useState } from 'react'
import { Bounce, toast } from 'react-toastify';
import { scrollToTop } from '../../utils/ScrollToTop';
import Datepicker from "react-tailwindcss-datepicker";
const FirstStepForm = () => {
  useEffect(() => {
    scrollToTop()
  }, [])
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const highest_qualification = useRef("");
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
    else if (highest_qualification.current.value === "") {
      toast.error("Oops! you forget to put your Highest Qualification", TostErrorPayload);
    }
    else if (option === "") {
      toast.error("Oops! you forget to put Country", TostErrorPayload);
    }
    else {
      const DOB = new Date(value.endDate);
      const Dob = DOB.getDate() + "/" + DOB.getMonth() + "/" + DOB.getFullYear()
      console.log(option)
      let pc = option;
      if (option === "OT") {
        pc = otherC.current.value
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.current.value,
          email: email.current.value,
          phone: phone.current.value,
          age: Dob,
          hg: highest_qualification.current.value,
          preferedCountry: pc,
          start: startchoice.current.value
        })
      };



      try {
        const response = await fetch('https://studyio-backend-production.up.railway.app/Consultation-query', requestOptions);
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

        name.current.value = "",
          email.current.value = "",
          phone.current.value = "",
          highest_qualification.current.value = "",
          twelthth.current.value = "",
          grad.current.value = ""
      }
      catch (error) {
        toast.error(error, TostErrorPayload);
        console.error('Error:', error);
      }

    }




  }
  return (

    <div class="min-h-screen  bg-gradient-to-t from-orange-300 flex items-center justify-center mt-5 ">
      <div class="container max-w-screen-xl md:max-w-screen-lg ">
        <div>
          <h2 class="font-semibold text-xl text-gray-600">Take Your First Step</h2>
          <p class="text-gray-500 mb-6">Discover the endless possibilities that education can open up for you.</p>

          <div class="bg-white drop-shadow-2xl p-4 px-4 md:p-8 mb-6 rounded-2xl">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">


              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input ref={name} type="text" name="full_name" id="full_name" class="h-11 border mt-1 rounded px-4 w-full bg-white" />
                  </div>

                  <div class="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input ref={email} type="text" name="email" id="email" class="h-11 border mt-1 rounded px-4 w-full bg-white" placeholder="email@domain.com" />
                  </div>

                  <div class="md:col-span-3">
                    <label for="number">Phone No</label>
                    <input ref={phone} type="number" name="Phone No" id="Phone No" class="h-11 border mt-1 rounded px-4 w-full bg-white" placeholder="Phone No" />
                  </div>
                  <div class="md:col-span-2">
                    <label for="Age">Date of Birth</label>
                    <div className=' '>
                      <Datepicker  inputClassName="w-full border rounded  h-11 mt-1 px-4"
                        primaryColor={"blue"}
                        displayFormat="DD/MM/YYYY"
                        useRange={false}
                        asSingle={true}
                        value={value}
                        onChange={newValue => setValue(newValue)}
                      />
                    </div>



                    {/* <DatePicker onChange={onChange} value={value} className="h-11 border mt-1 rounded px-4 w-full bg-white"/> */}
                    {/* <input ref={age} name="Age" type="number" id="Age" placeholder="0" class="h-11 border mt-1 rounded px-4 w-full bg-white" /> */}


                  </div>
                  <div class="md:col-span-5">
                    <label for="Highest Qualification">Highest Qualification</label>
                    <input ref={highest_qualification} type="text" name="Highest Qualification" id="Highest Qualification" class="h-11 border mt-1 rounded px-4 w-full bg-white" placeholder="" />
                  </div>

                  <div class="md:col-span-2">
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

                  {option === "OT" && <div class="md:col-span-3">
                    <label for="city">Enter Country</label>
                    <input ref={otherC} type="text" name="city" id="city" class="h-11 border mt-1 rounded px-4 w-full bg-white" placeholder="" />

                  </div>}

                  <div class="md:col-span-5">
                    <label for="country">How do you want to start?</label>
                    <select ref={startchoice} id="countries" class="bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

                      <option value="Request a call back">Request a call back</option>
                      <option value="Request a visit to our experience centre">Request a visit to our experience centre</option>
                      <option value="Request a doorstep visit @4999">Request a doorstep visit at ₹4,999/-</option>
                    </select>
                  </div>
                  {/* 
                  <div class="md:col-span-5">
                    <div class="inline-flex items-center">
                      <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                      <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                    </div>
                  </div> */}



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

              <div class="text-gray-600 bg-gradient-to-r from-white ">
                <img className="" src='https://i.ibb.co/rcYmg70/willcontactyou.jpg'></img>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default FirstStepForm

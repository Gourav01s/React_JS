import { useState } from 'react'
import './App.css'


function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "", streetAddress: "", city: "",
    state: "", zipCode: "", comments: false, candidates: false, offers: false,
    pushNotification: "",
  });

  
  function changeHandler(event) {
    const { name, type, checked, value } = event.target;
    setFormData((prev) => {
      return {
        // ...prevFormData, [name]:type === "checkbox" ? checked : value 
        ...prev, [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    // saved data object
    console.log(formData);
  }

  return (
    <>
      <h1>Simple Form </h1>
      <h2>returns data on object form</h2>
      
      <form onSubmit={submitHandler}>
        <label htmlFor="first-Name">First Name</label>
        <br />
        <input type="text" name="firstName"
          id="first-Name" placeholder='first name'
          onChange={changeHandler}
          value={formData.firstName}
          className='mt-2'
        />

        <br />

        <label htmlFor="last-Name">Last Name</label>
        <br />
        <input type="text" name='lastName'
          id='last-Name' placeholder='last name'
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />

        <label htmlFor="email-address">Email address</label>
        <br />
        <input type="email" name='email'
          id='email-address' placeholder='example@email.com'
          onChange={changeHandler}
          value={formData.email}
        />
        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select name="country" id="country"
          onChange={changeHandler}
          value={formData.country}
        >
          <option value="other">other</option>
          <option value="india">India</option>
          <option value="russia">Russia</option>
          <option value="us">USA</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>

        <br />

        <label htmlFor="street-address">Street address</label>
        <br />
        <input type="text" name='streetAddress'
          id='street-address' placeholder='1234 St'
          onChange={changeHandler}
          value={formData.streetAddress}
        />
        <br />

        <label htmlFor="city">City</label>
        <br />
        <input type="text" name='city'
          id='city' placeholder='City name'
          onChange={changeHandler}
          value={formData.city}
        />
        <br />

        <label htmlFor="state">State</label>
        <br />
        <input type="text" name='state'
          id='state' placeholder='State name'
          onChange={changeHandler}
          value={formData.state}
        />
        <br />

        <label htmlFor="zip-code">Zip / Postal code</label>
        <br />
        <input type="number" name='zipCode'
          id='zip-code' placeholder='pin/zipcode'
          onChange={changeHandler}
          value={formData.zipCode}
        />

        <br /><br />

        <fieldset className='flex flex-col items-center justify-center'>
          <legend>By Email</legend>

          <div className='flex'>

            <input type="checkbox" name="comments" id="comment-checkbox"
              onChange={changeHandler}
              value={formData.comments}
            />

            <div>
              <label htmlFor="comment-checkbox">Comments</label>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>

          <br />

          <div className="flex">

            <input type="checkbox" name="candidates" id="candidate-checkbox"
              onChange={changeHandler}
              value={formData.candidates}
            />
            <div>
              <label htmlFor="candidate-checkbox">Candidates</label>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>

            </div>
          </div>

          <br />

          <div className="flex">
            <input type="checkbox" name="offers" id="offer-checkbox"
              onChange={changeHandler}
              value={formData.offers}
            />

            <div>
              <label htmlFor="offer-checkbox">Offers</label>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>


        </fieldset>


        
        <fieldset>
          <legend>Push-Notifications</legend>

          <input type="radio"
            name="pushNotification"
            id="pushEverything"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />

          <input type="radio"
            name="pushNotification"
            id="pushEmail"
            value="same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>
          <br />

          <input type="radio"
            name="pushNotification"
            id="pushNothing"
            value="No Push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notification</label>


        </fieldset>

        <button className='bg-blue-400 font-bold rounded text-white
          px-[1.2em] py-[0.4em] border-transparent
          hover:border-[#646cff]' >
          save
        </button>
      </form>
    </>
  )
}

export default App

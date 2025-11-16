import { useState } from 'react'
import './App.css'


function App() {

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // function firstNamehandler(event) {
  //   setFirstName(event.target.value);
  //   console.log(event.target.value);
  // }

  // function lastNamehandler(event) {
  //   setLastName(event.target.value);
  //   console.log(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    textarea: '', isVisible: false, mode: '',
    favCar: '',
  });

  
  function changeHandler(event) {
    const { name, value, checked,type } = event.target;
    setFormData(prevFormData => {
      return {
        // ...prevFormData, [event.target.name]: event.target.value
        ...prevFormData, [name]: type === 'checkbox' ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log('final submition');
    console.log(formData);
    
  }

  return (
    <>
      <h1>Simple form making </h1>
      <form onSubmit={submitHandler}>

        <input type="text" placeholder='first name' name='firstName'
          onChange={changeHandler}
          value={formData.firstName}
        />

        <br />
        <br></br>
        
        <input type="text" placeholder='last name' name='lastName'
          onChange={changeHandler}
          value={formData.lastName}
        />

        <br/>
        <br></br>

        <input type="email" name="email"
          placeholder='enter email '
          onChange={changeHandler}
          value={formData.email}
        />

        <br/>
        <br></br>

        <textarea
          placeholder='enter your comment here'
          onChange={changeHandler}
          name='textarea'
          value={formData.textarea}
        />

        <br /><br />

        <input 
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          checked={formData.isVisible}
          id='isVisible'
        />
        <label htmlFor='isVisible' >this is visible</label>

        <br /><br />

        <fieldset>
          <legend>Mode:</legend>

          <input type="radio" name="mode" id="online-Mode"
            value='Online-Mode'
            onChange={changeHandler} 
            // checked={formData === 'Online-Mode'}
          />
          <label htmlFor="online-Mode">online Mode</label>
          
          <input type="radio" name="mode" id="offline-Mode"
            value='Offline-Mode'
            onChange={changeHandler} 
            // checked={formData === 'Offline-Mode'}
          />
          <label htmlFor="offline-Mode">offline Mode</label>

        </fieldset>

        <label htmlFor="favCar">favourite Car </label>
        <select name="favCar" id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scarpio">Scarpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="lagender">Lagender</option>
          <option value="defender">Defender</option>

        </select>

        <button>Submit</button>
        
      </form>
    </>
  )
}

export default App

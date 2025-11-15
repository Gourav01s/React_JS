import { useState } from 'react';
import './ProductForm.css'

function ProductForm(props) {

    // Try to set single useState for multiple Handler
    // const [fullProductInput, setFullProductinput] = useState({
    //     title: '',
    //     date: '',
    // });


    // to Handler for each usse state
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
        // console.log(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate,
        };

        // console.log(productData);
        props.onSaveProduct(productData);
        
        setTitle('');
        setDate('');
    }

    return <>
        <form  onSubmit={submitHandler}>

        <div  className='new-product_control'>

        <div className='new-product_title'>
            <label >Title</label>
            <input onChange={titleChangeHandler} value={newTitle} type="text"  />
        </div>
        <div  className='new-product_date'>
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler} value={newDate} min='2025-01-01' max='2025-12-30' />
        </div>
        <div  className='new-product_button'>
            <button type='submit' >Add Product</button>
        </div>
        </div>
        </form>
    </>
}

export default ProductForm;
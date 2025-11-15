import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props) {
    function SaveProductData(data) {
        console.log('this is inside the New Product');
        props.onProductData(data);
    }
    return <>
        <div className="new-product">
            <ProductForm onSaveProduct={SaveProductData} />

        </div>
        
    </>

}

export default NewProduct;
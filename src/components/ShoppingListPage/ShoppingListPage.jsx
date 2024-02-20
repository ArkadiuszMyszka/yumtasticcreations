import React, { useState } from 'react';
import './ShoppingListPage.styled.css';

const ShoppingListPage = () => {
    const [products, setProducts] = useState([]);

    const removeProduct = (productId) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    };

    const isShoppingListEmpty = () => {
        return products.length === 0;
    }

    return (
        <div className={`container ${isShoppingListEmpty() ? 'ShoppingList_empty' : ''}`}>
            <h1 className="ShoppingList_title">Shopping list</h1>
            <div className="ShoppingList_bar">
                <div className="ShoppingList_buttons">
                    <span className="ShoppingList_products">Products</span>
                    <div className="ShoppingList_number">
                        <span>Number</span>
                        <span>Remove</span>
                    </div>
                </div>
            </div>
            {isShoppingListEmpty() ? (
                <div className="ShoppingList_empty_text">Shopping list is empty</div>
            ) : (
                <ul className="ShoppingList_icons">
                    {products.map(product => (
                        <li key={product.id} className="ShoppingList_wrapper_picture">
                            <div className="ShoppingList_picture">
                                <img className="ShoppingList_image" src={product.image} alt="ingredient" />
                            </div>
                            <div>
                                <div className="ShoppingList_wrapper_description">
                                    <span className="ShoppingList_description">{product.name}</span>
                                </div>
                            </div>
                            <div>
                                <div className="ShoppingList_right_wrapper">
                                    <div className="ShoppingList_wrapper_quantity">{product.quantity}</div>
                                    <button className="ShoppingList_button" type="button" onClick={() => removeProduct(product.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="none">
                                            <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.0625 4.4375-10.125 10.125M14.0625 14.5625 3.9375 4.4375"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ShoppingListPage;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actionsCreator/prodcutAcitons';
import { ADD_TO_CART } from '../redux/actionTypes/actionsTypes';
import { BiListPlus } from 'react-icons/bi'
const ProductCard = ({ product, button }) => {

    const dispatch = useDispatch()
    const { pathname } = useLocation()

    return (
        <div
            className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
            key={product._id}
        >
            <div className='h-52 w-52 mx-auto'>
                <img src={product?.image} alt={product?.model} />
            </div>
            <h1 className='font-bold text-center'>{product.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {product.keyFeature.map((feature) => {
                        return <li className='text-sm '>{feature}</li>;
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                {
                    !pathname.includes('cart') &&
                    <button
                        className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                        onClick={() => {
                            dispatch(addToCart(product))
                        }}
                    >
                        Add to cart
                    </button>
                }
                {
                    pathname.includes('cart') &&
                    <button
                        className='bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                        onClick={() => {
                            dispatch(removeFromCart(product))
                        }}
                    >
                        Remove
                    </button>
                }

                {!pathname.includes('cart') &&
                    <button
                        title='Add to wishlist'
                        className='bg-indigo-500  py-1 px-2 rounded-full'
                    // onClick={() => {
                    //     dispatch({ type: actioType.ADD_TO_WISHLIST, paylode: product })
                    // }}
                    >
                        <BiListPlus className='text-white' />
                    </button>}


                {/* <button
                    title='Add to wishlist'
                    className='bg-indigo-500  py-1 px-2 rounded-xl text-white'
                    onClick={() => {
                        dispatch({ type: ADD_TO_CART, paylode: product })
                    }}
                >
                    Delete
                </button> */}



            </div>
        </div>
    );
};

export default ProductCard;
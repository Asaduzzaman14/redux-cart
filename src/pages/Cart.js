import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Cart = () => {

    const cart = useSelector((state) => state?.cart)



    return (
        <div className='px-5'>
            <h2 className='text-2xl'>This is Cart</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>

                {
                    cart?.map((product) => {
                        return (
                            <ProductCard key={product.name} product={product} />
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Cart;
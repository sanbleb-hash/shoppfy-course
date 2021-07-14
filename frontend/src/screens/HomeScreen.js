import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import MessageBox from '../components/MassageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux/actions/ProductAction'
import Rating from '../components/Rating';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);

    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts({}))
    }, [dispatch])



    return (
        <section className='my-auto'>
            <h1 className='py-4 text-center text-xl text-gray-600'>products list</h1>
            {
                loading ? (<Loading />) : error ? (<MessageBox>{error}</MessageBox>)
                    : (

                        <div className='grid grid-cols-3 gap-2 my-6 mx-9'  >
                            {products&&products.map(product => {
                                return <div key={product._id} className='shadow-md rounded-lg '>
                                
                                    <Link to={`/product/${product._id}`} ><img src={product.image} alt={product.name} />
                                        <div className='p-2 bg-blue-100'>

                                            <h4>{product.name}</h4>
                                            <p>R{product.price}</p>
                                            <h4><Rating text={product.numRevies} value={product.rating} /></h4>

                                        </div>
                                    </Link>
                                </div>
                            })}
                        </div>)
            }
        </section>
    )
}

export default HomeScreen

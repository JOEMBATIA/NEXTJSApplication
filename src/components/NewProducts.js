import React from 'react'
import ProductCard from './ProductCard'

const NewProducts = () => {

    const products = [
        {
            img: '/jacket-1.jpg',
            title: 'jacket',
            desc: 'MEN Yarn fleece zip jacket',
            rating: 1,
            price: "45.00"
        },
        {
            img: '/jacket-2.jpg',
            title: 'jacket',
            desc: 'MEN Yarn fleece zip jacket',
            rating: 2,
            price: "55.00"
        },
        {
            img: '/shirt-1.jpg',
            title: 'shirt',
            desc: 'Linen shirt',
            rating: 3,
            price: "25.0"
        },
        {
            img: '/sports-1.jpg',
            title: 'shirt',
            desc: 'Sport boot',
            rating: 4,
            price: "45.0"
        },
        {
            img: '/skirt-1.jpg',
            title: 'shirt',
            desc: 'Cheerleader skirt',
            rating: 5,
            price: "15.0"
        },
        {
            img: '/watch-1.jpg',
            title: 'watch',
            desc: 'watch',
            rating: 5,
            price: "15.0"
        },
        {
            img: '/watch-2.jpg',
            title: 'watch',
            desc: 'watch',
            rating: 5,
            price: "35.0"
        }
    ]

    return (
        <div>
            <div className='container pt-16'>
                <h1 className='font-medium text-2xl pb-4'>New products</h1>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
                lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                    {
                        products.map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                    rating={item.rating}
                                    price={item.price}
                                />

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NewProducts
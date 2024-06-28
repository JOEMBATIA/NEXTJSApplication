import React from 'react'
import ProductCard from './ProductCard'

const NewProducts = () => {

    const products = [
        {
            img: '/laptop.jpg',
            title: ' Gen-Z Laptop',
            desc: 'lets you express yourself through art, music, writing, and more, making it the perfect tool for artists, writers, and musicians.',
            rating: 3,
            price: "45.00"
        },
        {
            img: '/laptop-1.jpg',
            title: 'Birdy Laptop',
            desc: 'The self-contained device that combines all into one sleek and portable unit, making it the ultimate companion for productivity and entertainment',
            rating: 5,
            price: "55.00"
        },
        {
            img: '/laptop.jpg',
            title: 'Gamers laptop',
            desc: 'The liberating device that lets you work, learn, and play from anywhere giving you the freedom to be wherever your creativity and curiosity takes you',
            rating: 3,
            price: "25.0"
        },
        {
            img: '/laptop-1.jpg',
            title: 'FBI;) Laptop',
            desc: 'The versatile tool that can handle multiple tasks simultaneously, from typing documents to streaming music, making it the perfect companion for busy lives.',
            rating: 4,
            price: "45.0"
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
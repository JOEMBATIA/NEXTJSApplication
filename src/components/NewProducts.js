import React from 'react'
import ProductCard from './ProductCard'

const NewProducts = () => {

    const products = [
        {
            img: '/laptop.jpg',
            title: ' Gen-Z Laptop',
            desc: 'lets you express yourself through art, music, writing, and more.',
            rating: 3,
            price: "450.00"
        },
        {
            img: '/laptop.jpg',
            title: 'Birdy Laptop',
            desc: 'The self-contained device that combines all into one sleek and portable unit.',
            rating: 5,
            price: "550.00"
        },
        {
            img: '/laptop.jpg',
            title: 'Gamers laptop',
            desc: 'The liberating device that lets you work, learn, and play from anywhere.',
            rating: 3,
            price: "250.0"
        },
        {
            img: '/laptop.jpg',
            title: 'FBI Laptop',
            desc: 'The versatile tool that can handle multiple tasks simultaneously.',
            rating: 4,
            price: "450.0"
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
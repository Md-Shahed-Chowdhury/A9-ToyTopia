import React from 'react';
import { useLoaderData } from 'react-router';
import ToyCard from '../Components/ToyCard';

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className='mb-3'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold text-secondary mb-3'>All Toys</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 gap-5'>
            {
                toys.map(toy=>{
                    return (
                        <ToyCard toyName={toy.toyName} pictureURL={toy.pictureURL} rating={toy.rating} availableQuantity={toy.availableQuantity} price={toy.price} toyId ={toy.toyId}></ToyCard>
                    )
                    
                })      
            }
        </div>
        </div>
    );
};

export default AllToys;
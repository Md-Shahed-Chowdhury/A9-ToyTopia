import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const ExclusiveToys = () =>  {
    const [toys,setToys]=useState([]);
    useEffect(() => {
        fetch('/exclusiveToys.json')
        .then(res=>res.json())
        .then(data=>setToys(data))
        .catch(err=>console.log(err));
    },[]);
    return (
        <div className='mb-3'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold text-secondary mb-3'>Exclusive Collection</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 gap-5'>
            {
                toys.map(toy=>{
                    return (
                        <ToyCard key={toy.toyId} toyName={toy.toyName} pictureURL={toy.pictureURL} rating={toy.rating} availableQuantity={toy.availableQuantity} price={toy.price}  toyId ={toy.toyId}></ToyCard>
                    )
                    
                })      
            }
        </div>
        </div>
    );
};

export default ExclusiveToys;
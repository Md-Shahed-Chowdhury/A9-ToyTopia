import React, { use } from 'react';
import { useParams,useLoaderData } from 'react-router';
import { FaStar } from 'react-icons/fa';
import { toast } from "react-toastify";
import { MyContext } from '../Provider/ContextProvider';
const ToyDetails = () => {
    const {id} = useParams();
    const {user} = use(MyContext)
    const data = useLoaderData();
    const toy = data.find(t => t.toyId == id);
    const handleTryNow = (e) =>{
      e.preventDefault();
      const name = e.target.name.value;
      toast(`Thank you ${name} for trying ${toy.toyName}!`);
      }
    return (
        <div className="bg-base-200">
  <div className="flex flex-col lg:flex-row  p-10 gap-5">
    <img
      src={toy.pictureURL}
      className="w-full lg:w-1/2 rounded-lg shadow-2xl md:h-100 lg:h-130"
    />
    <div>
      <h1 className="text-5xl font-bold">{toy.toyName}</h1>
      <p className="py-2 text-lg text-accent font-semibold">
        {toy.description}
      </p>
      <p className="py-2">
        <span className='font-semibold text-lg text-rose-800'>Category:</span> {toy.subCategory}
      </p>
      <div className="flex items-center text-yellow-500 mt-2">
           <span className='font-semibold text-lg text-rose-800'>Rating: </span><FaStar className="mr-1" />{toy.rating}
        </div>
      <p className="py-2">
        <span className='font-semibold text-lg text-rose-800'>Price:</span> {toy.price}
      </p>
      <p className="py-2">
        <span className='font-semibold text-lg text-rose-800'>Available Quantity:</span> {toy.availableQuantity}
      </p>
      <p className="py-2">
        <span className='font-semibold text-lg text-rose-800'>Seller:</span> {toy.sellerName}
      </p>
      <p className="py-2">
        <span className='font-semibold text-lg text-rose-800'>Seller Email:</span> <a href="" className='text-blue-400 hover:underline'>{toy.sellerEmail}</a>
      </p>
      <p className='text-3xl text-red-700'>Try Now!!</p>
      <form onSubmit={handleTryNow}>
        <fieldset className="fieldset">
            <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    name="name"
                    required
                    defaultValue={user?.displayName}
                  />
        <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    defaultValue={user?.email}
                    required
                  />
                  <button className="btn btn-primary w-1/5">Try Now!</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default ToyDetails;

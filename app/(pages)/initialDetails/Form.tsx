'use client';

import { setUsers, User } from '@/app/store/reducers/initialDetailsSlice';
import React, { ChangeEvent, FormEventHandler } from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState<User>({
    id: '', // Default id value
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  }); // Default structure for User type
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(setUsers({ ...data, id: Date.now() })); // Added id property with a unique value
  };
  return (
    <div>
      <form
        className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"
        onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Name"
          className="border border-solid border-black/[.08] dark:border-white/[.145] rounded-full h-10 sm:h-12 px-4 sm:px-5 w-full"
        />
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          className="border border-solid border-black/[.08] dark:border-white/[.145] rounded-full h-10 sm:h-12 px-4 sm:px-5 w-full"
        />
        <input
          onChange={handleChange}
          name="phone"
          type="tel"
          placeholder="Phone"
          className="border border-solid border-black/[.08] dark:border-white/[.145] rounded-full h-10 sm:h-12 px-4 sm:px-5 w-full"
        />
        <input
          onChange={handleChange}
          name="address"
          type="text"
          placeholder="Address"
          className="border border-solid border-black/[.08] dark:border-white/[.145] rounded-full h-10 sm:h-12 px-4 sm:px-5 w-full"
        />
        <input
          onChange={handleChange}
          name="city"
          type="text"
          placeholder="City"
          className="border border-solid border-black/[.08] dark:border-white/[.145] rounded-full h-10 sm:h-12 px-4 sm:px-5 w-full"
        />
        <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;

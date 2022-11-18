import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import eventData from "../data";
import { BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";

export default function Guests() {
  const [guests, setGuests] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef("");

  const getGuests = async () => {
    let url = `${import.meta.env.VITE_JSON_URL}/events/${eventData.eventId}/guests?name_like=${search}`;
    let { data } = await axios(url);
    setGuests(data);
  };

  const deleteGuest = async (id) => {
    let url = `${import.meta.env.VITE_JSON_URL}/guests/${id}`;
    axios.delete(url).then(() => {
      getGuests();
    });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteGuest(id);
      }
    });
  };

  const handleInput = async (e) => {
    e.preventDefault();
    let url = `${import.meta.env.VITE_JSON_URL}/events/${eventData.eventId}/guests`;
    axios
      .post(url, {
        name: inputRef.current.value,
      })
      .then(() => {
        inputRef.current.value = "";
        getGuests();
      });
  };

  useEffect(() => {
    getGuests();
  }, [search]);

  return (
    <div className="flex min-h-screen w-full justify-center bg-primary-50 p-5 lg:p-10">
      <div className="flex w-full flex-col space-y-5 rounded-2xl bg-white p-10 md:w-4/5 lg:w-1/3">
        <h1 className="font-cursive text-6xl font-medium">Guests List</h1>
        <input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-full rounded-lg py-2 px-4 outline-none outline outline-gray-200 focus:outline-none focus:ring focus:ring-primary-50"
        />
        <form onSubmit={handleInput} className="flex w-full space-x-3">
          <input
            placeholder="Name..."
            ref={inputRef}
            type="text"
            className="w-full rounded-lg py-2 px-4 outline-none outline outline-gray-200 focus:outline-none focus:ring focus:ring-primary-50"
          />
          <button className="rounded-lg bg-primary-50 py-2 px-4 outline-none duration-500 hover:bg-primary-200 hover:outline-none">Add</button>
        </form>
        <div className="my-4 flex flex-col space-y-2">
          {guests.length > 0 ? (
            guests.map((guest, index) => {
              return (
                <div key={guest.id} className="flex items-center justify-between">
                  <span>
                    {index + 1}. {guest.name}
                  </span>
                  <button
                    className="rounded-lg bg-red-500 py-2 px-4 text-sm text-white outline-none duration-500 hover:bg-red-700 hover:outline-none"
                    onClick={(e) => handleDelete(e, guest.id)}
                  >
                    <BsTrashFill />
                  </button>
                </div>
              );
            })
          ) : (
            <h1 className="text-center">No Data</h1>
          )}
        </div>
      </div>
    </div>
  );
}

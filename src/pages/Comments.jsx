import axios from "axios";
import qs from "querystringify";
import React, { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import eventData from "../data";

export default function Comment() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");

  const getComments = async () => {
    let url = `${import.meta.env.VITE_JSON_URL}/events/${eventData.eventId}`;
    let { data } = await axios(url);
    setComments(data.comments);
  };

  const deleteComment = async (id) => {
    let url = `${import.meta.env.VITE_JSON_URL}/comments/${id}`;
    axios.delete(url).then(() => {
      getComments();
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
        deleteComment(id);
      }
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="flex min-h-screen w-full justify-center bg-primary-50 p-5 lg:p-10">
      <div className="flex w-full flex-col space-y-5 rounded-2xl bg-white p-10 md:w-4/5 lg:w-1/3">
        <h1 className="font-cursive text-6xl font-medium">Comments List</h1>
        <input
          placeholder="Search by name..."
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-full rounded-lg py-2 px-4 outline-none outline outline-gray-200 focus:outline-none focus:ring focus:ring-primary-50"
        />
        <div className="my-4 flex flex-col space-y-2">
          {comments.length > 0 ? (
            comments
              .filter((comment) => comment.name.toLowerCase().includes(search.toLowerCase()))
              .map((comment, index) => {
                return (
                  <div key={comment.id}>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {index + 1}. {comment.name}
                        </span>
                        <span className="flex items-center space-x-2 font-normal text-gray-400">
                          <FiClock />
                          <span>{moment(comment.created_at).fromNow()}</span>
                        </span>
                        <p>{comment.comment}</p>
                      </div>
                      <button
                        className="rounded-lg bg-red-500 py-2 px-4 text-sm text-white outline-none duration-500 hover:bg-red-700 hover:outline-none"
                        onClick={(e) => handleDelete(e, comment.id)}
                      >
                        <BsTrashFill />
                      </button>
                    </div>
                    <hr />
                  </div>
                );
              })
          ) : (
            <h1 className="text-center">No Data</h1>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import eventData from "../data";
import { BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { FiCopy } from "react-icons/fi";
import qs from "querystringify";
import { toast, ToastContainer } from "react-toastify";

export default function ManageComment() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");

  const getComments = async () => {
    let url = `${import.meta.env.VITE_JSON_URL}/events/${eventData.eventId}/comments?name_like=${search}`;
    let { data } = await axios(url);
    setComments(data);
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

  const handleCopy = async (e, to) => {
    let params = qs.stringify({ to }, true);
    let url = `${window.location.hostname}/${params}`;
    navigator.clipboard.writeText(url);
    toast.success("Link berhasil disalin", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    getComments();
  }, [search]);

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
            comments.map((comment, index) => {
              return (
                <>
                  <div key={comment.id} className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span>
                        {index + 1}. {comment.name}
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
                </>
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

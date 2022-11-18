import React, { useEffect, useRef, useState } from "react";
import useCheckGuest from "../hooks/useCheckGuest";
import useQuery from "../hooks/useQuery";
import { BiSend } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import eventData from "../data";
import moment from "moment/moment";
import qs from "querystringify";
import { FiClock } from "react-icons/fi";
import { CgSpinnerTwo } from "react-icons/cg";

function FormComment({ getComments }) {
  const query = useQuery();
  const to = query.get("to");
  const isOnList = useCheckGuest(to);

  const commentRef = useRef();
  const nameRef = useRef();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let comment = commentRef.current.value;
    let name = nameRef.current.value;

    if (!comment) {
      toast.error("There is no wishes", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }

    let url = `${import.meta.env.VITE_JSON_URL}/comments`;
    await axios
      .post(url, {
        name,
        comment,
        eventId: eventData.eventId,
        timestamp: moment(),
      })
      .then(() => {
        toast.success("Thank you for your wishes! 😊", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        commentRef.current.value = "";
        getComments();
      })
      .catch(() => {
        toast.error("Error! ☹️", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return isOnList ? (
    <div className="w-full px-4">
      <form className="flex w-full flex-col space-y-4" onSubmit={handleSubmitForm}>
        <input
          ref={nameRef}
          type="text"
          className="w-full rounded-full py-2 px-4 outline-none duration-300 focus:outline-none focus:ring focus:ring-primary-100"
          value={to}
          readOnly={true}
          data-aos="fade-up"
        />
        <textarea
          ref={commentRef}
          name=""
          id=""
          cols="30"
          rows="5"
          className="w-full rounded-2xl py-2 px-4 outline-none duration-300 focus:outline-none focus:ring focus:ring-primary-100"
          placeholder="Your wishes..."
          data-aos="fade-up"
        ></textarea>
        <div className="flex justify-end" data-aos="fade-up">
          <button
            type="submit"
            className="flex items-center justify-center space-x-2 rounded-full bg-primary-100 py-2 px-4 outline-none duration-300 hover:bg-primary-200 focus:outline-none focus:ring focus:ring-primary-700"
          >
            <span>Kirim</span> <BiSend />
          </button>
        </div>
      </form>
      <div className="mt-6 h-[1px] w-full bg-primary-100/50"></div>
    </div>
  ) : (
    ""
  );
}

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [limit, setLimit] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(true);

  const getComments = async () => {
    let url = `${import.meta.env.VITE_JSON_URL}/comments?eventId=${eventData.eventId}&_page=1&_limit=${limit}&_sort=timestamp&_order=desc`;
    let { data } = await axios(url);
    setComments(data);
    setIsLoading(false);
    if (data.length < limit) {
      setShowMore(false);
    }
  };

  const handleShowMore = () => {
    setIsLoading(true);
    setLimit((prevState) => prevState + 5);
  };

  useEffect(() => {
    getComments();
  }, [limit]);

  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <div className="flex w-full flex-col items-center justify-center space-y-10 overflow-hidden rounded-3xl bg-primary-100/30 py-10 lg:w-2/3">
        <h1 className="text-center font-cursive text-6xl" data-aos="fade-up">
          Best Wishes
        </h1>
        <FormComment {...{ getComments }} />
        <div className="flex w-full flex-col items-center justify-center space-y-4" data-aos="fade-up">
          {comments.map((comment, index) => {
            return (
              <div key={index} className="w-full" data-aos="fade-up">
                <div className="w-full bg-primary-100/20 py-2 px-4 duration-500 hover:bg-primary-100/50">
                  <div className="flex flex-col space-x-2 lg:flex-row">
                    <span className="font-medium">{comment.name}</span>
                    <span className="flex items-center space-x-2 font-normal text-gray-400">
                      <FiClock />
                      <span>{moment(comment.timestamp).fromNow()}</span>
                    </span>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              </div>
            );
          })}

          {showMore ? (
            <div data-aos="fade-up">
              <button
                className={`${isLoading ? "bg-primary-900 text-white" : "bg-primary-100 hover:bg-primary-200"}  rounded-full py-2 px-4 duration-200`}
                onClick={handleShowMore}
                disabled={isLoading ? true : false}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <span className="animate-spin">
                      <CgSpinnerTwo />
                    </span>
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Show More..."
                )}
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

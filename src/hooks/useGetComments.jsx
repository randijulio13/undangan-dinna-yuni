import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useGetComments({ slug }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      let { data } = await axios(`${import.meta.env.VITE_JSON_URL}/comments?event.slug=${slug}`);
      setComments(data);
    };
    getComments();
    return comments;
  }, [slug]);
}

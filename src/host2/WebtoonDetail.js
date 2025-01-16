import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function WebtoonDetail() {
  const { id } = useParams();
  console.log(id);
  const [webtoon, setWebtoon] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/xnldjskdhsaht/webtoon/webtoon/${id}`
        );
        setWebtoon(response.data);
      } catch (error) {
        console.error("에러");
      }
    };
    data();
  }, [id]);

  console.log(webtoon);

  return (
    webtoon && (
      <div className="detailbox">
        <div className="image">
          <img src={webtoon?.img} alt={webtoon?.title} />
        </div>
        <div className="contents">
          <h2>{webtoon?.title}</h2>
          <p>{webtoon?.writer}</p>
          <p>{webtoon?.ex}</p>
        </div>
      </div>
    )
  );
}

export default WebtoonDetail;

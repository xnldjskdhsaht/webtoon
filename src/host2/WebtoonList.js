import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

function WebtoonList() {
  const [webtoon, setWebtoon] = useState([]);
  const [query] = useSearchParams();
  const week = [
    {
      id: 1,
      text: "월요웹툰",
    },

    {
      id: 2,
      text: "화요웹툰",
    },

    {
      id: 3,
      text: "수요웹툰",
    },

    {
      id: 4,
      text: "목요웹툰",
    },

    {
      id: 5,
      text: "금요웹툰",
    },

    {
      id: 6,
      text: "토요웹툰",
    },

    {
      id: 7,
      text: "일요웹툰",
    },
  ];

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/xnldjskdhsaht/webtoon/webtoon"
        );
        setWebtoon(response.data);
      } catch (error) {
        console.error("에러");
      }
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      const searchQuery = query.get("q") || "";
      console.log(searchQuery);
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/xnldjskdhsaht/webtoon/webtoon?q=${searchQuery}`
        );

        const filterData = response.data.filter((item) =>
          item.title.includes(searchQuery)
        );
        setWebtoon(filterData);
      } catch (error) {
        console.error("에러");
      }
    };
    data();
  }, [query]);

  return (
    <div className="allwebtoon">
      {week.map((i) => {
        return (
          <ul key={i.id}>
            <h3>{i.text}</h3>
            {webtoon
              .filter((p) => p.day === i.id)
              .map((webtoon) => {
                return (
                  <li key={webtoon.id}>
                    <Link to={`webtoon/${webtoon.id}`}>
                      <figure>
                        <img src={webtoon.img} alt={webtoon.title} />
                      </figure>
                      <p>{webtoon.title}</p>
                    </Link>
                  </li>
                );
              })}
          </ul>
        );
      })}
    </div>
  );
}

export default WebtoonList;

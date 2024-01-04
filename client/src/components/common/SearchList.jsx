import React from "react";
import ReactIcon from "../../assets/react.svg";

const SearchList = ({ data, getTags }) => {
  return (
    <section className="flex p-5 m-5  xl:w-[75rem] ">
      <div className="image-section pr-5 flex justify-center items-center">
        <img
          src={data.photos[0]}
          alt="photos-1"
          className="rounded-xl w-[25rem] "
        />
      </div>
      <div className="content-section flex flex-col gap-2 w-full">
        <a href={data.url} target="_blank" className="text-3xl">
          {data.title}
        </a>
        <p className="text-sm mt-4">{data.description.substring(0, 99)}...</p>
        <a
          href={data.url}
          target="_blank"
          className="text-sm underline decoration-cyan-500 text-cyan-500 w-fit"
        >
          อ่านต่อ
        </a>
        <div className="flex gap-5 text-sm">
          <p>หมวด: </p>
          {data.tags.map((item, index) => {
            if (index === data.tags.length - 1) {
              return (
                <div key={index} className="flex gap-5 text-sm">
                  <p>และ</p>{" "}
                  <p
                    className="underline text-sm cursor-pointer"
                    onClick={getTags}
                  >
                    {item}
                  </p>
                </div>
              );
            } else {
              return (
                <p
                  onClick={getTags}
                  className="underline text-sm cursor-pointer"
                  key={index}
                >
                  {item}
                </p>
              );
            }
          })}
        </div>
        <div className="bottom-content flex justify-between gap-5 xl:pr-10">
          <div className="bottom-image flex gap-5">
            {data &&
              data.photos.map((item, index) => {
                if (index === 0) {
                  return;
                } else {
                  return (
                    <img
                      key={index}
                      src={item}
                      alt={`image-${index}`}
                      className="h-[5rem] rounded-xl"
                    />
                  );
                }
                10;
              })}
          </div>
          <img
            title="Copy link"
            className="hover:animate-spin cursor-pointer"
            src={ReactIcon}
            alt="Copy-icon"
            onClick={() => {
              const link = data.url;
              navigator.clipboard.writeText(link);
              alert(`link Copyed !`);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchList;

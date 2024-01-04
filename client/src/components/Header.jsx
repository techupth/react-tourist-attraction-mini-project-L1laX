import React from "react";

const Header = ({ getWords, words }) => {
  return (
    <section className="flex flex-col justify-center items-center border-b-2 mx-8 mt-4">
      <h1 className="text-7xl mt-14">เที่ยวไหนดี</h1>
      <div className="input-box  w-full flex flex-col gap-5">
        <h3 className="mt-5">คำที่เกี่ยวข้อง</h3>
        <input
          className="w-full placeholder:text-center text-center"
          type="text"
          value={words}
          placeholder="หาที่เที่ยวแล้วไปกัน .."
          name="search"
          onChange={getWords}
        />
      </div>
    </section>
  );
};

export default Header;

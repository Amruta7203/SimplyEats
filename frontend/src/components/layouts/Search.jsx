import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search Your Favourite Restaurant ..."
          id="search_field"
          className="form-control"
        />
        <div className="input-group-append">
            <button id="search_btn" className="btn">
                <IoSearch className="io5 IoSearch"/>
            </button>
        </div>
      </div>
    </form>
  );
}

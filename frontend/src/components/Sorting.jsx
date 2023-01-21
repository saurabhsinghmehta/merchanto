import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/Sorting/actiontype";

function Sorting() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Sortingreducer.data);
  // console.log(data)

  const [searchParams, setsearchParams] = useSearchParams();
  const initialCategory = searchParams.get("option");
  const initialsort = searchParams.getAll("sort");
  const [sort, setsort] = useState(initialsort[0] || "");
  const [option, setoption] = useState(initialCategory || "biryani");

  const handlefilter = (e) => {
    setoption(e.target.value);
  };
  const handlesort = (e) => {
    setsort(e.target.value);
  };
  useEffect(() => {
    let params = {};
    params.option = option;
    setsearchParams(params);
  }, []);

  useEffect(() => {
    let params = {};
    params.option = option;
    sort && (params.sort = sort);
    setsearchParams(params);
    dispatch(getData(params));
    console.log(data);
  }, [option, setsearchParams, sort]);

  // console.log(option)
  return (
    <div style={{ width: "300px" }}>
      <h1 style={{ marginBottom: "2%" }}>Filter Component</h1>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="men"
            checked={option.includes("men")}
          />
        </div>{" "}
        <div>
          <input
            type="checkbox"
            onChange={handlefilter}
            value="women"
            checked={option.includes("women")}
          />
        </div>
      </div>
    </div>
  );
}

export default Sorting;

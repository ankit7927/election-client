import { React, useEffect, useState } from "react";
import axios from "../extras/reqHelper";
import ElectionCard from "../components/ElectionCard";


const ElectionPage = () => {
  const [allEle, setAllEle] = useState([]);

  useEffect(() => {
    axios.get("/public/all-election")
      .then((res) => { setAllEle(res.data) })
      .catch(err => console.log(err))
  }, []);

  return (
    <div class="row mb-2">
      {
        allEle.map((ele) => {
          return (
            <ElectionCard data={ele} />
          )
        })
      }
    </div>
  );
};

export default ElectionPage;

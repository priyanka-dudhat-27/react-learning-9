import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page]);

  return <div>
    <div>
        <button disabled={(page===0)} onClick={()=>{setPage(page-1)}}>Prev</button>
        <button>{page}</button>
        <button disabled={(page===product.length)} onClick={()=>{setPage(page+1)}}>Next</button>
    </div>
    <h2>Pagination</h2>
    {
        product.map((item,index)=><Card {...item}/>)
    }
  </div>;
};

export default Home;

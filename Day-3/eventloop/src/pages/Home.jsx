import React from 'react'


const Home = () => {

    function eventloop(){
        console.log("I'm non-blocking code");
        setTimeout(() => {
            console.log("I'm setTimeout")
        }, 2000);
        const abc=async()=>{
           await console.log("I'm Promice")
        }
        abc();
        console.log("I'm coder")
    }
    eventloop()
  return (
    <div>Home</div>
  )
}

export default Home
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage } from "../redux/reduxSlice";
import "./Home.css";

function Home() {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state) => state);
  const [temp, setTemp] = useState<any | []>([]);
  let tempData: any;
  useEffect(() => {
    dispatch(fetchImage());
    // if (data.image.data.photos !== undefined) {
    //   let arr: any = [];
    //   for (let i = 0; i < tempData.length; i++) {
    //     let obj = {
    //       data: tempData[i],
    //       like: false,
    //     };
    //     arr.push(obj);
    //   }
    //   setTemp(arr);
    // }
  }, []);
  // if (data.image.data.photos !== undefined) {
  //   localStorage.setItem("image", JSON.stringify(data.image.data.photos));
  //   tempData = JSON.parse(localStorage.getItem("image") as string);
  //   console.log("TEMP", tempData);
  // }

  // const likeHandler = (e: any) => {
  //   tempData = JSON.parse(localStorage.getItem("image") as string);
  //   for (let i = 0; i < temp.length; i++) {
  //     if (e === temp[i].data.id && temp[i].like === false) {
  //       temp[i].like = true;
  //       console.log(temp[i].like, temp[i].data.alt);
  //     } else if (e === temp[i].data.id && temp[i].like === true) {
  //       temp[i].like = false;
  //       console.log(temp[i].like, temp[i].data.alt);
  //     }
  //   }
  //   setTemp([...temp]);
  // };
  // if (temp.length > 0) {
  //   localStorage.setItem("image", JSON.stringify(temp));
  // }
  return (
    <div>
      <center>
        <h1>Image Gallery</h1>
        {/* {temp.map((val: any, index: number) => (
          <div key={index} className="imageDiv">
            <div>
              <img className="image" src={val.data.src.original} alt="" />
            </div>
            <div>
              <button
                onClick={() => likeHandler(val.data.id)}
                className="likeBtn"
              >
                <i
                  className="far fa-heart"
                  style={{ fontSize: "48px", color: "red" }}
                ></i>
                {val.like === true ? <span>Like</span> : <span>No Like</span>}
              </button>
            </div>
          </div>
        ))} */}
      </center>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage } from "../redux/reduxSlice";
import "./Home.css";
import CircularIndeterminate from "./Loader";

function Home() {
  // Dispatch Method
  const dispatch: any = useDispatch();
  const data: any = useSelector((state) => state);
  const [display, setDisplay] = useState<any | []>([]);
  // UseEffect For Dispatch Action
  useEffect(() => {
    dispatch(fetchImage());
    setDisplay(JSON.parse(localStorage.getItem("image") as any));
    localStorage.setItem("image", JSON.stringify(display));
  }, []);
  // Like Button Function
  const likeHandler = (e: any) => {
    for (let i = 0; i < display.length; i++) {
      if (e === display[i].id && display[i].like === false) {
        display[i].like = true;
      } else if (e === display[i].id && display[i].like === true) {
        display[i].like = false;
      }
    }
    setDisplay([...display]);
  };
  // Comment Button Function
  const commentHandler = (e: any) => {
    for (let i = 0; i < display.length; i++) {
      if (e === display[i].id) {
        let tempComment = prompt("Type Comments...");
        display[i].comment = tempComment;
        break;
      }
    }
    setDisplay([...display]);
  };
  return (
    <div>
      <center>
        <h1>Image Gallery</h1>
        {/* Display Using Map */}
        {data.image.loading === false ? (
          display.map((val: any, index: number) => (
            <div key={index} className="imageDiv">
              <div>
                <img className="image" src={val.data} alt="" />
              </div>
              <span>
                <button onClick={() => likeHandler(val.id)} className="likeBtn">
                  {val.like === true ? (
                    <span>
                      <i
                        className="fas fa-heart"
                        style={{ fontSize: "48px", color: "red" }}
                      ></i>
                    </span>
                  ) : (
                    <span>
                      <i
                        className="far fa-heart"
                        style={{ fontSize: "48px", color: "red" }}
                      ></i>
                    </span>
                  )}
                </button>
              </span>
              <span>
                <button
                  onClick={() => commentHandler(val.id)}
                  className="likeBtn"
                >
                  <i
                    className="fas fa-comment"
                    style={{ fontSize: "48px", color: "black" }}
                  ></i>
                </button>
              </span>
              {val.comment !== "" ? (
                <div className="commentDiv">{val.comment}</div>
              ) : (
                <div></div>
              )}
            </div>
          ))
        ) : (
          <CircularIndeterminate />
        )}
      </center>
    </div>
  );
}

export default Home;

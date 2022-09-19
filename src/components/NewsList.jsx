import React, { useContext, useEffect, useState } from "react";
import "../newsList.css";
import { ListContext } from "../App";

const NewsList = () => {
  const { stories, setStories , bookMark , setBookMark} = useContext(ListContext);

  const bookMarkFunction = (index) => {
    let d = stories.map((e, i) => {
      if (index == i) {
        e = { ...e, marked: !e.marked };
       // setBookMark([...bookMark, e])
      }
      return e;
    });
    setStories(d);
  };

  return (
    <>
      {stories.map((story, index) => {
        return (
          <div
            className="alert alert-success m-5 pb-5 btnList"
            role="alert "
            onClick={() => {
              bookMarkFunction(index);
            }}
            key={index}
          >
            <h3 className="alert-heading">{story.by}</h3>
            <h5>{story.title}</h5>
            <hr />
            <a href={`${story.url}`}>{story.url}</a>
            <br />
            {story.marked === true ? (
              <button type="button" className="close" data-dismiss="alert">
                <span aria-hidden="true">
                  <h6>Bookmarked</h6>
                </span>
              </button>
            ) : (
              <button type="button" className="close" data-dismiss="alert">
                <span aria-hidden="true">
                  <h6></h6>
                </span>
              </button>
            )}
          </div>
        );
      })}
    </>
  );
};

export default NewsList;

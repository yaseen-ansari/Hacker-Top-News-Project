import React, { useContext } from "react";

import { ListContext } from "../App";
const Bookmark=()=>{

   const { stories  , setStories} = useContext(ListContext);
//   const { bookmark  , setBookMark} = useContext(ListContext);


  //  console.log(Bookmark, "i am in book mark")
   
    return (
        <>
        
            {

                // <div>hi</div>
                stories.map((story , index)=>{
                    return (story.marked == true)?
                     (
                    <div
                    className="alert alert-success m-5 pb-5 btnList"
                    role="alert "
                    key={index}
                  >
                    <h3 className="alert-heading">{story.by}</h3>
                    <h5>
                    {story.title}    
                    </h5>
                    <hr />
                    <a href={`${story.url}`}>{story.url}</a><br />
                    {
                      story.marked == 'true' ? <button type="button" className="close" data-dismiss="alert">
                      <span aria-hidden="true">
                        <h6>Bookmarked</h6>
                      </span>
                    </button> : <button type="button" className="close" data-dismiss="alert">
                      <span aria-hidden="true">
                        <h6></h6>
                      </span>
                    </button>
                    }
                    
                  </div>
                  
                  ):[]
                })
              }
        
        </>
        
    )
}

export default Bookmark;
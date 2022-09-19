import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Bookmark from "./components/Bookmark";
import Login from "./components/login";
import { createContext } from "react";

import { Routes, Route } from "react-router-dom";

export const ListContext = createContext();

//  import { fetchTopStoriedIds, fetchStories , fetchStory} from "./newsApi/Api";

function App() {
  const [stories, setStories] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  let storyArr = [];
  const HN_HOST = "https://hacker-news.firebaseio.com/v0";

  const fetchTopStoriedIds = async () => {
    const responce = await fetch(`${HN_HOST}/topstories.json`);
    const topStoriesIds = await responce.json();

    // const topStoriesIds = [32839943, 32858809, 32871031];
    let l = await fetchStories(topStoriesIds);
    // console.log(l)
    setStories(l);
  };

  const fetchStories = async (topStoriesIds) => {
    const stories = await Promise.all(topStoriesIds.map(fetchStory));
    console.log(stories);
    //  storyArr.push(stories);
    return stories;
  };

  const fetchStory = async (id) => {
    const responce = await fetch(`${HN_HOST}/item/${id}.json`);
    const storyData = await responce.json();
    // console.log(storyData);
    return { ...storyData, marked: false };
  };

  useEffect(() => {
    fetchTopStoriedIds();
  }, []);

  

  return (
    <>
      <ListContext.Provider value={{ stories, setStories }}>
        
      <Header />
        <Routes>
                 
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<NewsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="bookmark" element={<Bookmark stories={stories} />} />
        </Routes>
      </ListContext.Provider>
    </>
  );
}
export default App;

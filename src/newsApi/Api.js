// const HN_HOST = 'https://hacker-news.firebaseio.com/v0';
// let storyArr = [];
// export const fetchTopStoriedIds = async ()=>{
//   const responce = await fetch(`${HN_HOST}/topstories.json`);
//   const topStoriesIds = await responce.json();
//  return fetchStories(topStoriesIds);
// //setStories(fetchStories(topStoriesIds));
  
// }

// export const fetchStories = async (topStoriesIds)=>{

// //console.log('i am inside fetch fetchStories')
// const stories = await Promise.all(topStoriesIds.map(fetchStory));
// storyArr.push(stories);
// //setStories(storyArr);
//  return storyArr;
// }

// const fetchStory = async (id)=>{
// // console.log(id)

// const responce = await fetch(`${HN_HOST}/item/${id}.json`);
// const storyData = await responce.json();
// //console.log( storyData)
// //setStories(storyData)
// return storyData;
// }
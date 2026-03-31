import { useState,useEffect } from "react";

export default function UseFetch(){
    const [profiles, setProfiles] = useState([]);
//  state for generating no. of profiles given by user
  const [numberofProfiles,setNumberofProfiles]=useState("");
// state for finding a user
   const [findUser,setFindUser]=useState([]);

  async function generateProfiles(count) {
    const ran = Math.floor(Math.random() * 1000); 
    const response = await fetch(
      `https://api.github.com/users?since=${ran}&per_page=${count}`
    );
    const data = await response.json();
    setNumberofProfiles("");
    setProfiles(data);
  }
  async function generateUser(userName){
    const response=await fetch(`https://api.github.com/users/${userName}`);
    const data=await response.json();
    setFindUser("");
    setProfiles([data]);
  }
//  for showing 10 profiles initially
  useEffect(() => {
    generateProfiles(10);
  }, []);

  return {numberofProfiles,setNumberofProfiles,findUser,setFindUser,profiles,generateProfiles,generateUser};
}
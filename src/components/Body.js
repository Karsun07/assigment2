import { useEffect, useState } from "react";
import useFetch from "./useFetch";
export default function Body() {
    // custom hook for code reusability
    const {numberofProfiles,setNumberofProfiles,findUser,setFindUser,profiles,generateProfiles,generateUser}=useFetch();

  return (
    <div className="container">
        {/* for generating given number of profiles */}
        <input type="number" placeholder="enter number" 
          value={numberofProfiles} onChange={(e)=>setNumberofProfiles(e.target.value)}>
        </input>
        <button onClick={() => generateProfiles(Number(numberofProfiles))}>Search Profiles</button>

        {/* for searching a user */}
        <input type="text" placeholder="enter username" value={findUser} onChange={(e)=>setFindUser(e.target.value)}></input>
        <button onClick={()=>generateUser(findUser)}>Find Username</button>

        {/* displaying profiles*/}
        <div className="githubProfiles">
        {Array.isArray(profiles) &&
        profiles.map((value) => (
        <div className="allprofiles" key={value.id}>
        <img src={value.avatar_url} alt="avatar" width="100" />
        <h2>{value.login}</h2>
        <a href={value.html_url} target="_blank" rel="noreferrer">View Profile</a>
    </div>
  ))}
    </div>
    </div>
  );
}
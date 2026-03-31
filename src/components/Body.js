import { useEffect, useState } from "react";

export default function Body() {
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
    setProfiles(data);
  }
  async function generateUser(userName){
    const response=await fetch(`https://api.github.com/users/${userName}`);
    const data=await response.json();
    setProfiles([data]);
  }
//  for showing 10 profiles initially
  useEffect(() => {
    generateProfiles(10);
  }, []);

  return (
    <div className="container">
        {/* for generating given number of profiles */}
        <input type="number" placeholder="enter number" 
          value={numberofProfiles} onChange={(e)=>setNumberofProfiles(e.target.value)}>
        </input>
        <button onClick={() => generateProfiles(Number(numberofProfiles))}>Search Profiles</button>

        {/* for searching a user */}
        <input type="text" placeholder="enter username" value={findUser} onChange={(e)=>setFindUser(e.target.value)}></input>
        <button onClick={()=>generateUser(findUser)}>Find User</button>

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
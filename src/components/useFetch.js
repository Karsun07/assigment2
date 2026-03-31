import { useState, useEffect } from "react";

export default function UseFetch() {
  const [profiles, setProfiles] = useState([]);
  const [numberofProfiles, setNumberofProfiles] = useState("");
  const [findUser, setFindUser] = useState([]);

  async function generateProfiles(count) {
    try {
      const ran = Math.floor(Math.random() * 1000);
      const response = await fetch(
        `https://api.github.com/users?since=${ran}&per_page=${count}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setNumberofProfiles("");
      setProfiles(data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  }

  async function generateUser(userName) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${userName}`
      );
      if (!response.ok) {
        throw new Error(`User not found: ${response.status}`);
      }

      const data = await response.json();
      setFindUser("");
      setProfiles([data]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  useEffect(() => {
    generateProfiles(10);
  }, []);

  return {numberofProfiles,setNumberofProfiles,findUser,setFindUser,profiles,generateProfiles,generateUser};
}
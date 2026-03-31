import { useEffect, useState } from "react";

export default function Body() {
  const [profiles, setProfiles] = useState([]);  
  async function generateProfiles(count) {
    const ran = Math.floor(Math.random() * 1000); 
    const response = await fetch(
      `https://api.github.com/users?since=${ran}&per_page=${count}`
    );
    const data = await response.json();
    setProfiles(data);
  }

  useEffect(() => {
    generateProfiles(10);
  }, []);

  return (
    <div className="githubProfiles">
      {Array.isArray(profiles) &&
  profiles.map((value) => (
    <div className="allprofiles" key={value.id}>
      <img src={value.avatar_url} alt="avatar" width="100" />
      <h2>{value.login}</h2>
      <a href={value.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  ))}
    </div>
  );
}
# GitHub Profile Viewer

A simple and interactive GitHub Profile Viewer built using React.js.
This project allows users to explore GitHub profiles and dynamically fetch user data using the GitHub API.


## Features

* Search GitHub users by username
* Display multiple GitHub profiles
* Control number of profiles displayed
* Fast and dynamic data fetching
* Reusable logic using custom hooks
* Styled with CSS


## Tech Stack

* React.js
* JavaScript (ES6+)
* Parcel (Bundler)
* CSS


## APIs Used

### Fetch multiple users


https://api.github.com/users?since=since&per_page=per_page


* `since` is used to generate random users
* `per_page` controls the number of profiles displayed


### Fetch single user by username


https://api.github.com/users/${userName}


* Used for search functionality


## React Concepts Used

* useState for managing state
* useEffect for handling side effects (API calls)
* Custom Hook (useFetch) for reusable API logic


## Project Structure


/src
 ├── components
 │    ├── Body.js
 │    ├── Header.js
 │    ├── useFetch.js
 ├── Main.js

index.html
style.css
package.json
package-lock.json
.gitignore

## Getting Started

### Clone the repository


git clone https://github.com/your-username/assignment2.git

### Install dependencies

npm install


### Run the project

npm parcel index.html


## Key Highlights

* Built with modern React practices
* Clean and reusable code using custom hooks
* Efficient API handling
* Beginner-friendly project with real-world use case


## Note

GitHub API has rate limits (60 requests per hour without authentication).
If you encounter errors, wait for reset or use a GitHub token.


## Demo

<img width="1905" height="966" alt="image" src="https://github.com/user-attachments/assets/fd1648bb-656b-41dc-8bce-80c15c0b3c4f" />


## Acknowledgements

* GitHub API for providing public user data

## Contact- 

kartiksundriyal2004@gmail.com 
Feel free to connect or give feedback

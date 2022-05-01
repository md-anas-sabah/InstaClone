import { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "md_anas_sabah",
      caption: "Make Them Stop and Stare😎",
      imageURL:
        "https://media-exp1.licdn.com/dms/image/C5603AQGAtM_odmLb7g/profile-displayphoto-shrink_200_200/0/1638384912500?e=1654732800&v=beta&t=TGs1dlGQfsjY2RtyG8fP03YS4zGsiIFEQf_VCPZYGE0",
    },
    {
      username: "iamsrk",
      caption:
        "Shah Rukh agar thoda ruk bhi gaya to pathan ko kaise rokoge.. Apps aur Abs sbko bana dalunga..",
      imageURL: "https://im.rediff.com/movies/2022/mar/28insta1.jpg",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt=""
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
}

export default App;

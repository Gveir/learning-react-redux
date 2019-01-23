import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  const comments = [
    { author: "Sam", date: "Today at 6:00PM", text: "Nice blog post!" }
  ];
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        avatarSrc={faker.image.avatar()}
        timeAgo="Today at 6:00PM"
        comment={comments[0]}
        text="Nice blog post!"
      />
      <CommentDetail
        author="Luke"
        avatarSrc={faker.image.avatar()}
        timeAgo="Today at 6:00AM"
        text="Very nice blog post!"
      />
      <CommentDetail
        author="Jack"
        avatarSrc={faker.image.avatar()}
        timeAgo="Yesterday at 2:00PM"
        text="Interesting blog post!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

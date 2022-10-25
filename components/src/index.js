import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";
import "./style/App.css";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 6:00PM"
          commentText="Not My favorite"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 4:00PM"
          commentText="good Job"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 9:00PM"
          commentText="great Job"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App />);

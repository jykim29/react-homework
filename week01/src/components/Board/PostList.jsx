import React from "react";
import PostItem from "./PostItem";
import { postData } from "/src/data/postData";

export default function PostList() {
  return (
    <ul id="PostList">
      {postData.map((data) => (
        <PostItem key={data.id} {...data} />
      ))}
    </ul>
  );
}

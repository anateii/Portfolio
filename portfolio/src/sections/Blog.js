import React from "react";
import classes from "../styling/Blog.module.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import picture from "../assets/javascript.png";

export const Blog = () => {
  const blogs = [
    {
      id: 1,
      name: "Essential JavaScript Concepts for Learning React ",
      live: "https://medium.com/@anamateidev/essential-javascript-concepts-for-learning-react-8c0dcf508953",
      pic: picture,
    },
    { id: 2, name: "React Learning Guide" },
  ];

  return (
    <div style={{ marginTop: "6em" }}>
      <h1 className={classes.title}>Blogs</h1>\
      <div className={classes.blogsWrapper}>
        {blogs.map((blog) => (
          <div key={blog.id} className={classes.blogColumn}>
            <div className={classes.blogColumn__blogAvatar}>
              <img src={blog.pic} alt="" />
            </div>

            <h3>{blog.name}</h3>
            <div className={classes.blogColumn__logos}>
              <a href={blog.live} rel="noreferrer" target="_blank">
                <FaExternalLinkAlt style={{ fontSize: "16px" }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

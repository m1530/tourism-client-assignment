import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Blog.css';

const Blog = () => {
    const [blog, setBlog] = useState({});
    const { blogId } = useParams();
    // display single blog information by id
    useEffect(() => {
        const url = `https://howling-cat-22658.herokuapp.com/blog/${blogId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [blogId]);
    return (
        <div className="text-start container my-5">
            <h2 className="my-4 blog-title">{blog.name}</h2>
            <p>{blog.desc}</p>
            <img className="single-blog" src={blog.img} alt="" />
        </div>
    );
};

export default Blog;
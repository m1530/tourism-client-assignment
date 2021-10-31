import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Blog.css';

const Blog = () => {
    const [blog, setBlog] = useState({});
    const { blogId } = useParams();

    useEffect(() => {
        const url = `http://localhost:7000/blog/${blogId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);
    return (
        <div className="text-start container my-5">
            <h2 className="my-4 blog-title">{blog.name}</h2>
            <p>{blog.desc}</p>
            <img className="single-blog" src={blog.img} alt="" />
        </div>
    );
};

export default Blog;
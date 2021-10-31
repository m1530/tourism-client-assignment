import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddNewBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // add new service in mongodb using axios
        axios.post('https://howling-cat-22658.herokuapp.com/addBlog', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            });
    };
    return (
        <div className="container my-5">
            <h1 className="my-4 text-center">Create a new Blog</h1>
            {/* add new service fporm */}
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center w-50 mx-auto shadow-lg bg-primary rounded p-5">
                <input className="form-control" {...register("name")} placeholder="Enter package name" />
                <br />
                <input type="url" className="form-control" {...register("img")} placeholder="Input image link" />
                <br />
                <input className="form-control" {...register("desc")} placeholder="Enter package description" />
                <br />
                <input className="btn btn-sm btn-light" type="submit" />
            </form>
        </div>
    );
};

export default AddNewBlog;
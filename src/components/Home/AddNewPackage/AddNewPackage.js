import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddNewPackage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:7000/services', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="container my-5">
            <h1 className="my-4 text-center">Create a new service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center w-50 mx-auto shadow-lg bg-primary rounded p-5">
                <input className="form-control" {...register("name")} placeholder="Enter package name" />
                <br />
                <input className="form-control" {...register("duration")} placeholder="Enter package duration" />
                <br />
                <input className="form-control" {...register("price")} placeholder="Enter package price" />
                <br />
                <input className="form-control" {...register("desc")} placeholder="Enter package description" />
                <br />
                <input type="url" className="form-control" {...register("img")} placeholder="Input image link" />
                <br />
                <input className="btn btn-sm btn-light" type="submit" />
            </form>
        </div>
    );
};

export default AddNewPackage;
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const Subscribe = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // add new service in mongodb using axios
        axios.post('https://howling-cat-22658.herokuapp.com/subscribe', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Subscribe successfully');
                    reset();
                }
            });
    }
    return (
        <div className="bg-dark">
            <div className="Subscribe container">
                <div className="row p-5">
                    <div className="col-md-6 text-white text-start">
                        <h1>Subscribe Our Newsletter</h1>
                        <p>Subscribe newsletter to get offers and <br /> about new places to discover.</p>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
                            <input className="form-control me-3" {...register("email")} placeholder="Enter email for subscribe" />
                            <input className="btn btn-sm btn-danger" type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Subscribe;
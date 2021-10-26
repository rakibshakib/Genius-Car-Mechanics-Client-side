import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, formState: { errors } , reset} = useForm();
    const onSubmit = data => {
        axios.post('https://immense-sea-79132.herokuapp.com/services', data)
        .then(res=> {
            if(res.data?.insertedId){
                alert("Data Added.. 😊");
                reset();
            }
        })
    };
    return (
        <div className='add-service'>
            <h2>Add Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>           
                <input  {...register("name" , { required: true })} placeholder='Add Service Name' />
                {errors.name && <span>This field is required</span>}    
                <textarea  {...register("description" , { required: true })}  placeholder="Add Service Description" />
                {errors.description && <span>This field is required</span>}    
                <input type='number'  {...register("price" , { required: true })} placeholder='Service Cost' />
                {errors.price && <span>This field is required</span>}    
                <input {...register("image", { required: true })} placeholder='Service Display Image URL' />
                {errors.image && <span>This field is required</span>}           
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddService

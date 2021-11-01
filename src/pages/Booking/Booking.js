import React, { useState } from 'react';
import './Booking.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';;


const Booking= () => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const[ orders,setOrders]= useState([])

    const { user } = useAuth();
    const email=user.email;
    const onSubmit = data => {
        
fetch(`http://localhost:5000/myOrders/${email}}`).then((response) => response.json()).then(data => {
    setOrders(data)
})
data.order=orders;
fetch("http://localhost:5000/addOrdersForm",{
          method:"POST",
          headers: {'content-type': "application/json"},
          body: JSON.stringify(data)


      })
        
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} required {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Booking;
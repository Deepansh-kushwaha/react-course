import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Forms() {
  const schema = yup.object().shape({
    fullname: yup.string().required("full name is required"),
    email: yup.string().email("enter valid email").required("email is required"),
    age: yup.number().positive().integer().required("enter a valid age").min(18),
    password: yup.string().min(4).max(10).required(),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null],"password must match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          {...register("fullname")}
        /> <span>{errors.fullname?.message}</span>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        /> <span>{errors.email?.message}</span>
        <br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          defaultValue={0}
          {...register("age")}
        /> <span>{errors.age?.message}</span>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        /> <span>{errors.password?.message}</span>
        <br />
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          {...register("confirmpassword")}
        /> <span>{errors.confirmpassword?.message}</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;

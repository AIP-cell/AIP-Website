"use client";
import React from "react";
import InputField from "./InputField";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CustomRadio from "@/components/custom/CustomRadio";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Form = () => {
  const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Email is required"),
    message: z.string().min(2, "Message is required"),
  });
  type TContactSchema = z.infer<typeof contactSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = (data: TContactSchema) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  ">
      <div className="grid lg:grid-cols-2 ~gap-[2.5rem]/0">
        <div>
          <CustomRadio />
        </div>
        <div className="flex flex-col lg:pl-[7.875rem] w-full gap-[1.75rem]">
          <InputField
            register={register("name")}
            type="text"
            error={errors}
            label="Name"
            placeholder="Enter your name"
          />
          <InputField
            register={register("email")}
            error={errors}
            type="email"
            label=" Email ID"
            placeholder="Enter your email"
          />

          <div>
            <label className="font-inter leading-[1.225rem] text-sm font-semibold text-gray80">
              Message
            </label>
            <textarea
              {...register("message")}
              placeholder="Please type your message"
              className=" pt-[1rem] pl-[1.25rem] w-full border border-gray-300 rounded-md text-gray80 font-inter h-28"
            />
            {errors && (
              <p className="text-global-body-4 text-red-500">{`${errors.message}`}</p>
            )}
          </div>

          <ButtonAnimation
            type="submit"
            className="text-white hover:text-darkPurple leading-[1.225rem] bg-darkPurple hover:bg-white w-[8.0625rem] h-[2.75rem] rounded-[1.5rem] cursor-pointer text-h9Copy5 "
          >
            Send Email
          </ButtonAnimation>
        </div>
      </div>
    </form>
  );
};

export default Form;

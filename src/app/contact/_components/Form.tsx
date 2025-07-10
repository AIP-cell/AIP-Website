"use client";
import { useState } from "react";
import InputField from "./InputField";
import CustomRadio from "@/components/custom/CustomRadio";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Api } from "@/api/Api";
import { Turnstile } from "@marsidev/react-turnstile";
// import { load } from "recaptcha-v3";

const radioArray = [
  "I'm a Philanthropist/Foundation",
  "I'm a Researcher/Academia",
  "I’m an NPO",
  "I'm Curious",
];
const Form = () => {
  const [type, setType] = useState<string>(radioArray[0]);
  const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Email is required"),
    message: z.string().min(2, "Message is required"),
  });
  type TContactSchema = z.infer<typeof contactSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const { mutateAsync, error } = useMutation({
    mutationFn: async (formData: TContactSchema & { captchaToken: string }) => {
      // const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

      // const recaptcha = await load(key || "");
      // const token = await recaptcha?.execute("formSubmit");
      const response = Api.postContact({
        ...formData,
        type,
        // recaptcha_token: token,
      });
      return response;
    },
    onSuccess: () => {
      toast.success("Successfully Send");
      reset();
    },
    onError: () => {
      toast.error("Error Submitting");
      console.log("error:::", error);
    },
  });

  const onSubmit = async (formData: TContactSchema) => {
    await mutateAsync({ ...formData, captchaToken });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  ">
      <div className="grid lg:grid-cols-2 ~gap-[2.5rem]/0">
        <div>
          <CustomRadio type={type} setType={setType} radioArray={radioArray} />
        </div>
        <div className="flex flex-col lg:pl-[7.875rem] w-full gap-[1.75rem]">
          <InputField
            register={register("name")}
            type="text"
            error={errors?.name}
            label="Name"
            placeholder="Enter your name"
          />
          <InputField
            register={register("email")}
            error={errors?.email}
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
            {errors.message && (
              <p className=" text-red-500 ">{`${errors.message.message}`}</p>
            )}
          </div>
          <Turnstile
            siteKey={
              process.env.CLOUDFLARE_SITE_KEY || "0x4AAAAAABfxnn3acb9_jlcJ"
            }
            onSuccess={(token) => setCaptchaToken(token)}
            onError={() => toast.error("Captcha validation failed")}
            onExpire={() => setCaptchaToken(null)}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white hover:text-darkPurple leading-[1.225rem] bg-darkPurple hover:bg-white transition-all duration-500 w-[8.0625rem] h-[2.75rem] rounded-[1.5rem] cursor-pointer text-h9Copy5 "
          >
            {isSubmitting ? "Submitting Email..." : "Submit Email"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

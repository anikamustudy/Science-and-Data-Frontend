import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      propose: data.propose,
      message: data.message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Purpose</label>
            <select
              {...register("propose", { required: "Purpose is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Purpose</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
            {errors.propose && (
              <p className="text-red-600 text-sm mt-1">
                {errors.propose.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-lg transform transition-all hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

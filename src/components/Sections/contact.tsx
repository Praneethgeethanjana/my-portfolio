"use client";
import SectionWrapper from "@/components/SectionWrapper";
import {SubmitHandler, useForm} from "react-hook-form";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<FormData>({
        mode: "onBlur", // Validates fields when they lose focus
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        // Simulate form submission
        console.log("Form submitted:", data);
        alert("Thank you for your message!");
        reset(); // Reset form fields after submission
    };

    return (
        <SectionWrapper id="contact" title="Contact Me">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg mx-auto bg-white/5 p-6 rounded-lg shadow-xl space-y-4"
            >
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", {required: "Name is required"})}
                        className={`w-full mt-1 p-2 border bg-transparent dark:text-white rounded-lg focus:outline-none ${
                            errors.name ? "border-red-600" : "border-gray-300"
                        }`}
                    />
                    {errors.name && (
                        <p className="text-sm dark:text-red-600 text-red-500 mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email",
                            },
                        })}
                        className={`w-full mt-1 p-2 border bg-transparent dark:text-white  rounded-lg focus:outline-none ${
                            errors.email ? "border-red-600" : "border-gray-300"
                        }`}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500 dark:text-red-600 mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Write your message here..."
                        {...register("message", {required: "Message is required"})}
                        className={`w-full mt-1 p-2 bg-transparent dark:text-white  border rounded-lg focus:outline-none ${
                            errors.message ? "border-red-600" : "border-gray-300"
                        }`}
                    />
                    {errors.message && (
                        <p className="text-sm text-red-500 dark:text-red-600 mt-1">{errors.message.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
            </form>
        </SectionWrapper>
    );
}

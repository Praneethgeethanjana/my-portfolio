"use client";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import SectionWrapper from "@/components/SectionWrapper";

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
    } = useForm<FormData>({mode: "onBlur"});

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const res = await fetch("https://formcarry.com/s/8z5fjvkA7e3", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.code === 200) {
                setSubmitted(true);
                reset();
            } else {
                setError(result.message || "Something went wrong.");
            }
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        }
    };

    return (
        <SectionWrapper id="contact" title="Contact Me">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg mx-auto bg-white/5 p-6 rounded-lg shadow-xl space-y-4"
            >
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-300">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", {required: "Name is required"})}
                        className={`w-full mt-1 p-2 border bg-black bg-opacity-30 dark:text-white rounded-lg focus:outline-none ${
                            errors.name ? "border-red-600" : "border-gray-600"
                        }`}
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-300">
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
                        className={`w-full mt-1 p-2 border bg-black bg-opacity-30 dark:text-white rounded-lg focus:outline-none ${
                            errors.email ? "border-red-600" : "border-gray-600"
                        }`}
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-lg font-medium text-gray-300">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Write your message here..."
                        {...register("message", {required: "Message is required"})}
                        className={`w-full mt-1 p-2 border bg-black bg-opacity-30 dark:text-white rounded-lg focus:outline-none ${
                            errors.message ? "border-red-600" : "border-gray-600"
                        }`}
                    />
                    {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
            </form>

            {/* Success Popup */}
            {submitted && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm">
                        <h2 className="text-xl font-semibold text-green-500">Message Sent!</h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            Thank you for contacting me. I’ll get back to you soon!
                        </p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            onClick={() => setSubmitted(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Error Popup */}
            {error && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm">
                        <h2 className="text-xl font-semibold text-red-500">Oops!</h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{error}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                            onClick={() => setError(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </SectionWrapper>
    );
}

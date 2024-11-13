import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";

export type Email = {
  emailSender: string;
  emailTopic: string;
  emailContent: string;
};

const ContactForm = () => {
  const initialEmailState: Email = {
    emailContent: "",
    emailTopic: "",
    emailSender: "",
  };

  const [email, setEmail] = useState<Email>(initialEmailState);

  const clearEmailState = () => {
    setEmail(initialEmailState);
  };

  const ValidateEmail = (email: string) => {
    const EmailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailValidationPattern.test(email);
  };

  async function EmailPostAsync(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ValidateEmail(email.emailSender)) {
      return Error("Please enter a valid email");
    }

    try {
      await axios.post("https://localhost:7216/api/mail", email);
      clearEmailState(); // Clear form state after successful submission
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white animate-bounce">
        Kontaktuj się z nami!
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Darmowa wycena! Proszę przesłać detale odnośnie projektu, a my go wycenimy!
      </p>
      <form onSubmit={EmailPostAsync} method="post" className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Twój Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@example.com"
            required
            value={email.emailSender} // Bind state to the input
            onChange={(event) =>
              setEmail((prev) => ({
                ...prev,
                emailSender: event.target.value,
              }))
            }
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Plan
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Daj znać jak możemy Ci pomóc!"
            required
            value={email.emailTopic} // Bind state to the input
            onChange={(event) =>
              setEmail((prev) => ({
                ...prev,
                emailTopic: event.target.value,
              }))
            }
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Twoja wiadomość
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Zostaw tutaj swoją wiadomość"
            value={email.emailContent} // Bind state to the textarea
            onChange={(event) =>
              setEmail((prev) => ({
                ...prev,
                emailContent: event.target.value,
              }))
            }
          ></textarea>
        </div>
        <div className="flex justify-center">
          <Button type="submit" variant={"outline"}>
            Wyślij Zapytanie!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

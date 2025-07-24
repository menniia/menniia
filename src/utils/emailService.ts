import emailjs from "@emailjs/browser";

const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

if (
    !VITE_EMAILJS_SERVICE_ID ||
    !VITE_EMAILJS_TEMPLATE_ID ||
    !VITE_EMAILJS_PUBLIC_KEY
) {
    throw new Error("Missing EmailJS environment variables.");
}

emailjs.init(VITE_EMAILJS_PUBLIC_KEY);

const sendEmail = async (
    form: HTMLFormElement
): Promise<{ success: boolean; message: string }> => {
    try {
        const response = await emailjs.sendForm(
            VITE_EMAILJS_SERVICE_ID,
            VITE_EMAILJS_TEMPLATE_ID,
            form
        );
        console.log("Email sent:", response);
        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Email sending failed:", error);
        return { success: false, message: "Failed to send email." };
    }
};

export default sendEmail;

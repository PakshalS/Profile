import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "-100px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(serviceId, templateId, formState, publicKey);
      alert("Message sent successfully!");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setTimeout(() => setIsSubmitting(false), 2000);
    }
  };

    const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "pakshalshah119@gmail.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Bhayander, Thane",
      link: "https://maps.app.goo.gl/ChLki759Ugxnbgz17",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="h-5 w-5" />,
      link: "https://github.com/PakshalS",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      link: "https://www.linkedin.com/in/pakshal-shah-946368244/",
      label: "LinkedIn",
    },
  ];


  return (
    <section
      id="contact"
      className="py-10 lg:pl-35 lg:pr-30 px-6 md:px-12 max-w-full overflow-hidden"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-gray-500">Get in touch with me</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="shadow-lg rounded-lg">
               <CardContent>
                 <h3 className="text-2xl font-bold">Let's Talk</h3>
                 <p className="text-gray-500">
                   Reach out for collaborations or any inquiries.
                 </p>
                 <div className="space-y-4 mt-4">
                   {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="p-4 flex items-center gap-4 rounded-lg"
                    >
                      <div className="p-2 bg-primary/10 rounded-full text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <a
                          href={info.link}
                          target="_blank"
                          className="text-gray-500 hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <h4 className="font-medium mb-3">Connect with me:</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="shadow-lg rounded-lg">
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="p-3 border rounded w-full"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="p-3 border rounded w-full"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="p-3 border rounded w-full"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="p-3 border rounded w-full"
                  ></textarea>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-3 bg-primary rounded-full hover:bg-primary/80 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" /> {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

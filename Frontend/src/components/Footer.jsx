import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-10 border-t">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>&copy; {currentYear} Pakshal Shah.</span>
          <span>All rights reserved.</span>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          <span>using</span>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            React.js
          </a>
          <span>&</span>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            Tailwind CSS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

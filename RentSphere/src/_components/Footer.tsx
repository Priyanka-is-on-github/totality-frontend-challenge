import { Input } from "../components/ui/input";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "../components/ui/button";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are dedicated to helping you find the perfect home or villa for
            rent. Whether you're looking for a cozy apartment or a luxury villa,
            we provide high-quality rental properties tailored to your needs.
            Discover your next home with us, where comfort meets affordability.
          </p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <div className="flex space-x-2">
            <Input
              id="newsletter"
              type="email"
              placeholder="Your Email"
              className="text-black"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-white hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-white hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-white hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} RentSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

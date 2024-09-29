
import React from 'react'
import { Button } from "../components/ui/button";
import {  Input } from "../components/ui/input";
import {  Label} from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone } from "lucide-react"; 
import Layout from '../layout';

function Contact() {
  return (
    <Layout>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 pt-[10%] ">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 ">
        <h1 className="text-2xl font-semibold text-center mb-6 ">Contact Us</h1>
        <p className="text-center text-gray-600 mb-6">
          We would love to hear from you. Please fill out the form below to get in touch.
        </p>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" rows={4} required />
          </div>

          <Button type="submit" className="w-full bg-sky-800">Send Message</Button>
        </form>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" /> info@RentSphere.com
          </p>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> +123 456 7890
          </p>
        </div>
      </div>
    </div>
    </Layout>
    
  )
}

export default Contact
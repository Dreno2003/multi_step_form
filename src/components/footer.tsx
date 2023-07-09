
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";


export const Footer = () => {
	return(

		<>
		<footer className="footer p-10 bg-blue-900 text-gray-50">
		<div>
		<span className="uppercase font-bold text-md text-white">Services</span> 
		<a className="link link-hover">Branding</a> 
		<a className="link link-hover">Design</a> 
		<a className="link link-hover">Marketing</a> 
		<a className="link link-hover">Advertisement</a>
		</div> 
		<div>
		<span className="uppercase font-bold text-md text-white">Company</span> 
		<a className="link link-hover">About us</a> 
		<a className="link link-hover">Contact</a> 
		<a className="link link-hover">Jobs</a> 
		<a className="link link-hover">Press kit</a>
		</div> 
		<div>
		<span className="uppercase font-bold text-md text-white">Company</span> 
		<a className="link link-hover">About us</a> 
		<a className="link link-hover">Contact</a> 
		<a className="link link-hover">Jobs</a> 
		<a className="link link-hover">Press kit</a>
		</div> 
		<div>
		<span className="uppercase font-bold text-md text-white">Social</span> 
		<div className="grid grid-flow-col gap-4">
		<a href=""><FaFacebookSquare className="text-2xl"/></a>
		<a href=""><FaInstagram className="text-2xl"/></a>
		<a href=""><FaTwitterSquare className="text-2xl"/></a>
		</div>
		</div>
		</footer>
		</>

		)

}
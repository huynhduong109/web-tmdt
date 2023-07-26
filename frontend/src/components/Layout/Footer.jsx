import React from "react";
import logo from "../../Assests/Image/FourD.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  const facebookLink = "https://www.facebook.com/profile.php?id=100022564877394";
  const instagramLink = "https://www.instagram.com/h_duong.02/";
  const twitterLink = "https://www.twitter.com/example";
  const youtubeLink = "https://www.youtube.com/@Sontungmtp";

  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Đăng ký</span> để nhận tin tức về{" "}
          <br />
          sự kiện và ưu đãi
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Nhập email của bạn..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Xác nhận
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src={logo}
            alt=""
            style={{ filter: "brightness(0) invert(1)", width: "265px" }}
          />
          <br />
          <p>Thuận lòng người bán, vừa ý người mua</p>
          <div className="flex items-center mt-[15px]">
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <AiFillFacebook size={25} className="cursor-pointer" />
            </a>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "15px", cursor: "pointer" }}>
              <AiOutlineTwitter size={25} />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "15px", cursor: "pointer" }}>
              <AiFillInstagram size={25} />
            </a>
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "15px", cursor: "pointer" }}>
              <AiFillYoutube size={25} />
            </a>
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2023 4D Market. All rights reserved.</span>
        <span>Điều khoản · Chính sách bảo mật</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

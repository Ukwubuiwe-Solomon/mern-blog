import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsDribbble,
  BsGithub,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500 text-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-lg dark:text-white "
            >
              <span className="px-2 py-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Solomon's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup>
                <FooterLink>Full-Stack Developer</FooterLink>
              </FooterLinkGroup>
              <FooterLinkGroup>
                <FooterLink>Solomon's Blog</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Fellow Us" />
              <FooterLinkGroup>
                <FooterLink>GitHub</FooterLink>
              </FooterLinkGroup>
              <FooterLinkGroup>
                <FooterLink>Linkedln</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup>
                <FooterLink>Privacy Policy</FooterLink>
              </FooterLinkGroup>
              <FooterLinkGroup>
                <FooterLink>Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Solomon's Blog"
            year={new Date().getFullYear()}
          />
        </div>
        <div className="flex gap-5 sm:justify-center sm:mt-0 mt-4">
          <FooterIcon href="#" icon={BsFacebook} />
          <FooterIcon href="#" icon={BsTwitter} />
          <FooterIcon href="#" icon={BsInstagram} />
          <FooterIcon href="#" icon={BsDribbble} />
          <FooterIcon href="#" icon={BsGithub} />
        </div>
      </div>
    </Footer>
  );
}

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More way to shop:{" "}
            <span className="underline text-blue cursor-pointer">
              Find an Apple Store{" "}
            </span>{" "}
            or{" "}
            <span className="underline text-blue cursor-pointer">
              other retailers{" "}
            </span>{" "}
            near you{" "}
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call +237 673 954 057
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copiright @2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p key={index} className="font-semibold text-gray text-xs mx-2">
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

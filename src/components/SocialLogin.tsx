import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const SocialLogin: React.FC = () => {

   // Handle social login


  return (
    <div className="flex flex-col gap-2 text-sm font-medium">
        <button className="flex items-center justify-start gap-3 bg-white border border-gray-700 text-dark p-3 rounded-lg cursor-pointer hover:bg-gray-100 w-full">
            <FontAwesomeIcon icon={faGoogle} size="lg" />
            <span className="flex-1 text-center">Tiếp tục với Google</span>
        </button>

        <button className="flex items-center justify-start gap-3 bg-white border border-gray-700 text-dark p-3 rounded-lg cursor-pointer hover:bg-gray-100 w-full">
            <FontAwesomeIcon icon={faApple} size="lg" />
            <span className="flex-1 text-center">Tiếp tục với Apple</span>
        </button>

        <button className="flex items-center justify-start gap-3 bg-white border border-gray-700 text-dark p-3 rounded-lg cursor-pointer hover:bg-gray-100 w-full">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span className="flex-1 text-center">Tiếp tục bằng email</span>
        </button>

        <button className="flex items-center justify-start gap-3 bg-white border border-gray-700 text-dark p-3 rounded-lg cursor-pointer hover:bg-gray-100 w-full">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <span className="flex-1 text-center">Tiếp tục với Facebook</span>
        </button>
    </div>

  );
};

export default SocialLogin;

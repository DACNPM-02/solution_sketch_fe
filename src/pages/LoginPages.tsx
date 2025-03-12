import React, { useState } from "react";
import PhoneNumberInput from "../components/PhoneNumberInput";
import SocialLogin from "../components/SocialLogin";
import OTPModal from "../components/OTPModal";

const LoginPage: React.FC = () => {
  const [countryCode, setCountryCode] = useState("+84");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleContinue = () => {
    if (phoneNumber.trim()) {
      setShowOTP(true);
    }
    else{
        setErrorMessage("Vui lòng nhập số điện thoại.");
        return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-white p-6 rounded-xl shadow-lg w-1/3">
        <div className="border-b border-gray-300 p-3 text-center font-semibold ">
          Đăng nhập hoặc đăng ký
        </div>
        <h1 className="text-xl font-bold mt-4">Chào mừng bạn đến với Rento</h1>
        
        <div className="mt-4">
          <PhoneNumberInput
            countryCode={countryCode}
            phoneNumber={phoneNumber}
            onCountryChange={setCountryCode}
            onPhoneChange={(value) => {
                setPhoneNumber(value);
                setErrorMessage("");
              }}
            />
            {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>

        <button
          className="bg-rose-500 text-white w-full mt-4 p-2 rounded-lg font-semibold cursor-pointer"
          onClick={handleContinue}
        >
          Tiếp tục
        </button>
    
        <p className="text-sm">Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện thoại.</p>
        <div className="my-4 text-center text-gray-500">Hoặc</div>

        <SocialLogin />
      </div>

      {showOTP && (
        <OTPModal phoneNumber={`${countryCode} ${phoneNumber}`} onClose={() => setShowOTP(false)} />
      )}
    </div>
  );
};

export default LoginPage;

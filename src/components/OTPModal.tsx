import React, { useState } from "react";

interface OTPModalProps {
  phoneNumber: string;
  onClose: () => void;
}

const OTPModal: React.FC<OTPModalProps> = ({ phoneNumber, onClose }) => {
  const [otp, setOtp] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-lg">
        <h2 className="text-lg font-bold pb-2 mb-10 border-b border-gray-300 text-center">Xác nhận số điện thoại của bạn</h2>
        <p className="mb-5 ">Nhập mã mà chúng tôi đã gửi qua SMS tới số {phoneNumber}</p>
        <input
          type="text"
          placeholder="Nhập OTP"
          className="border p-2 rounded w-1/3 mt-2"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-5">
          <button onClick={onClose} className="bg-gray-500 text-white px-3 py-2 rounded cursor-pointer hover:bg-gray-700">Hủy</button>
          <button className="bg-green-500 text-white px-3 py-2 rounded cursor-pointer hover:bg-green-700">Xác nhận</button>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;

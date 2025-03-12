import React, { useEffect, useState } from "react";

interface Country {
  code: string;
  name: string;
}

interface PhoneNumberInputProps {
  countryCode: string;
  phoneNumber: string;
  onCountryChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
    countryCode,
    phoneNumber,
    onCountryChange,
    onPhoneChange,
    }) => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
            const formattedCountries = data
            .map((country: any) => ({
                code: country.idd?.root
                ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
                : "",
                name: country.name.common,
            }))
            .filter((country) => country.code !== ""); 
            setCountries(formattedCountries);
        });
    }, []);

    return (
        <div className="flex flex-col w-full">
        <select
            className="border border-gray-300 p-2 mb-2 rounded-lg"
            value={countryCode}
            onChange={(e) => onCountryChange(e.target.value)}
        >
            {countries.map((country) => (
            <option key={country.code} value={country.code}>
                {country.name} ({country.code})
            </option>
            ))}
        </select>

        <input
            type="text"
            placeholder="Nhập số điện thoại"
            className="border border-gray-300 p-2 rounded-lg"
            value={phoneNumber}
            onChange={(e) => onPhoneChange(e.target.value)}
        />
        </div>
    );
};

export default PhoneNumberInput;

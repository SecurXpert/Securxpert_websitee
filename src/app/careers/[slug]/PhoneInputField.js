"use client";

import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function PhoneInputField({ value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] text-[#7A7A7A] font-medium">Contact Number <span className="text-red-500">*</span></label>
      <PhoneInput
        defaultCountry="in"
        value={value}
        onChange={onChange}
        inputClassName="!w-full !px-3 !py-2 !text-sm !border !border-slate-200 !rounded-lg focus:!border-blue-500 focus:!ring-1 focus:!ring-blue-500 focus:!outline-none transition-colors"
        className="flex gap-2 w-full"
        countrySelectorStyleProps={{
          buttonClassName: "!bg-slate-50 !px-2 !py-2 !border !border-slate-200 !rounded-lg !text-sm !text-slate-600 !h-full",
          dropdownStyleProps: {
            className: "!z-50 !mt-1",
            style: {
              width: "250px"
            }
          }
        }}
      />
    </div>
  );
}

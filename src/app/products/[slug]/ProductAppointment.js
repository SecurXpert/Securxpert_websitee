"use client";

import React, { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuCheck, LuCalendar, LuClock, LuGlobe, LuUser } from "react-icons/lu";
import { API_BASE_URL } from "@/admin/config";

export default function ProductAppointment({ product }) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyDetails: "",
    contactDetails: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", 
    "11:00", "11:30", "12:00", "12:30",
    "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30"
  ];

  // Calendar Logic
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (day) => {
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    // Don't allow past dates
    const today = new Date();
    today.setHours(0,0,0,0);
    if (d < today) return;
    
    setSelectedDate(d);
    setStep(2);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleNextStep = () => {
    if (step === 2 && selectedTime) setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.companyDetails || !formData.contactDetails) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Format date to YYYY-MM-DD
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      // Format time to HH:MM:SS for the API time field
      const formattedTime = `${selectedTime}:00`;

      const payload = {
        product_name: product.title,
        full_name: formData.name,
        email_address: formData.email,
        enter_company_details: formData.companyDetails,
        enter_contact_details: formData.contactDetails,
        booking_date: formattedDate,
        booking_time: formattedTime
      };

      const response = await fetch(`${API_BASE_URL}products/create-booking`, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      setStep(4);
    } catch (err) {
      console.error("Failed to save appointment", err);
      alert("Failed to save appointment. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime("");
    setFormData({ name: "", email: "", companyDetails: "", contactDetails: "" });
  };

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <section id="appointment" className="relative w-full bg-[#f8fafc] overflow-hidden py-12 lg:py-8 text-slate-800">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Multi-step Container */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px] flex flex-col md:flex-row">
          
          {/* Left Sidebar (Info) */}
          <div className="w-full md:w-[35%] bg-white border-b md:border-b-0 md:border-r border-slate-200 p-8 flex flex-col">
            <div className="mb-8 flex items-center gap-3">
              <img src="/securxpertslogo.png" alt="SecurXperts Logo" className="h-14 w-auto object-contain" />
              
            </div>
            
            <h2 className="text-xl font-bold text-slate-900 mb-2">Book a Demo</h2>
            <h3 className="text-[28px] font-bold text-slate-800 mb-4 font-sans leading-tight text-[#3D62EB]">{product.title}</h3>
            {product.logo && (
              <div className="mb-6">
                <img src={product.logo} alt={`${product.title} Logo`} className="h-24 w-auto object-contain" />
              </div>
            )}
            
            <div className="flex flex-col gap-4 text-slate-600 mb-6 text-[15px]">
              <div className="flex items-center gap-3">
                <LuClock className="w-5 h-5 opacity-60" />
                <span>30 min</span>
              </div>
              <div className="flex items-start gap-3">
                <LuGlobe className="w-5 h-5 opacity-60 mt-0.5" />
                <span>Web conferencing details provided upon confirmation.</span>
              </div>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed mt-auto">
              Schedule a personalized walkthrough of {product.title}. See how it can transform your business operations.
            </p>
          </div>

          {/* Right Content Area (Steps) */}
          <div className="w-full md:w-[65%] p-8 flex flex-col">
            
            {/* Step 1: Select Date */}
            {step === 1 && (
              <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Select a Date</h3>
                <div className="max-w-md">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-base font-semibold text-slate-700">
                      {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </span>
                    <div className="flex items-center gap-2">
                      <button onClick={handlePrevMonth} className="p-2 hover:bg-slate-100 rounded-full text-blue-600 transition-colors">
                        <LuChevronLeft className="w-5 h-5" />
                      </button>
                      <button onClick={handleNextMonth} className="p-2 hover:bg-slate-100 rounded-full text-blue-600 transition-colors">
                        <LuChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm mb-2">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                      <div key={day} className="text-xs font-semibold text-slate-400">{day}</div>
                    ))}
                    
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-10"></div>
                    ))}
                    
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                      const isPast = dateObj < new Date(new Date().setHours(0,0,0,0));
                      const isToday = dateObj.getTime() === new Date(new Date().setHours(0,0,0,0)).getTime();
                      
                      return (
                        <button
                          key={day}
                          onClick={() => handleDateSelect(day)}
                          disabled={isPast}
                          className={`
                            h-10 w-10 mx-auto rounded-full flex items-center justify-center font-medium transition-all
                            ${isPast ? 'text-slate-300 cursor-not-allowed' : 'text-blue-600 bg-blue-50 hover:bg-[#3D62EB] hover:text-white cursor-pointer'}
                            ${isToday && !isPast ? 'border border-[#3D62EB]' : ''}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Select Time */}
            {step === 2 && (
              <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-6">
                  <button onClick={() => setStep(1)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors -ml-2">
                    <LuChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="text-xl font-bold text-slate-800">Select a Time</h3>
                </div>
                
                <p className="text-slate-600 mb-6 font-medium">{formatDate(selectedDate)}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-8 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                  {availableTimes.map(time => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        py-3 px-4 rounded-lg border text-sm font-semibold transition-all duration-200
                        ${selectedTime === time 
                          ? 'bg-[#3D62EB] border-[#3D62EB] text-white shadow-md' 
                          : 'bg-white border-blue-200 text-blue-700 hover:border-[#3D62EB]'}
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedTime}
                    className={`
                      px-8 py-3 rounded-lg font-semibold transition-all
                      ${selectedTime 
                        ? 'bg-[#3D62EB] hover:bg-blue-700 text-white shadow-md' 
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'}
                    `}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Customer Information */}
            {step === 3 && (
              <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-6">
                  <button onClick={() => setStep(2)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors -ml-2">
                    <LuChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="text-xl font-bold text-slate-800">Enter Details</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="space-y-5 mb-8">
                    <div className="flex flex-col">
                      <label className="text-slate-800 text-[12px] font-semibold tracking-wider mb-1.5">Product Name</label>
                      <input
                        type="text"
                        value={product.title}
                        readOnly
                        disabled
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-500 cursor-not-allowed"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-slate-800 text-[12px] font-semibold tracking-wider mb-1.5">Full name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:border-[#3D62EB] focus:ring-1 focus:ring-[#3D62EB] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label className="text-slate-800 text-[12px] font-semibold tracking-wider mb-1.5">Email address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:border-[#3D62EB] focus:ring-1 focus:ring-[#3D62EB] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label className="text-slate-800 text-[12px] font-semibold tracking-wider mb-1.5">Enter Company details *</label>
                      <textarea
                        value={formData.companyDetails}
                        onChange={(e) => setFormData({ ...formData, companyDetails: e.target.value })}
                        placeholder="Enter your company name & details"
                        rows="2"
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:border-[#3D62EB] focus:ring-1 focus:ring-[#3D62EB] focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-slate-800 text-[12px] font-semibold tracking-wider mb-1.5">Enter your contact details *</label>
                      <textarea
                        value={formData.contactDetails}
                        onChange={(e) => setFormData({ ...formData, contactDetails: e.target.value })}
                        placeholder="Enter your contact details"
                        rows="2"
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:border-[#3D62EB] focus:ring-1 focus:ring-[#3D62EB] focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3 mt-4">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="font-semibold w-20">Product:</span>
                        <span className="text-slate-600">{product.title}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="font-semibold w-20">Date:</span>
                        <span className="text-slate-600">{formatDate(selectedDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="font-semibold w-20">Time:</span>
                        <span className="text-slate-600">{selectedTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-lg font-medium text-slate-500 hover:bg-slate-100 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-2.5 rounded-lg font-semibold shadow-md transition-all active:scale-95 flex items-center justify-center min-w-[170px] ${
                        isSubmitting 
                          ? 'bg-blue-400 text-white cursor-not-allowed' 
                          : 'bg-[#3D62EB] hover:bg-blue-700 text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Booking...
                        </>
                      ) : (
                        "Book Appointment"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                <LuCheck className="w-20 h-20 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Appointment Booked!</h3>
                <p className="text-slate-500 mb-8 max-w-sm">
                  You are scheduled with SecurXperts Private Ltd. A calendar invitation has been sent to your email address.
                </p>
                
                <div className="w-full max-w-sm bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left mb-8 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Product</p>
                    <p className="text-slate-800 font-medium">{product.title}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">When</p>
                    <p className="text-slate-800 font-medium">{formatDate(selectedDate)}<br/>{selectedTime}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Who</p>
                    <p className="text-slate-800 font-medium">{formData.name}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm">
                  <button
                    onClick={handleReset}
                    className="w-full px-6 py-3 rounded-xl font-semibold bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all"
                  >
                    Book Another
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
      
      {/* Required for the custom scrollbar in step 2 if they scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
      `}} />
    </section>
  );
}

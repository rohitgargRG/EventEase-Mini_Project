import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchSection = () => {

    const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section class="flex justify-center mt-10 md:mt-20 px-4 sm:px-6 lg:px-8">
        <div
            class="h-54 md:h-20 w-[90%] sm:w-[80%] bg-white rounded-2xl flex flex-col sm:flex-row text-black justify-center gap-4 sm:gap-x-8 items-center shadow-lg p-4"
        >
            <input
                type="text"
                placeholder="Search Events"
                class="border border-gray-300 h-12 w-full sm:w-114 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                className="w-full sm:w-58 h-12 px-4 py-2 text-gray-700 border border-gray-300 appearance-none rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
                class="h-12 w-full sm:w-36 rounded-lg text-white bg-purple-700"
            >
                Search
            </button>
        </div>
    </section>

  )
}

export default SearchSection

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FiPlayCircle } from 'react-icons/fi'; // Import PlayCircle icon from react-icons
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

export default function Result() {
  const score = localStorage.getItem('quizScore');
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white p-8 rounded-md shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Quiz Result</h1>
        <p className="text-lg text-center text-gray-600 mb-8">Your score is {score}.</p>
        <div className="flex justify-center">
          <Link to="/" className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-4">
            <FiPlayCircle className="mr-2" />
            Play Again
          </Link>
        </div>
      </div>
    </div>
  );
}

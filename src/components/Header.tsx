import { useEffect, useState } from 'react';

export default function Header(){

    const [darkMode, setDarkMode] = useState(false);

  // On toggle, update the HTML root class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
    return(
        <header className="bg-teal-600 text-white py-4 shadow-md">
            <h1 className="text-center text-3xl font-bold">Finance Tracker</h1>

            <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white text-teal-700 px-4 py-2 rounded font-semibold shadow hover:bg-gray-100"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
        </header>
    )
}
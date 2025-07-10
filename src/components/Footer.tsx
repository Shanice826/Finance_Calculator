export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-400 mt-12 py-4 border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} Finance Tracker. Built with ❤️ using React, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}

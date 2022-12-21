export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center h-16 bg-slate-500">
      <div className="text-xs text-white mt-2">
        &copy; {year} - Made with ❤️ by {""}
        <span className="text-white font-bold">Jimmy Loloy</span>
      </div>
    </footer>
  );
}

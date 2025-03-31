export function ModeToggle() {
  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
      }}
    >
      Mode Toggle
    </button>
  );
}

document.addEventListener("DOMContentLoaded", () => {
    const themeDropdown = document.querySelectorAll('input[name="theme-dropdown"]');
  
    // Check if a theme is already saved in localStorage
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      themeDropdown.forEach((input) => {
        if (input.value === savedTheme) {
          input.checked = true;
        }
      });
    }
  
    // Save the selected theme to localStorage
    themeDropdown.forEach((input) => {
      input.addEventListener('change', () => {
        if (input.checked) {
          document.documentElement.setAttribute('data-theme', input.value);
          localStorage.setItem('selected-theme', input.value);
        }
      });
    });
  });
  
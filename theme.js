document.addEventListener('DOMContentLoaded', () => {
    const themeControllers = document.querySelectorAll('.theme-controller');

    themeControllers.forEach(controller => {
        controller.addEventListener('change', (event) => {
            document.documentElement.setAttribute('data-theme', event.target.value);
        });
    });
});

export default function setTheme() {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.body.className = theme;
    if (theme === 'light') {
        return false
    } else if (theme === 'dark') {
        return true
    }
}



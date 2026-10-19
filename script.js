function toggleTheme() {
    const body = documet.body;
    body.classlist.toggle("dark-mode");

    const btn = document.getElementById("btn-theme");
    if (body.classlist.contains("dark-mode")) {
        btn.innerHTML = "  Light Mode";
    } else {
        btn.innerHTML = "  Dark Mode";
    }
}

document.getElementById("button").addEventListener("click", function(e) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordsecurity = document.getElementById("passwordsecurity").value;

    console.log(password);
    console.log(passwordsecurity);

    if (
        username === "" ||
        email === "" ||
        password === "" ||
        passwordsecurity === ""
    ) {
        alert(`zehmet olmasa formu tam doldurun `);
    } else if (password === passwordsecurity) {
        alert(`sorqunuz tamamlandi`);
    } else alert(`paswordunuzun duzgun yazin`);
});
// js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Kredensial Hardcode ---
    const VALID_USERNAME = "u";
    const VALID_PASSWORD = "p"; 

    const authPage = document.getElementById('auth-page');
    const showSignupBtn = document.getElementById('show-signup');
    const showLoginBtn = document.getElementById('show-login');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const linkToLogin = document.getElementById('link-to-login');
    const linkToSignup = document.getElementById('link-to-signup');
    const closeFormButtons = document.querySelectorAll('.close-form');
    const loginSubmitForm = document.getElementById('login-form');
    const signupSubmitForm = document.getElementById('signup-form');

    function hideAllForms() {
        signupForm.classList.remove('visible');
        loginForm.classList.remove('visible');
        authPage.classList.remove('blur-background');
        document.querySelector('.main-buttons').style.display = 'flex';
    }

    function showForm(formElement) {
        hideAllForms();
        formElement.classList.add('visible');
        authPage.classList.add('blur-background');
        document.querySelector('.main-buttons').style.display = 'none';
    }
    
    function handleSuccessfulLogin() {
        // Logika Kunci: Sembunyikan halaman auth sepenuhnya
        authPage.classList.add('hidden-complete');
        
        // PENTING: Panggil fungsi navigasi yang didefinisikan di script.js
        if (typeof navigateToMainApp === 'function') {
             // Pindah ke index 0 (HOME) dari konten utama
             navigateToMainApp(0); 
        } else {
             // Jika gagal, beritahu di konsol
             console.error("Fungsi navigateToMainApp tidak ditemukan di script.js.");
        }
        console.log("Login sukses. Aplikasi utama terlihat.");
    }
    
    // --- Event Listeners for Showing Forms ---
    showSignupBtn.addEventListener('click', () => showForm(signupForm));
    showLoginBtn.addEventListener('click', () => showForm(loginForm));
    linkToLogin.addEventListener('click', (e) => { e.preventDefault(); showForm(loginForm); });
    linkToSignup.addEventListener('click', (e) => { e.preventDefault(); showForm(signupForm); });
    closeFormButtons.forEach(button => {
        button.addEventListener('click', (e) => { e.preventDefault(); hideAllForms(); });
    });
    
    // --- Login Authentication Logic ---
    loginSubmitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Mengambil nilai berdasarkan atribut 'name'
        const usernameOrEmail = loginSubmitForm.querySelector('input[name="username_login"]').value; 
        const password = loginSubmitForm.querySelector('input[name="password_login"]').value;

        // Simplified Authentication Check
        if (usernameOrEmail === VALID_USERNAME && password === VALID_PASSWORD) {
            alert("Login berhasil!");
            handleSuccessfulLogin();
        } else {
            alert("Login Gagal: Username/password salah. Gunakan 'user123' / 'password123'");
        }
    });

    // --- Signup Placeholder Logic ---
    signupSubmitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Pendaftaran berhasil! Silakan login.");
        showForm(loginForm); // Redirect to login after successful signup
    });

    // START: Pastikan Auth page terlihat saat pertama kali dimuat
    authPage.classList.remove('hidden-complete');
});
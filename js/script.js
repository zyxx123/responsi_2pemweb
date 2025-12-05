// Data Konten Halaman (HTML Strings) - Tetap sama
const pageContent = {
    home: `
        <div id="home" class="page-content">
            <h1 class="home-title-h1"></h1>
            <div class="home-image"></div>
        </div>
    `,
    about: `
        <div id="about" class="page-content">
             <ul class="character-tabs">
                <li><a href="#" data-char="arthur" class="char-tab-link active">ARTHUR</a></li>
                <li><a href="#" data-char="dutch" class="char-tab-link">DUTCH</a></li>
                <li><a href="#" data-char="micah" class="char-tab-link">MICAH</a></li>
                <li><a href="#" data-char="john" class="char-tab-link">JOHN</a></li>
            </ul>

            <div class="about-flex-container">
                <div class="about-left"><div id="char-name-desc"></div></div>
                <div class="about-center"><div id="char-image-container"></div></div>
                <div class="about-right"><h2>SYNOPSIS</h2><div id="char-synopsis"></div></div>
            </div>
        </div>
    `,
    character: `
        <div id="character" class="page-content">
            <div class="character-card">
                <div class="card-image"><img src="placeholder-arthur.png" alt="Arthur Morgan"></div>
                <div class="card-info"><h3>THE MAN</h3><p>One of the oldest and most influential members of the gang. He is known as a loyal, tough guy, but also begins to doubt his path as time goes on.</p></div>
            </div>
            <div class="character-card">
                <div class="card-image"><img src="placeholder-dutch.png" alt="Dutch van der Linde"></div>
                <div class="card-info"><h3>THE PLAN</h3><p>He believed that they could create a better world outside the law, but over time, his ambition turned into obsession.</p></div>
            </div>
            <div class="character-card">
                <div class="card-image"><img src="placeholder-micah.png" alt="Micah Bell"></div>
                <div class="card-info"><h3>THE RAT</h3><p>He was just an ordinary member of the Van Der Linde gang, but with his intelligence in manipulating people, he managed to secure Dutch's compliant.</p></div>
            </div>
            <div class="character-card">
                <div class="card-image"><img src="placeholder-john.png" alt="John Marston"></div>
                <div class="card-info"><h3>THE LAST</h3><p>Unlike Arthur, who has become Dutch's right-hand man, John is often looked down upon by the other gang members because of his stubborn nature and often acting alone.</p></div>
            </div>
        </div>
    `,
    game: `
        <div id="game" class="page-content">
            <div class="game-info">
                <div class="game-title-area"><h2>RED DEAD</h2><h2>REDEMPTION II</h2></div>
                <div class="game-image-rdr2"></div>
            </div>
            <div class="platform-links">
                <img src="placeholder-epic.png" alt="Epic Games"> <img src="placeholder-steam.png" alt="Steam">
                <img src="placeholder-ps.png" alt="PlayStation"> <img src="placeholder-xbox.png" alt="Xbox">
            </div>
        </div>
    `
};

const characterData = {
    arthur: {
        name: "ARTHUR MORGAN",
        desc: "ARTHUR MORGAN IS THE MAIN PROTAGONIST IN RED DEAD REDEMPTION II, A SENIOR MEMBER OF THE DUTCH VAN DER LINDE GANG WHO IS KNOWN AS A TOUGH FIGHTER, A SKILLED HUNTER, AND A MAN WITH HIS OWN MORAL CODE. BORN INTO A LIFE OF VIOLENCE ARTHUR GROWS UP TO BE A MAN LOYAL TO HIS GROUP BUT OVER TIME BEGINS TO QUESTION THE PATH HE HAS TAKEN.",
        image: "media/arthur.png",
        synopsis: "THE GAME IS SET IN 1899, NEAR THE END OF THE WILD WEST ERA IN AMERICA. THE PLAYER CONTROLS ARTHUR MORGAN, A SENIOR MEMBER OF THE DUTCH VAN DER LINDE GANG, A GROUP OF OUTLAWS WHO MAKE THEIR LIVING BY ROBBING, STEALING, AND SURVIVING THE GOVERNMENT. THE PLAYER CAN CHOOSE WHETHER ARTHUR WILL REMAIN LOYAL TO THE GANG OR SEEK REDEMPTION FOR HIS PAST."
    },
    dutch: {
        name: "DUTCH VAN DER LINDE",
        desc: "DUTCH VAN DER LINDE IS THE CHARISMATIC LEADER OF THE VAN DER LINDE GANG, A ROMANTIC IDEALIST WHO DREAMS OF A LIFE FREE FROM THE CONSTRAINTS OF CIVILIZATION, VIEWING HIMSELF AS A ROBIN HOOD FIGURE. HE USES HIS SILVER TONGUE TO INSPIRE LOYALTY. HOWEVER, AS THE LAW CLOSES IN, DUTCH DESCENDS INTO PARANOIA, SLOWLY TEARING APART THE FAMILY HE BUILT IN HIS DESPERATE FIGHT FOR SURVIVAL.",
        image: "placeholder-dutch-about.png",
        synopsis: "DUTCH VAN DER LINDE ADALAH PEMIMPIN KARISMATIK GENG YANG BERJUANG UNTUK KEBEBASAN. NAMUN, SETELAH PERAMPOKAN YANG GAGAL DI BLACKWATER, KEPEMIMPINANNYA MULAI GOYAH. KECURIGAAN DAN PARANOIA MENGGEROGOTI DIRINYA, MEMBUAT KEPUTUSAN-KEPUTUSANNYA MENJADI SEMAKIN RENTAN DAN MEMBAHAYAKAN SELURUH ANGGOTA GENG."
    },
    micah: {
        name: "MICAH BELL",
        desc: "MICAH BELL IS A CAREER CRIMINAL AND HITMAN, WILD AND UNPREDICTABLE. HE LIVES FOR THE ACTION. ALTHOUGH HE HAS ONLY BEEN WITH THE GANG FOR A FEW MONTHS, HE HAS QUICKLY GAINED DUTCH'S EAR. MICAH ENJOYS THE CHAOS OF THE OUTLAW LIFE AND BELIEVES IN SURVIVAL OF THE FITTEST, MAKING HIM A DANGEROUS AND DIVISIVE FIGURE WITHIN THE CAMP WHO FREQUENTLY CLASHES WITH ARTHUR.",
        image: "placeholder-micah-about.png",
        synopsis: "MICAH BELL ADALAH FIGUR YANG DIVISIF DAN BERBAHAYA. SINOPOSIS INI BERFOKUS PADA BAGAIMANA PERLAKUAN BURUKNYA DAN KONFLIKNYA DENGAN ARTHUR MORGAN MEMPERCEPAT PERPECAHAN INTERNAL GENG. KESETIAAN DIUJI, DAN ERA PENJAHAT SEJATI MENGALAMI KEHANCURAN DENGAN ADANYA PENGKHIANATAN."
    },
    john: {
        name: "JOHN MARSTON",
        desc: "JOHN MARSTON WAS TAKEN IN BY DUTCH AT THE AGE OF TWELVE. ASTUTE, FEARLESS, AND STRONG-WILLED, HE AND ARTHUR ARE DUTCH'S PROUDEST PROTÉGÉS. HOWEVER, JOHN STRUGGLES WITH THE RESPONSIBILITIES OF FATHERHOOD AND HIS PLACE IN A CHANGING WORLD, OFTEN FINDING HIMSELF TORN BETWEEN THE OUTLAW LIFE HE WAS RAISED IN AND THE FAMILY HE LOVES.",
        image: "placeholder-john-about.png",
        synopsis: "SINOPOSIS JOHN MARSTON MELIPUTI PERJALANANNYA UNTUK MENYEIMBANGKAN KEHIDUPAN OUTLAW DENGAN TANGGUNG JAWAB SEBAGAI SEORANG AYAH DAN SUAMI. IA ADALAH PROTÉGÉ DUTCH YANG PALING TERKEMUKA, TETAPI KONFLIK INTERNALNYA MENCERMINKAN TEMA REDEMPTION YANG LEBIH BESAR DALAM PERMAINAN."
    }
};

const contentContainer = document.getElementById('content-container');
const navLinks = document.querySelectorAll('nav ul li a');

// --- Fungsi Scroll dan Navigasi ---

// 1. Inisialisasi semua konten ke dalam main saat dokumen dimuat
function initializeAllContent() {
    let combinedHtml = '';
    combinedHtml += pageContent.home;
    combinedHtml += pageContent.about;
    combinedHtml += pageContent.character;
    combinedHtml += pageContent.game;
    
    contentContainer.innerHTML = combinedHtml;
    
    initializeAboutPage(); 
}

// 2. Fungsi untuk menggeser main container (Efek Scroll)
function navigateToPage(pageIndex) {
    const pageHeight = window.innerHeight; 
    const translateY = -pageIndex * pageHeight; 
    
    contentContainer.style.transform = `translateY(${translateY}px)`;
    
    // Update active class
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`nav ul li a[data-index="${pageIndex}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// 3. Fungsi Global untuk dipanggil dari auth.js setelah login
window.navigateToMainApp = function(pageIndex) {
    navigateToPage(pageIndex);
    // HOME adalah index 0 setelah Auth sukses. Aktifkan link HOME
    const homeLink = document.querySelector('nav ul li a[data-index="0"]');
    if (homeLink) homeLink.classList.add('active');
}

// 4. Fungsi untuk inisialisasi Halaman ABOUT
function initializeAboutPage() {
    const aboutPage = document.getElementById('about');
    if (!aboutPage) return; 

    const charTabs = aboutPage.querySelectorAll('.char-tab-link');
    const charNameDesc = aboutPage.querySelector('#char-name-desc');
    const charImageContainer = aboutPage.querySelector('#char-image-container');
    const charSynopsis = aboutPage.querySelector('#char-synopsis');

    function loadCharacterDetail(charKey) {
        const data = characterData[charKey];
        if (!data) return;

        if (charNameDesc) charNameDesc.innerHTML = `<div class="char-content"><h1>${data.name}</h1><p>${data.desc}</p></div>`;
        if (charImageContainer) charImageContainer.innerHTML = `<div class="char-image-container"><img src="${data.image}" alt="${data.name} Image"></div>`;
        if (charSynopsis) charSynopsis.innerHTML = `<p>${data.synopsis}</p>`;
    }

    charTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            charTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            const charKey = e.target.dataset.char;
            loadCharacterDetail(charKey);
        });
    });

    loadCharacterDetail('arthur');
}


// 5. Event Listener Navigasi Utama (Memastikan Scroll Berfungsi)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageIndex = parseInt(e.target.dataset.index);
        navigateToPage(pageIndex);
    });
});

// 6. Inisialisasi saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
    // 1. Muat semua konten ke DOM
    initializeAllContent();
    
    // 2. Tambahkan listener resize agar scroll berfungsi saat ukuran layar berubah
    window.addEventListener('resize', () => {
        const activeLink = document.querySelector('nav ul li a.active');
        if (activeLink) {
            const activeIndex = parseInt(activeLink.dataset.index);
            navigateToPage(activeIndex);
        }
    });
});
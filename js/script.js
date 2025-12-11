// Data Konten Halaman (HTML Strings)
const pageContent = {
    home: `
        <div id="home" class="page-content">
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
                <div class="card-image"><img src="../media/arthur.png" alt="Arthur Morgan"></div>
                <div class="card-info">
                    <h3>THE MAN</h3>
                    <p>One of the oldest and most influential members of the gang. He is known as a loyal, tough guy, but also begins to doubt his path as time goes on.</p>
                </div>
            </div>
            <div class="character-card">
                <div class="card-image"><img src="../media/Dutch.webp" alt="Dutch van der Linde"></div>
                <div class="card-info">
                    <h3>THE PLAN</h3>
                    <p>He believed that they could create a better world outside the law, but over time, his ambition turned into obsession.</p>
                </div>
            </div>
            <div class="character-card">
                <div class="card-image"><img src="../media/Micah.png" alt="Micah Bell"></div>
                <div class="card-info">
                    <h3>THE RAT</h3>
                    <p>He was just an ordinary member of the Van der Linde gang, but with his intelligence in manipulating people, he managed to become Dutch's confidant.</p>
                </div>
            </div>
            <div class="character-card">
                <div class="card-image"><img src="../media/john.webp" alt="John Marston"></div>
                <div class="card-info">
                    <h3>THE LAST</h3>
                    <p>Unlike Arthur, who has become Dutch's right-hand man, John is often looked down upon by the other gang members because of his stubborn nature and often acting alone.</p>
                </div>
            </div>
        </div>
    `,

    game: `
        <div id="game" class="page-content">
            <div class="game-content-wrapper">
                <div class="game-info">
                    <div class="game-image-rdr2"></div>
                </div>
                <div class="platform-links">
                    <a href="https://store.epicgames.com/" target="_blank">
                        <img src="../media/epic.png" alt="Epic Games">
                    </a>
                    <a href="https://store.steampowered.com/" target="_blank">
                        <img src="../media/steam.png" alt="Steam">
                    </a>
                    <a href="https://www.playstation.com/" target="_blank">
                        <img src="../media/ps.png" alt="PlayStation">
                    </a>
                    <a href="https://www.xbox.com/" target="_blank">
                        <img src="../media/xbox.png" alt="Xbox">
                    </a>
                </div>
            </div>
        </div>
    `
};

const characterData = {
    arthur: {
        name: "ARTHUR MORGAN",
        desc: "ARTHUR MORGAN IS THE MAIN PROTAGONIST IN RED DEAD REDEMPTION II, A SENIOR MEMBER OF THE DUTCH VAN DER LINDE GANG WHO IS KNOWN AS A TOUGH FIGHTER, A SKILLED HUNTER, AND A MAN WITH HIS OWN MORAL CODE. BORN INTO A LIFE OF VIOLENCE ARTHUR GROWS UP TO BE A MAN LOYAL TO HIS GROUP BUT OVER TIME BEGINS TO QUESTION THE PATH HE HAS TAKEN.",
        image: "../media/arthur.png",
        synopsis: "THE GAME IS SET IN 1899, NEAR THE END OF THE WILD WEST ERA IN AMERICA. THE PLAYER CONTROLS ARTHUR MORGAN, A SENIOR MEMBER OF THE DUTCH VAN DER LINDE GANG, A GROUP OF OUTLAWS WHO MAKE THEIR LIVING BY ROBBING, STEALING, AND SURVIVING THE GOVERNMENT.AFTER A ROBBERY IN THE TOWN OF BLACKWATER GOES TERRIBLY WRONG, THE GANG IS FORCED TO FLEE AND FIND A WAY TO SURVIVE. OVER TIME, ARTHUR BEGINS TO SEE CHANGES IN DUTCH'S LEADERSHIP, WHO BECOMES INCREASINGLY PARANOID AND DESTRUCTIVE, ESPECIALLY AFTER A TRAITOR, MICAH BELL, BEGINS TO GAIN DUTCH'S TRUST.THE PLAYER CAN CHOOSE WHETHER ARTHUR WILL REMAIN LOYAL TO THE GANG OR SEEK REDEMPTION FOR HIS PAST."
    },
    dutch: {
        name: "DUTCH VAN DER LINDE",
        desc: "DUTCH VAN DER LINDE IS THE CHARISMATIC LEADER OF THE VAN DER LINDE GANG, A ROMANTIC IDEALIST WHO DREAMS OF A LIFE FREE FROM THE CONSTRAINTS OF CIVILIZATION, VIEWING HIMSELF AS A ROBIN HOOD FIGURE. HE USES HIS SILVER TONGUE TO INSPIRE LOYALTY. HOWEVER, AS THE LAW CLOSES IN, DUTCH DESCENDS INTO PARANOIA, SLOWLY TEARING APART THE FAMILY HE BUILT IN HIS DESPERATE FIGHT FOR SURVIVAL.",
        image: "../media/Dutch.webp",
        synopsis: "DUTCH VAN DER LINDE ADALAH PEMIMPIN KARISMATIK GENG YANG BERJUANG UNTUK KEBEBASAN. NAMUN, SETELAH PERAMPOKAN YANG GAGAL DI BLACKWATER, KEPEMIMPINANNYA MULAI GOYAH. KECURIGAAN DAN PARANOIA MENGGEROGOTI DIRINYA, MEMBUAT KEPUTUSAN-KEPUTUSANNYA MENJADI SEMAKIN RENTAN DAN MEMBAHAYAKAN SELURUH ANGGOTA GENG."
    },
    micah: {
        name: "MICAH BELL",
        desc: "MICAH BELL IS A CAREER CRIMINAL AND HITMAN, WILD AND UNPREDICTABLE. HE LIVES FOR THE ACTION. ALTHOUGH HE HAS ONLY BEEN WITH THE GANG FOR A FEW MONTHS, HE HAS QUICKLY GAINED DUTCH'S EAR. MICAH ENJOYS THE CHAOS OF THE OUTLAW LIFE AND BELIEVES IN SURVIVAL OF THE FITTEST, MAKING HIM A DANGEROUS AND DIVISIVE FIGURE WITHIN THE CAMP WHO FREQUENTLY CLASHES WITH ARTHUR.",
        image: "../media/Micah.png",
        synopsis: "MICAH BELL ADALAH FIGUR YANG DIVISIF DAN BERBAHAYA. SINOPOSIS INI BERFOKUS PADA BAGAIMANA PERLAKUAN BURUKNYA DAN KONFLIKNYA DENGAN ARTHUR MORGAN MEMPERCEPAT PERPECAHAN INTERNAL GENG. KESETIAAN DIUJI, DAN ERA PENJAHAT SEJATI MENGALAMI KEHANCURAN DENGAN ADANYA PENGKHIANATAN."
    },
    john: {
        name: "JOHN MARSTON",
        desc: "JOHN MARSTON WAS TAKEN IN BY DUTCH AT THE AGE OF TWELVE. ASTUTE, FEARLESS, AND STRONG-WILLED, HE AND ARTHUR ARE DUTCH'S PROUDEST PROTÉGÉS. HOWEVER, JOHN STRUGGLES WITH THE RESPONSIBILITIES OF FATHERHOOD AND HIS PLACE IN A CHANGING WORLD, OFTEN FINDING HIMSELF TORN BETWEEN THE OUTLAW LIFE HE WAS RAISED IN AND THE FAMILY HE LOVES.",
        image: "../media/john.webp",
        synopsis: "SINOPOSIS JOHN MARSTON MELIPUTI PERJALANANNYA UNTUK MENYEIMBANGKAN KEHIDUPAN OUTLAW DENGAN TANGGUNG JAWAB SEBAGAI SEORANG AYAH DAN SUAMI. IA ADALAH PROTÉGÉ DUTCH YANG PALING TERKEMUKA, TETAPI KONFLIK INTERNALNYA MENCERMINKAN TEMA REDEMPTION YANG LEBIH BESAR DALAM PERMAINAN."
    }
};





const contentContainer = document.getElementById('content-container');
const navLinks = document.querySelectorAll('nav ul li a');

// Variable untuk tracking animasi
let isAnimating = false;

// --- Fungsi Animasi Scroll ---
function animatePageTransition(direction, callback) {
    if (isAnimating) return;
    isAnimating = true;

    const main = document.querySelector('main');
    
    // Fade out dengan slide
    main.style.opacity = '0';
    main.style.transform = direction === 'next' ? 'translateY(-50px)' : 'translateY(50px)';
    
    setTimeout(() => {
        // Jalankan callback (load konten baru)
        if (callback) callback();
        
        // Reset posisi dan fade in
        main.style.transform = direction === 'next' ? 'translateY(50px)' : 'translateY(-50px)';
        
        setTimeout(() => {
            main.style.opacity = '1';
            main.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                isAnimating = false;
            }, 600);
        }, 50);
    }, 400);
}

// --- Fungsi Load Konten dengan Animasi ---
function loadPageContent(pageName, useAnimation = true) {
    const newContentHtml = pageContent[pageName] || '';
    
    const loadContent = () => {
        // Update navigation active state
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });

        // Load konten baru
        contentContainer.innerHTML = newContentHtml;

        // Scroll ke atas halaman
        const pageElement = contentContainer.querySelector('.page-content');
        if (pageElement) {
            pageElement.scrollTop = 0;
        }

        // Inisialisasi logika halaman spesifik
        if (pageName === 'about') {
            initializeAboutPage();
        } else if (pageName === 'character') {
            initializeCharacterPage();
        }
    };

    if (useAnimation) {
        animatePageTransition('next', loadContent);
    } else {
        loadContent();
    }
}

// 1. Fungsi Inisialisasi Halaman ABOUT (Tab Click)
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

// 2. Fungsi Inisialisasi Halaman CHARACTER (Card Click)
function initializeCharacterPage() {
    const cards = document.querySelectorAll('.character-card');
    
    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener('click', () => {
                // Toggle class 'active' untuk memicu animasi CSS
                card.classList.toggle('active');
                
                // Optional: Close other cards (jika ingin hanya 1 yang terbuka)
                // cards.forEach(otherCard => {
                //     if (otherCard !== card) {
                //         otherCard.classList.remove('active');
                //     }
                // });
            });
        });
    }
}

// 3. Fungsi Navigasi Global
window.navigateToMainApp = function(pageIndex) {
    const pages = ['home', 'home', 'about', 'character', 'game']; 
    const targetPage = pages[pageIndex] || 'home';
    loadPageContent(targetPage, false); // Tanpa animasi saat pertama kali login
}

// 4. Event Listener Navigasi Utama
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAnimating) return; // Prevent click saat animasi berjalan
        
        const pageName = e.target.dataset.page;
        loadPageContent(pageName, true); // Dengan animasi
    });
});

// 5. Inisialisasi Awal
document.addEventListener('DOMContentLoaded', () => {
    loadPageContent('home', false); // Tanpa animasi saat load pertama
});
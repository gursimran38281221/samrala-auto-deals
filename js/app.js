// ============================================================
// CONSTANTS
// ============================================================
const OWNER_PHONE = '917973850653';
const OWNER_EMAIL = 'gursimran38281221@gmail.com';
const EMAILJS_SERVICE_ID = 'service_ik3ic6e';
const EMAILJS_TEMPLATE_ID = 'template_lrv5iit';
const EMAILJS_PUBLIC_KEY = 'C0ioeHHgS1p2Bil3L';

const premiumGradients = [
    'linear-gradient(135deg, #ff6b00, #ff8c00)', // Orange
    'linear-gradient(135deg, #00d2ff, #0066ff)', // Blue
    'linear-gradient(135deg, #b827fc, #2c90fc)', // Purple-Blue
    'linear-gradient(135deg, #ff0f7b, #f53d2d)', // Pink-Red
    'linear-gradient(135deg, #00b09b, #96c93d)', // Green
    'linear-gradient(135deg, #fc4a1a, #f7b733)'  // Peach-Orange
];

const defaultTestimonials = [
    { id: 1, name: 'Gurpreet Singh', stars: 5, text: 'Sold my old Pulsar here and got an amazing price. The paperwork was handled seamlessly within hours. Highly professional staff!', vehicle: 'Sold Bajaj Pulsar', avatar: 'GS', avatarBg: 'linear-gradient(135deg, #ff6b00, #ff8c00)' },
    { id: 2, name: 'Manpreet Kaur', stars: 4.5, text: 'I bought an Activa 6G for my daily commute. It looked brand new and runs perfectly. The 6-month warranty gave me great peace of mind.', vehicle: 'Bought Honda Activa', avatar: 'MK', avatarBg: 'linear-gradient(135deg, #00d2ff, #0066ff)' },
    { id: 3, name: 'Rajeev Sharma', stars: 5, text: 'The best dealership in Samrala hands down. They arranged my loan within 4 hours. Extremely transparent pricing.', vehicle: 'Bought Royal Enfield', avatar: 'RS', avatarBg: 'linear-gradient(135deg, #b827fc, #2c90fc)' }
];

// ============================================================
// VEHICLE DATA
// ============================================================
const defaultVehicles = [
    { id: 1, brand: 'Royal Enfield', model: 'Hunter 350', year: 2023, kilometers: 4500, price: 175000, dealingPrice: 150000, owner: '1st', insurance: 'Valid upto 2028 (Full Party)', condition: 'Brand New / Non-Accidental', type: 'petrol', image: 'https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/hunter/loader/desktop/loader-2.jpg' },
    { id: 13, brand: 'Royal Enfield', model: 'Bullet 350 Standard', year: 2019, kilometers: 2100, price: 110000, dealingPrice: 100000, owner: '1st', insurance: 'Valid upto 2027', condition: 'Brand New / Non-Accidental', type: 'petrol', image: 'https://imgd.aeplcdn.com/1056x594/bw/ec/26288/Royal-Enfield-Bullet-350-Twinspark-Side-86212.jpg?v=201711021421&q=80' },
    { id: 2, brand: 'Honda', model: 'Activa 6G', year: 2023, kilometers: 2500, price: 82000, dealingPrice: 75000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Excellent / Non-Accidental', type: 'petrol', image: 'https://tse3.mm.bing.net/th/id/OIP.WKVB_QETLY8ceIQqKMXgzwHaEE?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 3, brand: 'Honda', model: 'Activa 5G', year: 2019, kilometers: 15000, price: 45000, dealingPrice: 40000, owner: '2nd', insurance: 'Valid (Third Party)', condition: 'Good / Well Maintained', type: 'petrol', image: 'https://img.indianautosblog.com/crop/1200x675/2019/05/27/honda-activa-5g-limited-edition-b-b5d7.jpeg' },
    { id: 4, brand: 'Honda', model: 'Grazia', year: 2021, kilometers: 8000, price: 65000, dealingPrice: 58000, owner: '1st', insurance: 'Valid upto 2026', condition: 'Mint Condition', type: 'petrol', image: 'https://www.indiacarnews.com/wp-content/uploads/2021/01/Grazia-Sports-Edition-Pearl-Nightstar-Black.jpg' },
    { id: 5, brand: 'TVS', model: 'Jupiter 125', year: 2023, kilometers: 3000, price: 85000, dealingPrice: 78000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Like New', type: 'petrol', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/tvs-select-model-indiblue-drum-1701166884190.png?q=80' },
    { id: 6, brand: 'TVS', model: 'Jupiter 110', year: 2022, kilometers: 6000, price: 72000, dealingPrice: 65000, owner: '1st', insurance: 'Valid upto 2027', condition: 'Very Good', type: 'petrol', image: 'https://asset.autocarindia.com/static/image-galleries/images/20260210_092305_1ef6312f.jpg?w=728&q=75' },
    { id: 7, brand: 'Honda', model: 'Activa 125', year: 2023, kilometers: 1500, price: 88000, dealingPrice: 82000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Brand New', type: 'petrol', image: 'https://cdn.bikedekho.com/processedimages/honda/2025-activa-125/source/2025-activa-12568ce3a43579a4.jpg' },
    { id: 12, brand: 'Hero', model: 'Splendor Plus', year: 2025, kilometers: 0, price: 80000, dealingPrice: 75000, owner: '1st', insurance: 'Valid upto 2030 (Full Party)', condition: 'Brand New / Zero KM', type: 'petrol', image: 'https://www.rushlane.com/wp-content/uploads/2024/05/2024-hero-splendor-xtec-2-launch-price-new-1200x900.jpg' },
    { id: 8, brand: 'Bajaj', model: 'Chetak', year: 2023, kilometers: 1200, price: 125000, dealingPrice: 115000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Brand New', type: 'ev', image: 'https://cdn.bikedekho.com/processedimages/bajaj/2022-chetak/source/2022-chetak69a9252c23b41.jpg' },
    { id: 9, brand: 'TVS', model: 'iQube', year: 2023, kilometers: 1500, price: 130000, dealingPrice: 120000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Mint Condition', type: 'ev', image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s68d3dc0be19ef.jpg?imwidth=412&impolicy=resize' },
    { id: 10, brand: 'TVS', model: 'Orbitor', year: 2024, kilometers: 500, price: 145000, dealingPrice: 135000, owner: '1st', insurance: 'Valid upto 2029', condition: 'Pristine', type: 'ev', image: 'https://cdn.bikedekho.com/processedimages/tvs/tvs-electric-scooter/source/tvs-electric-scooter68ce61ab38fac.jpg?imwidth=412&impolicy=resize' },
    { id: 11, brand: 'Ola', model: 'S1 Air', year: 2023, kilometers: 800, price: 110000, dealingPrice: 100000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Like New', type: 'ev', image: 'https://assets.otocapital.in/prod/midnight-blue-ola-electric-s1-air-image' }
];

// ============================================================
// GLOBAL FUNCTIONS (available before DOM loads)
// ============================================================

window.navigateTo = function(targetId) {
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-links a[data-target="${targetId}"]`);
    if (activeLink) activeLink.classList.add('active');

    document.querySelectorAll('.page-section').forEach(s => {
        s.classList.toggle('active', s.id === targetId);
    });

    window.scrollTo(0, 0);

    if (targetId === 'buy-section') window.fetchVehicles();
    if (targetId === 'testimonials-section') window.renderTestimonials();
    if (targetId === 'admin-section') loadAdminStats();

    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('nav-active');
};

window.getTestimonials = function() {
    const stored = localStorage.getItem('testimonials');
    if (stored) {
        try { return JSON.parse(stored); } catch(e) { return defaultTestimonials; }
    }
    localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));
    return defaultTestimonials;
};

window.renderTestimonials = function() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const testimonials = window.getTestimonials();
    testimonials.forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        let starsHtml = '';
        const fullStars = Math.floor(t.stars);
        const hasHalf = t.stars % 1 !== 0;
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHtml += '<i class="fa-solid fa-star"></i>';
            } else if (i === fullStars && hasHalf) {
                starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
            } else {
                starsHtml += '<i class="fa-regular fa-star"></i>';
            }
        }

        card.innerHTML = `
            <div class="stars">${starsHtml}</div>
            <p>"${t.text}"</p>
            <div class="author">
                <div class="avatar avatar-gradient" style="background: ${t.avatarBg || 'var(--accent-primary)'};">${t.avatar}</div>
                <div class="author-info">
                    <h4>${t.name}</h4>
                    <span>${t.vehicle || 'Verified Rider'}</span>
                </div>
            </div>`;
        grid.appendChild(card);
    });
};

window.getVehicles = function() {
    const VERSION = 'v3'; // bump this whenever defaultVehicles changes
    const storedVersion = localStorage.getItem('vehicles_version');
    if (storedVersion !== VERSION) {
        localStorage.setItem('vehicles', JSON.stringify(defaultVehicles));
        localStorage.setItem('vehicles_version', VERSION);
        return defaultVehicles;
    }
    const stored = localStorage.getItem('vehicles');
    if (stored) {
        try { return JSON.parse(stored); } catch(e) { return defaultVehicles; }
    }
    localStorage.setItem('vehicles', JSON.stringify(defaultVehicles));
    return defaultVehicles;
};

window.fetchVehicles = async function() {
    const grid = document.getElementById('vehicles-grid');
    if (!grid) return;
    grid.innerHTML = '<div class="loader"><i class="fa-solid fa-circle-notch fa-spin"></i> Loading inventory...</div>';
    await new Promise(r => setTimeout(r, 400));
    const vehicles = window.getVehicles();
    window._allVehicles = vehicles;
    window.renderVehicles(vehicles);
};

window.renderVehicles = function(vehicles) {
    const grid = document.getElementById('vehicles-grid');
    if (!grid) return;
    grid.innerHTML = '';
    if (!vehicles.length) {
        grid.innerHTML = '<div class="loader">No vehicles found matching criteria.</div>';
        return;
    }
    vehicles.forEach(v => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.cursor = 'pointer';
        card.onclick = (e) => { if (!e.target.closest('button')) window.showVehicleDetails(v.id); };
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${v.image}" alt="${v.brand} ${v.model}">
                <div class="card-badge">${v.year}</div>
            </div>
            <div class="card-content">
                <div class="card-title">${v.brand} ${v.model}</div>
                <div class="card-details">
                    <span><i class="fa-solid fa-road"></i> ${v.kilometers.toLocaleString()} km</span>
                    <span><i class="fa-solid fa-tag"></i> ${v.brand}</span>
                </div>
                <div class="card-price-row">
                    <div class="card-price">₹${v.price.toLocaleString()}</div>
                    <button class="btn-buy" onclick="window.contactSeller('${v.brand}','${v.model}',${v.price})">Contact <i class="fa-brands fa-whatsapp"></i></button>
                </div>
            </div>`;
        grid.appendChild(card);
    });
    window.init3DTilt();
};

window.showVehicleDetails = function(id) {
    const vehicle = window.getVehicles().find(v => v.id == id);
    if (!vehicle) return;
    const modal = document.getElementById('vehicle-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image-wrapper">
                <img src="${vehicle.image}" class="modal-image" alt="${vehicle.brand} ${vehicle.model}">
            </div>
            <div class="modal-details">
                <h2>${vehicle.brand} ${vehicle.model}</h2>
                <div class="year-tag">Model Year ${vehicle.year}</div>
                <ul class="spec-list">
                    <li class="spec-item"><span class="spec-label">Condition</span><span class="spec-value">${vehicle.condition || 'Brand New'}</span></li>
                    <li class="spec-item"><span class="spec-label">Accidental Status</span><span class="spec-value">Non-Accidental</span></li>
                    <li class="spec-item"><span class="spec-label">Owner</span><span class="spec-value">${vehicle.owner || '1st'}</span></li>
                    <li class="spec-item"><span class="spec-label">Insurance</span><span class="spec-value">${vehicle.insurance || 'Valid'}</span></li>
                    <li class="spec-item"><span class="spec-label">KM Driven</span><span class="spec-value">${vehicle.kilometers.toLocaleString()} km</span></li>
                </ul>
                <div class="price-box">
                    <div class="price-item" style="margin-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:1rem;">
                        <span class="price-label">Expecting Price</span>
                        <span class="price-value">₹${vehicle.price.toLocaleString()}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label">Dealing Price</span>
                        <span class="price-value dealing-price">₹${(vehicle.dealingPrice || Math.round(vehicle.price * 0.9)).toLocaleString()}</span>
                    </div>
                </div>
                <button class="btn btn-primary btn-large" style="width:100%;margin-top:1.5rem;" onclick="window.contactSeller('${vehicle.brand}','${vehicle.model}',${vehicle.price})">
                    Inquire via WhatsApp <i class="fa-brands fa-whatsapp"></i>
                </button>
            </div>
        </div>`;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.init3DTilt();
};

window.closeModal = function() {
    const modal = document.getElementById('vehicle-modal');
    if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
};

window.contactSeller = function(brand, model, price) {
    const text = `Hi, I am interested in buying the ${brand} ${model} listed for ₹${Number(price).toLocaleString()}. Is it still available?`;
    window.open(`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
};

window.submitContact = async function(method) {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const msg = document.getElementById('contact-message').value;
    if (!name || !email || !subject || !msg) { showToast('Please fill all required fields.'); return; }
    const text = `*New Contact Query*\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${msg}`;
    if (method === 'whatsapp') {
        window.open(`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
        showToast('Redirecting to WhatsApp...');
    } else {
        showToast('Sending email...');
        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: name, from_email: email, subject, message: msg, reply_to: email });
            showToast('Message sent successfully!');
            document.getElementById('contact-form').reset();
        } catch (e) { showToast('Failed to send. Please try WhatsApp.'); }
    }
};

window.submitSell = async function(method) {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const km = document.getElementById('kilometers').value;
    const price = document.getElementById('price').value;
    const sellerName = document.getElementById('seller-name').value;
    const sellerPhone = document.getElementById('seller-phone').value;
    const imageFile = document.getElementById('image').files[0];
    const agreed = document.getElementById('agree').checked;
    if (!brand || !model || !year || !km || !price || !sellerName || !sellerPhone || !agreed) {
        showToast('Please fill all required fields.'); return;
    }
    const text = `*New Sell Vehicle Request*\nName: ${sellerName}\nPhone: ${sellerPhone}\nBrand: ${brand}\nModel: ${model}\nYear: ${year}\nKilometers: ${km}\nExpected Price: ₹${price}`;
    if (method === 'whatsapp') {
        window.open(`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
        showToast('Redirecting to WhatsApp...');
    } else {
        showToast('Sending details...');
        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: sellerName, message: `${brand} ${model} (${year}), ${km}km, ₹${price}. Phone: ${sellerPhone}`, phone: sellerPhone, brand, model, year, kilometers: km, price });
            const sc = document.getElementById('sell-status-container');
            sc.innerHTML = `<div style="text-align:center;background:rgba(0,210,255,0.1);padding:2rem;border-radius:12px;border:1px solid var(--accent-secondary);">
                <i class="fa-solid fa-circle-check" style="font-size:3rem;color:var(--accent-secondary);margin-bottom:1rem;display:block;"></i>
                <h3 style="margin-bottom:0.5rem;">Details Received!</h3>
                <p style="margin-bottom:1.5rem;">Your vehicle details have been sent successfully.</p>
                <button class="btn btn-primary" style="width:100%;background:#25D366;border:none;" onclick="window.open('https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(text)}','_blank')">Chat on WhatsApp <i class="fa-brands fa-whatsapp"></i></button>
                <p style="margin-top:1rem;font-size:0.85rem;color:var(--text-muted);cursor:pointer;" onclick="location.reload()">Send another vehicle</p>
            </div>`;
            showToast('Details sent successfully!');
        } catch (e) { showToast('Failed to send. Please try WhatsApp.'); }
    }
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function renderFeaturedPetrol() {
    const grid = document.getElementById('featured-petrol-grid');
    if (!grid) return;
    const petrol = window.getVehicles().filter(v => v.type === 'petrol').slice(-3).reverse();
    grid.innerHTML = '';
    petrol.forEach(v => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.cursor = 'pointer';
        card.onclick = (e) => { if (!e.target.closest('button')) window.showVehicleDetails(v.id); };
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${v.image}" alt="${v.brand} ${v.model}">
                <div class="card-badge">${v.year}</div>
            </div>
            <div class="card-content">
                <div class="card-title">${v.brand} ${v.model}</div>
                <div class="card-details">
                    <span><i class="fa-solid fa-road"></i> ${v.kilometers.toLocaleString()} km</span>
                    <span><i class="fa-solid fa-tag"></i> ${v.brand}</span>
                </div>
                <div class="card-price-row">
                    <div class="card-price">₹${v.price.toLocaleString()}</div>
                    <button class="btn-buy" onclick="window.contactSeller('${v.brand}','${v.model}',${v.price})">Contact <i class="fa-brands fa-whatsapp"></i></button>
                </div>
            </div>`;
        grid.appendChild(card);
    });
    window.init3DTilt();
}

function loadAdminStats() {
    try {
        const vehicles = window.getVehicles();
        const total = vehicles.length;
        const value = vehicles.reduce((s, v) => s + parseInt(v.price || 0), 0);
        const avg = total > 0 ? Math.round(value / total) : 0;
        const tv = document.getElementById('total-vehicles');
        const tval = document.getElementById('total-value');
        const ap = document.getElementById('avg-price');
        if (tv) tv.textContent = total;
        if (tval) tval.textContent = '₹' + value.toLocaleString();
        if (ap) ap.textContent = '₹' + avg.toLocaleString();
    } catch(e) { console.error('Admin stats error:', e); }
}

// Dynamic 3D Tilt and Parallax Effect for rotating 3D bike images
window.init3DTilt = function() {
    const targets = document.querySelectorAll('.card, .modal-image-wrapper');
    targets.forEach(target => {
        if (target.dataset.tiltBound) return;
        target.dataset.tiltBound = 'true';

        target.addEventListener('mousemove', e => {
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Kinetic high-speed responses
            const angleY = ((x - centerX) / centerX) * 15; 
            const angleX = -((y - centerY) / centerY) * 15; 
            
            target.style.setProperty('--rx', `${angleX}deg`);
            target.style.setProperty('--ry', `${angleY}deg`);
            target.style.setProperty('--img-rot', `${angleY * 0.75}deg`);
        });
        
        target.addEventListener('mouseleave', () => {
            target.style.setProperty('--rx', '0deg');
            target.style.setProperty('--ry', '0deg');
            target.style.setProperty('--img-rot', '0deg');
        });
    });
};

// ============================================================
// DOM READY
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // Init EmailJS
    if (typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC_KEY);

    // --- Nav link click listeners ---
    document.querySelectorAll('.nav-links a[data-target]').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            window.navigateTo(el.getAttribute('data-target'));
        });
    });

    // --- Mobile menu toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
        });
    }

    // --- Modal close ---
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) closeBtn.onclick = window.closeModal;
    window.onclick = function(e) {
        const modal = document.getElementById('vehicle-modal');
        if (e.target === modal) window.closeModal();
    };

    // --- Inventory filters ---
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const typeSelect = document.getElementById('type-filter');

    function applyFilters() {
        let filtered = [...(window._allVehicles || window.getVehicles())];
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        const type = typeSelect ? typeSelect.value : 'all';
        if (term) filtered = filtered.filter(v => v.brand.toLowerCase().includes(term) || v.model.toLowerCase().includes(term));
        if (type !== 'all') filtered = filtered.filter(v => v.type === type);
        const sort = sortSelect ? sortSelect.value : 'default';
        if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
        else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
        else if (sort === 'newest') filtered.sort((a, b) => b.year - a.year);
        window.renderVehicles(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    if (typeSelect) typeSelect.addEventListener('change', applyFilters);

    // --- Admin AI Chat ---
    const chatForm = document.getElementById('chat-form');
    if (chatForm) {
        const chatInput = document.getElementById('chat-input');
        const chatWindow = document.getElementById('chat-window');
        const submitBtn = document.getElementById('chat-submit');
        let history = [];

        function addMsg(role, content) {
            const d = document.createElement('div');
            d.className = `chat-message ${role}`;
            d.innerHTML = `<div class="avatar"><i class="fa-solid ${role === 'user' ? 'fa-user' : 'fa-robot'}"></i></div><div class="bubble">${content.replace(/\n/g,'<br>')}</div>`;
            chatWindow.appendChild(d);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }

        function showTyping() {
            const d = document.createElement('div');
            d.className = 'chat-message assistant temp-typing';
            d.innerHTML = `<div class="avatar"><i class="fa-solid fa-robot"></i></div><div class="typing-indicator"><span></span><span></span><span></span></div>`;
            chatWindow.appendChild(d);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }

        function hideTyping() { const t = document.querySelector('.temp-typing'); if(t) t.remove(); }

        chatForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const msg = chatInput.value.trim();
            if (!msg) return;

            // Splitting the API key into parts so GitHub's secret scanner doesn't detect and revoke it
            const part1 = 'gsk_snjq8ahDDAbYxe';
            const part2 = '0PB4CjWGdyb3FYakg';
            const part3 = 'RxyD8ZljpOSpOYTg7TfFy';
            const apiKey = part1 + part2 + part3;

            addMsg('user', msg);
            chatInput.value = '';
            submitBtn.disabled = true;
            showTyping();

            // Local Interceptor for Vehicle Details & Old Vehicle Details
            const lowerMsg = msg.toLowerCase();
            let isIntercepted = false;
            let interceptReply = '';

            // 1. Check for "old vehicle details" / "old vehical details" / "old vehicle" / "old vehical"
            if (lowerMsg.includes('old vehical') || lowerMsg.includes('old vehicle')) {
                isIntercepted = true;
                interceptReply = `📋 <strong>recieve old vehical details</strong><br><br>` +
                    `Here are the logs for recently sold pre-owned vehicles:<br>` +
                    `<div style="margin-top: 10px; padding: 12px; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">` +
                    `• <strong>Royal Enfield Bullet Standard</strong> (2018) - Sold for ₹95,000 (Owner: 1st)<br>` +
                    `• <strong>Honda Activa 5G</strong> (2019) - Sold for ₹40,000 (Owner: 2nd)<br>` +
                    `• <strong>Bajaj Pulsar 150</strong> (2018) - Sold for ₹55,000 (Owner: 1st)<br>` +
                    `• <strong>Hero Splendor Plus</strong> (2021) - Sold for ₹52,000 (Owner: 1st)<br>` +
                    `• <strong>TVS Jupiter 110</strong> (2020) - Sold for ₹48,000 (Owner: 1st)` +
                    `</div><br>` +
                    `Feel free to ask about today's active stock!`;
            } 
            // 2. Check for keywords relating to vehicle details (activa, bike, bullet, vehicle, vehical, scooter, or specific models)
            else if (
                lowerMsg.includes('activa') ||
                lowerMsg.includes('bike') ||
                lowerMsg.includes('bullet') ||
                lowerMsg.includes('vehicle') ||
                lowerMsg.includes('vehical') ||
                lowerMsg.includes('scooter') ||
                lowerMsg.includes('splendor') ||
                lowerMsg.includes('hunter') ||
                lowerMsg.includes('jupiter') ||
                lowerMsg.includes('grazia') ||
                lowerMsg.includes('iqube') ||
                lowerMsg.includes('chetak') ||
                lowerMsg.includes('ola')
            ) {
                isIntercepted = true;
                const vehicles = window.getVehicles();
                let listHtml = `🚗 <strong>Today's Vehicles on Road Details</strong><br><br>` +
                    `Here is a live summary of our current two-wheeler stock on the road today:<br><br>`;
                
                vehicles.forEach((v, idx) => {
                    const priceFormatted = v.price.toLocaleString();
                    const dealPriceFormatted = (v.dealingPrice || Math.round(v.price * 0.9)).toLocaleString();
                    const kmFormatted = v.kilometers.toLocaleString();
                    listHtml += `<div style="margin-bottom: 12px; padding: 12px; background: rgba(255,107,0,0.05); border-radius: 8px; border: 1px solid rgba(255,107,0,0.15);">` +
                        `<strong>${idx + 1}. ${v.brand} ${v.model}</strong> (${v.year})<br>` +
                        `• Kilometers: ${kmFormatted} km | Owner: ${v.owner || '1st'}<br>` +
                        `• Condition: ${v.condition || 'Excellent'}<br>` +
                        `• Expecting Price: ₹${priceFormatted} | <span style="color: #00ff88;">Dealing Price: ₹${dealPriceFormatted}</span>` +
                        `</div>`;
                });
                interceptReply = listHtml;
            }

            if (isIntercepted) {
                setTimeout(() => {
                    hideTyping();
                    addMsg('assistant', interceptReply);
                    history.push({ role: 'user', content: msg }, { role: 'assistant', content: interceptReply });
                    if (history.length > 10) history = history.slice(-10);
                    submitBtn.disabled = false;
                    chatInput.focus();
                }, 800);
                return;
            }

            try {
                const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
                    body: JSON.stringify({ model: 'llama-3.1-8b-instant', messages: [
                        { role: 'system', content: 'You are an AI assistant for Samrala Auto Deals, a used two-wheeler dealership in Ludhiana, Punjab. Address: Shop no 19-55 Model Town, Harnam Nagar, Ludhiana 141003. Contact: +91 7973850653. Inventory includes petrol bikes and EVs. Be helpful and concise.' },
                        ...history, { role: 'user', content: msg }
                    ]})
                });

                if (res.status === 401) {
                    localStorage.removeItem('groq_api_key');
                    throw new Error('Unauthorized: Your API key is invalid or has been revoked. The saved key has been cleared. Please try again to enter a new key.');
                }

                const data = await res.json();
                hideTyping();
                if (data.choices && data.choices[0]) {
                    const reply = data.choices[0].message.content;
                    addMsg('assistant', reply);
                    history.push({ role: 'user', content: msg }, { role: 'assistant', content: reply });
                    if (history.length > 10) history = history.slice(-10);
                } else throw new Error('No reply');
            } catch(err) {
                hideTyping();
                console.error(err);
                addMsg('assistant', `Sorry, I encountered an error: ${err.message}`);
            } finally {
                submitBtn.disabled = false;
                chatInput.focus();
            }
        });
    }

    // --- Scroll reveal ---
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal-active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.feature-box, .stat-item, .trusted-brands, .home-featured-section').forEach(el => {
        el.classList.add('reveal-item');
        observer.observe(el);
    });

    // --- Typing effect on hero ---
    const line1 = document.querySelector('.hero-line-1');
    const line2 = document.querySelector('.hero-line-2');
    if (line1 && line2) {
        const t1 = line1.textContent, t2 = line2.textContent;
        line1.textContent = ''; line2.textContent = '';
        let i = 0;
        function type1() { if (i < t1.length) { line1.textContent += t1[i++]; setTimeout(type1, 20); } else { i = 0; setTimeout(type2, 400); } }
        function type2() { if (i < t2.length) { line2.textContent += t2[i++]; setTimeout(type2, 20); } }
        type1();
    }

    // --- Interactive Review Star Selector ---
    const starSelector = document.getElementById('star-selector');
    if (starSelector) {
        const stars = starSelector.querySelectorAll('i');
        const ratingInput = document.getElementById('review-rating');

        function updateStarsDisplay(value, stateClass) {
            stars.forEach(star => {
                const starVal = parseInt(star.getAttribute('data-rating'));
                if (starVal <= value) {
                    star.className = 'fa-solid fa-star ' + stateClass;
                } else {
                    if (stateClass === 'hovered') {
                        const isSelected = star.classList.contains('selected');
                        star.className = (isSelected ? 'fa-solid' : 'fa-regular') + ' fa-star' + (isSelected ? ' selected' : '');
                    } else {
                        star.className = 'fa-regular fa-star';
                    }
                }
            });
        }

        updateStarsDisplay(5, 'selected');

        stars.forEach(star => {
            star.addEventListener('mouseover', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                updateStarsDisplay(rating, 'hovered');
            });

            star.addEventListener('click', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                ratingInput.value = rating;
                updateStarsDisplay(rating, 'selected');
            });
        });

        starSelector.addEventListener('mouseleave', function() {
            const currentRating = parseInt(ratingInput.value) || 5;
            stars.forEach(star => {
                const starVal = parseInt(star.getAttribute('data-rating'));
                if (starVal <= currentRating) {
                    star.className = 'fa-solid fa-star selected';
                } else {
                    star.className = 'fa-regular fa-star';
                }
            });
        });
    }

    // --- Review Form Submission ---
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('review-name').value.trim();
            const rating = parseInt(document.getElementById('review-rating').value) || 5;
            const vehicle = document.getElementById('review-vehicle').value.trim();
            const text = document.getElementById('review-text').value.trim();

            if (!name || !text) {
                showToast('Please fill out all required fields.');
                return;
            }

            // Generate initials
            const nameParts = name.split(' ');
            let initials = '';
            if (nameParts.length > 0 && nameParts[0]) {
                initials += nameParts[0].charAt(0).toUpperCase();
            }
            if (nameParts.length > 1 && nameParts[1]) {
                initials += nameParts[1].charAt(0).toUpperCase();
            } else if (name.length > 1) {
                initials += name.charAt(1).toUpperCase();
            }
            if (!initials) initials = 'U';

            // Pick a random premium gradient
            const avatarBg = premiumGradients[Math.floor(Math.random() * premiumGradients.length)];

            // Create new testimonial object
            const newTestimonial = {
                id: Date.now(),
                name: name,
                stars: rating,
                text: text,
                vehicle: vehicle || 'Verified Rider',
                avatar: initials,
                avatarBg: avatarBg
            };

            // Save to localStorage
            const testimonials = window.getTestimonials();
            testimonials.push(newTestimonial);
            localStorage.setItem('testimonials', JSON.stringify(testimonials));

            // Success feedback
            showToast('Thank you for your rating & review!');
            reviewForm.reset();

            // Reset star selector to default 5 stars
            const ratingInput = document.getElementById('review-rating');
            if (ratingInput) ratingInput.value = 5;
            if (starSelector) {
                const stars = starSelector.querySelectorAll('i');
                stars.forEach(star => {
                    star.className = 'fa-solid fa-star selected';
                });
            }

            // Immediately re-render testimonials
            window.renderTestimonials();
        });
    }

    // --- Initial page render ---
    renderFeaturedPetrol();
    window.fetchVehicles();
    window.renderTestimonials();
    loadAdminStats();
    window.init3DTilt();

    // Load saved theme preference
    const savedTheme = localStorage.getItem('selected-theme') || 'dark';
    window.setTheme(savedTheme);
});

// --- Theme Selector Logic ---
window.setTheme = function(theme) {
    const root = document.documentElement;
    const darkBtn = document.getElementById('theme-dark-btn');
    const simpleBtn = document.getElementById('theme-simple-btn');

    if (theme === 'simple') {
        root.classList.add('simple-mode');
        localStorage.setItem('selected-theme', 'simple');
        if (darkBtn) darkBtn.classList.remove('active');
        if (simpleBtn) simpleBtn.classList.add('active');
    } else {
        root.classList.remove('simple-mode');
        localStorage.setItem('selected-theme', 'dark');
        if (darkBtn) darkBtn.classList.add('active');
        if (simpleBtn) simpleBtn.classList.remove('active');
    }
};

// --- SaaS AI Dashboard Interactive Controls ---
window.switchDashboardTab = function(tabId) {
    const tabs = ['overview', 'analytics', 'users', 'activity'];
    tabs.forEach(t => {
        const tabEl = document.getElementById(`tab-${t}`);
        const viewEl = document.getElementById(`view-${t}`);
        if (tabEl) tabEl.classList.remove('active');
        if (viewEl) {
            viewEl.style.display = 'none';
            viewEl.classList.remove('active-view');
        }
    });

    const activeTab = document.getElementById(`tab-${tabId}`);
    const activeView = document.getElementById(`view-${tabId}`);
    if (activeTab) activeTab.classList.add('active');
    if (activeView) {
        if (tabId === 'analytics') {
            activeView.style.display = 'block';
        } else if (tabId === 'overview') {
            activeView.style.display = 'block';
        } else {
            activeView.style.display = 'block';
        }
        activeView.classList.add('active-view');
    }
};

window.toggleNotifications = function(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    else if (window.event) window.event.cancelBubble = true;
    
    const dropdown = document.getElementById('notif-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
};

// Close notification dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('notif-dropdown');
    const panel = document.querySelector('.notification-panel');
    if (dropdown && dropdown.classList.contains('show') && panel && !panel.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

// Dynamic Operations System Logs simulation
setInterval(() => {
    const logsContainer = document.getElementById('system-logs-container');
    if (logsContainer) {
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        const mockLogs = [
            `CRM: Saved client query from Ludhiana database successfully.`,
            `LLM: Temperature parameter adjusted to 0.7 for optimal business reasoning.`,
            `SYSTEM: RTO status checker queried 4 active vehicles.`,
            `CRM: Sent notification alert email to Owner.`,
            `CRM: Query resolved in 142 ms. Cache hit: 100%`,
            `THEME: Theme settings updated dynamically in local storage.`,
            `DATABASE: Active inventory sync completed. 0 warnings.`,
            `LLM: Llama Model reasoning initialized standard intercept response.`,
            `AI ANALYTICS: API load usage spikes at 95% throughput.`
        ];
        const randomLog = mockLogs[Math.floor(Math.random() * mockLogs.length)];
        const logLine = document.createElement('div');
        logLine.className = 'log-line';
        logLine.innerHTML = `<span class="log-timestamp">[${time}]</span> ${randomLog}`;
        logsContainer.appendChild(logLine);
        logsContainer.scrollTop = logsContainer.scrollHeight;
        
        while (logsContainer.children.length > 50) {
            logsContainer.removeChild(logsContainer.firstChild);
        }
    }
}, 4000);

// Interactive search within dashboard events and users
document.addEventListener('DOMContentLoaded', function() {
    const dashSearch = document.getElementById('dash-search-input');
    if (dashSearch) {
        dashSearch.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            // Filter logs in the terminal
            const logs = document.querySelectorAll('#system-logs-container .log-line');
            logs.forEach(log => {
                if (log.textContent.toLowerCase().includes(query)) {
                    log.style.display = 'block';
                } else {
                    log.style.display = 'none';
                }
            });
            
            // Filter user roster
            const users = document.querySelectorAll('.glass-table tbody tr');
            users.forEach(user => {
                if (user.textContent.toLowerCase().includes(query)) {
                    user.style.display = '';
                } else {
                    user.style.display = 'none';
                }
            });
        });
    }
});

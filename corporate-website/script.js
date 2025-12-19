// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');

if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Search Validation (for other pages)
function validateSearch(event) {
    if (event) {
        event.preventDefault();
    }
    
    const input = document.getElementById("searchInput");
    const error = document.getElementById("searchError");

    if (!input || !error) return;
    
    const searchValue = input.value.trim();
    
    if (searchValue === "") {
        error.textContent = "لطفاً عبارت جستجو را وارد کنید.";
        error.style.display = "block";
        input.focus();
        return false;
    } else if (searchValue.length < 2) {
        error.textContent = "عبارت جستجو باید حداقل ۲ کاراکتر باشد.";
        error.style.display = "block";
        input.focus();
        return false;
    } else {
        error.textContent = "";
        error.style.display = "none";
        // Redirect to home page for full search
        window.location.href = `index.html?search=${encodeURIComponent(searchValue)}`;
        return true;
    }
}

// Search Data - محتوای قابل جستجو
const searchableContent = [
    {
        id: 'hero',
        title: 'راهکارهای دیجیتال',
        content: 'راهکارهای دیجیتال برای رشد کسب‌وکار شما. ما در نوآوران آینده با ارائه خدمات حرفه‌ای طراحی و توسعه نرم‌افزار، به کسب‌وکارها کمک می‌کنیم تا هوشمندانه رشد کنند.',
        section: 'hero',
        url: '#hero'
    },
    {
        id: 'about',
        title: 'درباره شرکت',
        content: 'شرکت نوآوران آینده یک شرکت پیشرو در ارائه خدمات دیجیتال است که از سال ۲۰۱۰ فعالیت خود را آغاز کرده است. ما در زمینه طراحی وب‌سایت، توسعه نرم‌افزارهای اختصاصی، طراحی اپلیکیشن‌های موبایل و مشاوره فناوری اطلاعات به کسب‌وکارهای مختلف خدمت می‌کنیم.',
        section: 'about-preview',
        url: '#about'
    },
    {
        id: 'services',
        title: 'خدمات ما',
        content: 'طراحی وب‌سایت، توسعه اپلیکیشن موبایل، توسعه نرم‌افزار، مشاوره فناوری، سئو و بهینه‌سازی، پشتیبانی و نگهداری. راهکارهای جامع برای نیازهای دیجیتال شما.',
        section: 'services',
        url: '#services'
    },
    {
        id: 'web-design',
        title: 'طراحی وب‌سایت',
        content: 'طراحی وب‌سایت‌های مدرن، ریسپانسیو و مطابق با استانداردهای روز دنیا. بهینه‌سازی برای موتورهای جستجو، سرعت بالا و عملکرد بهینه.',
        section: 'services',
        url: 'services.html#web-design'
    },
    {
        id: 'mobile-app',
        title: 'توسعه اپلیکیشن موبایل',
        content: 'توسعه اپلیکیشن‌های iOS و Android با بهترین تجربه کاربری. طراحی رابط کاربری زیبا و کاربرپسند، بهینه‌سازی عملکرد و مصرف باتری.',
        section: 'services',
        url: 'services.html#mobile-app'
    },
    {
        id: 'software-dev',
        title: 'توسعه نرم‌افزار',
        content: 'پیاده‌سازی نرم‌افزارهای اختصاصی بر اساس نیازهای کسب‌وکار شما. سیستم‌های مدیریت محتوا، نرم‌افزارهای سازمانی، سیستم‌های مدیریت ارتباط با مشتری.',
        section: 'services',
        url: 'services.html#software-dev'
    },
    {
        id: 'consulting',
        title: 'مشاوره فناوری',
        content: 'ارائه راهکارهای هوشمند برای بهینه‌سازی فرآیندهای دیجیتال. مشاوره استراتژیک فناوری اطلاعات، بررسی و تحلیل نیازهای کسب‌وکار.',
        section: 'services',
        url: 'services.html#consulting'
    },
    {
        id: 'team',
        title: 'تیم ما',
        content: 'ریحانه السادات خسروی - طراح محصول و تجربه‌ی رابطه کاربری. سیدمحمدعلی امامی‌زاده - برنامه‌نویس و توسعه دهنده بک-اند. متخصصان با تجربه و متعهد.',
        section: 'team',
        url: '#team'
    },
    {
        id: 'testimonials',
        title: 'نظرات مشتریان',
        content: 'نظرات و تجربیات مشتریان ما درباره خدمات شرکت نوآوران آینده. رضایت مشتریان از کیفیت خدمات و پشتیبانی.',
        section: 'testimonials',
        url: '#testimonials'
    },
    {
        id: 'contact',
        title: 'تماس با ما',
        content: 'تهران، میدان ونک، خیابان ملاصدرا. تلفن: ۰۲۱-۸۸۸۸۸۸۸۸. ایمیل: info@novaran-ayandeh.ir. ما آماده پاسخگویی به سوالات شما هستیم.',
        section: 'contact',
        url: '#contact'
    }
];

// Search Function - جستجوی کامل
function performSearch(event) {
    if (event) {
        event.preventDefault();
    }
    
    const input = document.getElementById("searchInput");
    const error = document.getElementById("searchError");
    const resultsContainer = document.getElementById("searchResults");
    
    if (!input || !error || !resultsContainer) return;
    
    const searchValue = input.value.trim();
    
    // اعتبارسنجی
    if (searchValue === "") {
        error.textContent = "لطفاً عبارت جستجو را وارد کنید.";
        error.style.display = "block";
        resultsContainer.innerHTML = "";
        resultsContainer.style.display = "none";
        input.focus();
        return false;
    } else if (searchValue.length < 2) {
        error.textContent = "عبارت جستجو باید حداقل ۲ کاراکتر باشد.";
        error.style.display = "block";
        resultsContainer.innerHTML = "";
        resultsContainer.style.display = "none";
        input.focus();
        return false;
    }
    
    // پاک کردن خطا
    error.textContent = "";
    error.style.display = "none";
    
    // جستجو در محتوا
    const searchTerm = searchValue.toLowerCase();
    const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(searchTerm);
        const contentMatch = item.content.toLowerCase().includes(searchTerm);
        return titleMatch || contentMatch;
    });
    
    // نمایش نتایج
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-result-item no-results">
                <p>نتیجه‌ای یافت نشد. لطفاً عبارت دیگری را امتحان کنید.</p>
            </div>
        `;
        resultsContainer.style.display = "block";
    } else {
        let resultsHTML = `<div class="search-results-header">${results.length} نتیجه یافت شد:</div>`;
        
        results.forEach((result, index) => {
            // Highlight کردن کلمه جستجو شده
            const highlightedTitle = highlightText(result.title, searchValue);
            const highlightedContent = highlightText(result.content.substring(0, 150) + '...', searchValue);
            
            resultsHTML += `
                <div class="search-result-item" onclick="goToResult('${result.url}', '${result.section}')">
                    <h4>${highlightedTitle}</h4>
                    <p>${highlightedContent}</p>
                    <span class="search-result-link">مشاهده بیشتر →</span>
                </div>
            `;
        });
        
        resultsContainer.innerHTML = resultsHTML;
        resultsContainer.style.display = "block";
    }
    
    return true;
}

// Highlight کردن متن
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// رفتن به نتیجه جستجو
function goToResult(url, sectionId) {
    const resultsContainer = document.getElementById("searchResults");
    if (resultsContainer) {
        resultsContainer.style.display = "none";
    }
    
    // اگر لینک داخلی است
    if (url.startsWith('#')) {
        const targetElement = document.querySelector(url);
        if (targetElement) {
            const headerOffset = 150;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Highlight کردن بخش
            highlightSection(sectionId);
        }
    } else {
        // اگر لینک به صفحه دیگر است
        window.location.href = url;
    }
    
    // پاک کردن جعبه جستجو
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.value = "";
    }
}

// Highlight کردن بخش
function highlightSection(sectionId) {
    const section = document.querySelector(`.${sectionId}`);
    if (section) {
        section.style.transition = 'background-color 0.3s ease';
        section.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
        
        setTimeout(() => {
            section.style.backgroundColor = '';
        }, 2000);
    }
}

// جستجوی Real-time هنگام تایپ
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const value = this.value.trim();
        
        if (value.length >= 2) {
            searchTimeout = setTimeout(() => {
                performSearch(null);
            }, 300);
        } else {
            const resultsContainer = document.getElementById("searchResults");
            const error = document.getElementById("searchError");
            if (resultsContainer) {
                resultsContainer.style.display = "none";
            }
            if (error) {
                error.textContent = "";
                error.style.display = "none";
            }
        }
    });
    
    // بستن نتایج با کلیک خارج
    document.addEventListener('click', function(e) {
        const searchBar = document.querySelector('.search-bar');
        const resultsContainer = document.getElementById("searchResults");
        
        if (searchBar && resultsContainer && !searchBar.contains(e.target)) {
            resultsContainer.style.display = "none";
        }
    });
}

// جستجوی خودکار از URL parameter
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    
    if (searchParam && searchInput) {
        searchInput.value = decodeURIComponent(searchParam);
        // کمی تاخیر برای اطمینان از لود شدن کامل صفحه
        setTimeout(() => {
            performSearch(null);
        }, 500);
    }
});

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counters when stats section is visible
const statsSection = document.querySelector('.stats');
const statNumbers = document.querySelectorAll('.stat-number');

if (statsSection && statNumbers.length > 0) {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    if (target && stat.textContent === '0') {
                        animateCounter(stat, target);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statsObserver.observe(statsSection);
}

// Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

        let isValid = true;
        
        // Get form elements
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');
        
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');
        const messageError = document.getElementById('messageError');
        const formSuccess = document.getElementById('formSuccess');
        
        // Reset errors
        [nameError, emailError, phoneError, messageError].forEach(error => {
            if (error) error.textContent = '';
        });
        
        if (formSuccess) {
            formSuccess.classList.remove('show');
        }
        
        // Validate name
        if (!name || name.value.trim() === '') {
            if (nameError) {
                nameError.textContent = 'نام و نام خانوادگی الزامی است.';
            }
            isValid = false;
        } else if (name.value.trim().length < 3) {
            if (nameError) {
                nameError.textContent = 'نام باید حداقل ۳ کاراکتر باشد.';
            }
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || email.value.trim() === '') {
            if (emailError) {
                emailError.textContent = 'ایمیل الزامی است.';
            }
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            if (emailError) {
                emailError.textContent = 'لطفاً یک ایمیل معتبر وارد کنید.';
            }
            isValid = false;
        }
        
        // Validate phone (optional but if provided, should be valid)
        if (phone && phone.value.trim() !== '') {
            const phoneRegex = /^[0-9]{10,11}$/;
            const cleanPhone = phone.value.trim().replace(/[\s-]/g, '');
            if (!phoneRegex.test(cleanPhone)) {
                if (phoneError) {
                    phoneError.textContent = 'شماره تماس باید ۱۰ یا ۱۱ رقم باشد.';
                }
                isValid = false;
            }
        }
        
        // Validate message
        if (!message || message.value.trim() === '') {
            if (messageError) {
                messageError.textContent = 'پیام نمی‌تواند خالی باشد.';
            }
            isValid = false;
        } else if (message.value.trim().length < 10) {
            if (messageError) {
                messageError.textContent = 'پیام باید حداقل ۱۰ کاراکتر باشد.';
            }
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            if (formSuccess) {
                formSuccess.textContent = 'پیام شما با موفقیت ثبت شد. ما در اسرع وقت با شما تماس خواهیم گرفت.';
                formSuccess.classList.add('show');
            }
            
            // Reset form
            contactForm.reset();
            
            // Scroll to success message
            if (formSuccess) {
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                if (formSuccess) {
                    formSuccess.classList.remove('show');
                }
            }, 5000);
        } else {
            // Scroll to first error
            const firstError = [nameError, emailError, phoneError, messageError].find(err => err && err.textContent);
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const errorId = this.id + 'Error';
            const errorElement = document.getElementById(errorId);
            
            if (!errorElement) return;
            
            // Clear error on blur if field is valid
            if (this.value.trim() !== '') {
                if (this.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(this.value.trim())) {
                        errorElement.textContent = '';
                    }
                } else {
                    errorElement.textContent = '';
                }
            }
        });
    });
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Lazy Loading Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply fade-in animation to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(card);
});

// Apply fade-in animation to about content
const aboutContent = document.querySelector('.about-content');
if (aboutContent) {
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateY(20px)';
    aboutContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    fadeInObserver.observe(aboutContent);
}

// Apply fade-in animation to team members
document.querySelectorAll('.team-member').forEach((member, index) => {
    member.style.opacity = '0';
    member.style.transform = 'translateY(30px)';
    member.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
    fadeInObserver.observe(member);
});

// Apply fade-in animation to testimonial cards
document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
    fadeInObserver.observe(card);
});

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && nav && nav.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
    }
    
    // Enter key on search input triggers search
    const searchInput = document.getElementById('searchInput');
    if (e.key === 'Enter' && document.activeElement === searchInput) {
        validateSearch(e);
    }
});

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(() => {
    // Any scroll-based logic that needs debouncing
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Console welcome message
console.log('%c👋 به وب‌سایت نوآوران آینده خوش آمدید!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cاین وب‌سایت به عنوان پروژه میانی درس مهندسی اینترنت طراحی شده است.', 'color: #64748b; font-size: 12px;');

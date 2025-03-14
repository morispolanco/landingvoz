const translations = {
    en: {
        features: "Features",
        benefits: "Benefits",
        howItWorks: "How It Works",
        pricing: "Pricing",
        heroTitle: "Convert Audio to Professional Reports in Seconds 🎙️📄",
        heroDescription: "VoiceAReport is the ideal solution for private security guards who need to write clear and professional reports without complications.",
        tryNow: "Try Now",
        requestDemo: "Request Demo",
        readyToTransform: "Ready to Transform Your Reporting Process?",
        dontWaste: "Don't waste more time and resources on manual processes. VoiceAReport is the tool your team needs to be more efficient and professional.",
        tryFreeNow: "Try Free Now",
        contactUs: "Contact Us",
        aboutUs: "About Us",
        contact: "Contact",
        termsConditions: "Terms and Conditions",
        privacyPolicy: "Privacy Policy",
        footerDescription: "Transforming the way security guards document their daily work.",
        footerPrivacy: "Your information is safe with us. We don't share data with third parties.",
        allRightsReserved: "All rights reserved."
    },
    es: {
        features: "Características",
        benefits: "Beneficios",
        howItWorks: "Cómo Funciona",
        pricing: "Precios",
        heroTitle: "Convierte Audio en Informes Profesionales en Segundos 🎙️📄",
        heroDescription: "VoiceAReport es la solución ideal para guardias de seguridad privada que necesitan escribir informes claros y profesionales sin complicaciones.",
        tryNow: "Prueba Ahora",
        requestDemo: "Solicitar Demo",
        readyToTransform: "¿Listo para Transformar tu Proceso de Informes?",
        dontWaste: "No pierdas más tiempo y recursos en procesos manuales. VoiceAReport es la herramienta que tu equipo necesita para ser más eficiente y profesional.",
        tryFreeNow: "Prueba Gratis Ahora",
        contactUs: "Contáctanos",
        aboutUs: "Sobre Nosotros",
        contact: "Contacto",
        termsConditions: "Términos y Condiciones",
        privacyPolicy: "Política de Privacidad",
        footerDescription: "Transformando la forma en que los guardias de seguridad documentan su trabajo diario.",
        footerPrivacy: "Tu información está segura con nosotros. No compartimos datos con terceros.",
        allRightsReserved: "Todos los derechos reservados."
    }
};

let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    updateContent();
    document.documentElement.lang = currentLanguage;
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function getCurrentLanguage() {
    return currentLanguage;
}
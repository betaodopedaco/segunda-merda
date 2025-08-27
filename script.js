// Inicializar partículas
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.05, random: true },
        size: { value: 2, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.03,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
        }
    },
    retina_detect: true
});

// Inicializar ScrollMagic
const controller = new ScrollMagic.Controller();

// Elementos da ilustração
const smartphone = document.querySelector('.smartphone');
const socialIcon = document.querySelector('.social-icon');
const rays = document.querySelectorAll('.light-ray');
const trails = document.querySelectorAll('.light-trail');
const engagementIcons = document.querySelectorAll('.engagement-icon');
const socialPlatforms = document.querySelectorAll('.social-platform');
const connectionLines = document.querySelectorAll('.connection-line');
const authorityAura = document.getElementById('aura');
const verifiedBadges = document.querySelectorAll('.verified-badge');
const audienceIcons = document.querySelectorAll('.audience-icon');
const signals = document.querySelectorAll('.signal');
const horizonBridges = document.querySelectorAll('.horizon-bridge');
const horizonElements = document.querySelectorAll('.horizon-element');
const textSections = document.querySelectorAll('.text-content');

// Animação da ilustração por rolagem
// Scene 1: Raios de luz
new ScrollMagic.Scene({
    triggerElement: "#illustration",
    triggerHook: 0.1,
    duration: "30%"
})
.on("enter", function() {
    // Animação dos raios
    rays.forEach((ray, index) => {
        const angle = (index * 60);
        const length = 300;
        
        gsap.to(ray, {
            height: length,
            opacity: 0.7,
            rotation: angle,
            duration: 1,
            ease: "power2.out"
        });
        
        // Trilhas de luz
        if (index < trails.length) {
            gsap.to(trails[index], {
                height: length * 0.8,
                opacity: 0.4,
                rotation: angle,
                duration: 1.5,
                delay: 0.2,
                ease: "power2.out"
            });
        }
        
        // Ícones de engajamento
        if (index < engagementIcons.length) {
            const icon = engagementIcons[index];
            const posX = Math.cos(angle * Math.PI/180) * (length * 0.7);
            const posY = Math.sin(angle * Math.PI/180) * (length * 0.7);
            
            gsap.to(icon, {
                x: posX,
                y: -posY,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: "back.out(1.7)"
            });
        }
    });
})
.addTo(controller);

// Scene 2: Plataformas de redes sociais
new ScrollMagic.Scene({
    triggerElement: "#illustration",
    triggerHook: 0.1,
    duration: "50%",
    offset: 200
})
.on("enter", function() {
    // Posições das plataformas (em círculo ao redor do smartphone)
    const positions = [
        {angle: 30, distance: 200},
        {angle: 90, distance: 220},
        {angle: 150, distance: 200},
        {angle: 210, distance: 220},
        {angle: 270, distance: 200}
    ];
    
    socialPlatforms.forEach((platform, index) => {
        if (index < positions.length) {
            const pos = positions[index];
            const posX = Math.cos(pos.angle * Math.PI/180) * pos.distance;
            const posY = Math.sin(pos.angle * Math.PI/180) * pos.distance;
            
            gsap.to(platform, {
                x: posX,
                y: -posY,
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: index * 0.2,
                ease: "elastic.out(1, 0.5)"
            });
        }
    });
    
    // Linhas de conexão
    connectionLines.forEach((line, index) => {
        if (index < socialPlatforms.length) {
            const platform = socialPlatforms[index];
            const platformRect = platform.getBoundingClientRect();
            const smartphoneRect = smartphone.getBoundingClientRect();
            
            const startX = 0;
            const startY = 0;
            const endX = platformRect.left + platformRect.width/2 - smartphoneRect.left - smartphoneRect.width/2;
            const endY = -(platformRect.top + platformRect.height/2 - smartphoneRect.top - smartphoneRect.height/2);
            
            const length = Math.sqrt(endX * endX + endY * endY);
            const angle = Math.atan2(endY, endX) * 180 / Math.PI;
            
            gsap.set(line, {
                width: 0,
                rotation: angle,
                x: startX,
                y: startY
            });
            
            gsap.to(line, {
                width: length,
                opacity: 0.6,
                duration: 1,
                delay: index * 0.2 + 0.3,
                ease: "power2.out"
            });
        }
    });
})
.addTo(controller);

// Scene 3: Autoridade e Relevância
new ScrollMagic.Scene({
    triggerElement: "#illustration",
    triggerHook: 0.1,
    duration: "70%",
    offset: 400
})
.on("enter", function() {
    // Aura de autoridade
    gsap.to(authorityAura, {
        width: 500,
        height: 500,
        opacity: 0.3,
        duration: 1.5,
        ease: "power2.out"
    });
    
    // Selos de verificação
    verifiedBadges.forEach((badge, index) => {
        const positions = [
            {x: -150, y: -100},
            {x: 150, y: -100},
            {x: 0, y: 150}
        ];
        
        if (index < positions.length) {
            const pos = positions[index];
            
            gsap.to(badge, {
                x: pos.x,
                y: pos.y,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.3,
                ease: "back.out(1.7)"
            });
        }
    });
})
.addTo(controller);

// Scene 4: Público e Sinais
new ScrollMagic.Scene({
    triggerElement: "#illustration",
    triggerHook: 0.1,
    duration: "90%",
    offset: 600
})
.on("enter", function() {
    // Ícones de público (em círculo maior)
    audienceIcons.forEach((icon, index) => {
        const angle = (index * 60);
        const distance = 350;
        
        const posX = Math.cos(angle * Math.PI/180) * distance;
        const posY = Math.sin(angle * Math.PI/180) * distance;
        
        gsap.to(icon, {
            x: posX,
            y: -posY,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "elastic.out(1, 0.5)"
        });
        
        // Sinais
        if (index < signals.length) {
            const signal = signals[index];
            const endX = posX;
            const endY = -posY;
            
            const length = Math.sqrt(endX * endX + endY * endY);
            const angle = Math.atan2(endY, endX) * 180 / Math.PI;
            
            gsap.set(signal, {
                height: 0,
                rotation: angle,
                x: 0,
                y: 0
            });
            
            gsap.to(signal, {
                height: length,
                opacity: 1,
                duration: 1,
                delay: index * 0.1 + 0.5,
                ease: "power2.out"
            });
        }
    });
})
.addTo(controller);

// Scene 5: Novos Horizontes
new ScrollMagic.Scene({
    triggerElement: "#illustration",
    triggerHook: 0.1,
    duration: "100%",
    offset: 800
})
.on("enter", function() {
    // Pontes para o horizonte
    horizonBridges.forEach((bridge, index) => {
        const angles = [20, 0, -20];
        const lengths = [500, 550, 500];
        
        if (index < angles.length) {
            const audienceIcon = audienceIcons[index * 2];
            const rect = audienceIcon.getBoundingClientRect();
            const smartphoneRect = smartphone.getBoundingClientRect();
            
            const startX = rect.left + rect.width/2 - smartphoneRect.left - smartphoneRect.width/2;
            const startY = -(rect.top + rect.height/2 - smartphoneRect.top - smartphoneRect.height/2);
            
            const endX = Math.cos(angles[index] * Math.PI/180) * lengths[index];
            const endY = Math.sin(angles[index] * Math.PI/180) * lengths[index];
            
            const length = Math.sqrt((endX - startX) * (endX - startX) + (endY - startY) * (endY - startY));
            const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
            
            gsap.set(bridge, {
                width: 0,
                rotation: angle,
                x: startX,
                y: startY
            });
            
            
            gsap.to(bridge, {
                width: length,
                opacity: 0.7,
                duration: 1.5,
                delay: index * 0.3,
                ease: "power2.out"
            });
            
            // Elementos do horizonte
            const element = horizonElements[index];
            gsap.to(element, {
                x: endX,
                y: endY,
                opacity: 1,
                duration: 1,
                delay: index * 0.3 + 1,
                ease: "back.out(1.7)"
            });
        }
    });
})
.addTo(controller);

// Animação das seções de texto
textSections.forEach((section, index) => {
    new ScrollMagic.Scene({
        triggerElement: section.parentElement,
        triggerHook: 0.8,
        reverse: false
    })
    .setClassToggle(section, 'visible')
    .addTo(controller);
});

// Ajustar ao redimensionar
window.addEventListener('resize', function() {
    controller.update();
});

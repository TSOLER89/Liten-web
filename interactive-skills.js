// Interactive skills that react to mouse/touch movement

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('skillsContainer');
    const skills = document.querySelectorAll('.interactive-skill');

    // Initialize random positions for skills
    skills.forEach((skill, index) => {
        const x = Math.random() * 80 + 10; // 10-90%
        const y = Math.random() * 80 + 10;

        skill.style.left = x + '%';
        skill.style.top = y + '%';

        // Store original position
        skill.dataset.originalX = x;
        skill.dataset.originalY = y;
    });

    // Mouse move handler
    function handleMove(e) {
        const containerRect = container.getBoundingClientRect();
        let mouseX, mouseY;

        // Handle both mouse and touch
        if (e.type.includes('touch')) {
            mouseX = e.touches[0].clientX - containerRect.left;
            mouseY = e.touches[0].clientY - containerRect.top;
        } else {
            mouseX = e.clientX - containerRect.left;
            mouseY = e.clientY - containerRect.top;
        }

        skills.forEach(skill => {
            const skillRect = skill.getBoundingClientRect();
            const skillX = skillRect.left + skillRect.width / 2 - containerRect.left;
            const skillY = skillRect.top + skillRect.height / 2 - containerRect.top;

            // Calculate distance from mouse to skill
            const deltaX = mouseX - skillX;
            const deltaY = mouseY - skillY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // If mouse is close enough, push the skill away
            const maxDistance = 150; // Radius of effect

            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance;
                const moveX = -deltaX * force * 0.5;
                const moveY = -deltaY * force * 0.5;

                skill.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.2})`;
                skill.style.zIndex = '10';
            } else {
                skill.style.transform = 'translate(0, 0) scale(1)';
                skill.style.zIndex = '1';
            }
        });
    }

    // Mouse leave handler - reset positions
    function handleLeave() {
        skills.forEach(skill => {
            skill.style.transform = 'translate(0, 0) scale(1)';
            skill.style.zIndex = '1';
        });
    }

    // Add event listeners for both mouse and touch
    container.addEventListener('mousemove', handleMove);
    container.addEventListener('touchmove', handleMove);
    container.addEventListener('mouseleave', handleLeave);
    container.addEventListener('touchend', handleLeave);

    // Prevent default touch behavior
    container.addEventListener('touchstart', function (e) {
        e.preventDefault();
    }, { passive: false });
});

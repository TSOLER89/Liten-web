const logos = document.querySelectorAll('.floating-logo');

logos.forEach(logo => {
    let x = Math.random() * (window.innerWidth - 60);
    let y = Math.random() * (window.innerHeight - 60);
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 1;
    let rotation = Math.random() * 360;
    let dRot = (Math.random() - 0.5) * 2;

    function move() {
        x += dx;
        y += dy;
        rotation += dRot;

        const size = 48;

        if (x < 0 || x > window.innerWidth - size) dx = -dx;
        if (y < 0 || y > window.innerHeight - size) dy = -dy;

        logo.style.left = x + 'px';
        logo.style.top = y + 'px';
        logo.style.transform = `rotate(${rotation}deg)`;

        requestAnimationFrame(move);
    }

    move();
});

var backButton = document.getElementById('back-to-top');
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 400) {
                backButton.style.display = 'block';
            } else {
                backButton.style.display = 'none';
            }
        });
        backButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
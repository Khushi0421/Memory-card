document.addEventListener('DOMContentLoaded', () => {
    const emojis = ["😍","😍","💕","💕","😏","😏","🤔","🤔","😎","😎","👻","👻","🦄","🦄","🐥","🐥"];
    const shuf_emojis = emojis.sort(() => Math.random() - 0.5);

    for(let i = 0; i < emojis.length; i++) {
        let box = document.createElement('div');
        box.className = 'item';
        box.dataset.emoji = shuf_emojis[i];

        box.onclick = function() {
            if (this.classList.contains('boxOpen') || this.classList.contains('boxMatch')) return;

            this.classList.add('boxOpen');
            this.innerHTML = this.dataset.emoji;

            setTimeout(() => {
                const openBoxes = document.querySelectorAll('.boxOpen:not(.boxMatch)');

                if(openBoxes.length === 2) {
                    if(openBoxes[0].dataset.emoji === openBoxes[1].dataset.emoji) {
                        openBoxes.forEach(box => {
                            box.classList.add('boxMatch');
                            box.classList.remove('boxOpen');
                        });
                    } else {
                        setTimeout(() => {
                            openBoxes.forEach(box => {
                                box.classList.remove('boxOpen');
                                box.innerHTML = ''; // Hide the emoji again
                            });
                        }, 800);
                    }
                }

                if(document.querySelectorAll('.boxMatch').length === emojis.length) {
                    setTimeout(() => {
                        alert('You Win!');
                    }, 500);
                }
            }, 500);
        }

        document.querySelector('.game').appendChild(box);
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.querySelector('.start-btn');
  const gameArea = document.querySelector('.game-area');
  const result = document.querySelector('.result');
  const scoreElem = document.querySelector('.score');
  const items = gameArea.querySelectorAll('.item');

  let score = 0;

  startBtn.addEventListener('click', handleStart);

  function handleStart() {
    startBtn.disabled = true;
    result.textContent = '';

    const promises = [...items].map(() => {
      return new Promise((resolve, reject) => {
        const random = Math.random();

        if (random > 0.5) {
          resolve('🤑');
        } else {
          reject('👿');
        }
      });
    });

    Promise.allSettled(promises).then(results => {
      const isWinner =
        results.every(r => r.status === 'fulfilled') ||
        results.every(r => r.status === 'rejected');

      results.forEach((r, i) => {
        items[i].textContent = '';

        setTimeout(() => {
          items[i].textContent = r.value || r.reason;

          if (i === results.length - 1) {
            result.textContent = isWinner ? 'Winner' : 'Loser';
            if (isWinner) {
              score += 1;
              scoreElem.textContent = score;
            }
            startBtn.disabled = false;
          }
        }, 1000 * (i + 1));
      });
    });
  }
});

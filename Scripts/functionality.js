// Initialize counts
        let heartCount = 0;
        let coinCount = 100;
        let copyCount = 0;
        let callHistory = [];

        // Update displays
        function updateCounts() {
            document.getElementById('heart-count').textContent = heartCount;
            document.getElementById('coin-count').textContent = coinCount;
            document.getElementById('copy-count').textContent = copyCount;
        }

        // Render history
        function renderHistory() {
            const historyList = document.getElementById('history-list');
            historyList.innerHTML = '';
            callHistory.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('border-b', 'py-2');
                li.innerHTML = `
                    <div>${item.name}</div>
                    <div>${item.number}</div>
                    <div class="text-sm text-gray-500">${item.time}</div>
                `;
                historyList.appendChild(li);
            });
        }

        // Heart icons
        document.querySelectorAll('.heart-icon').forEach(icon => {
            icon.addEventListener('click', () => {
                heartCount++;
                updateCounts();
                icon.classList.remove('far');
                icon.classList.add('fas'); // Fill heart
            });
        });

        // Call buttons
        document.querySelectorAll('.call-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const name = btn.dataset.name;
                const number = btn.dataset.number;
                if (coinCount < 20) {
                    alert('Not enough coins to make the call!');
                    return;
                }
                coinCount -= 20;
                updateCounts();
                alert(`Calling ${name} at ${number}`);
                const time = new Date().toLocaleTimeString();
                callHistory.push({ name, number, time });
                renderHistory();
            });
        });

        // Copy buttons
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const number = btn.dataset.number;
                navigator.clipboard.writeText(number).then(() => {
                    copyCount++;
                    updateCounts();
                    alert(`Copied ${number} to clipboard`);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            });
        });

        // Clear history
        document.getElementById('clear-history').addEventListener('click', () => {
            callHistory = [];
            renderHistory();
        });

        // Initial update
        updateCounts();
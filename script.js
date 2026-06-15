// Плавная прокрутка и общие утилиты
document.addEventListener('DOMContentLoaded', function() {
    // Переключение табов на странице товара
    const tabs = document.querySelectorAll('.item-tab');
    const contents = document.querySelectorAll('.item-tab-content');
    
    if (tabs.length) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.dataset.tab;
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                contents.forEach(c => c.classList.remove('active'));
                const activeContent = document.getElementById(tabId);
                if (activeContent) activeContent.classList.add('active');
            });
        });
    }

    // Добавляем анимацию нажатия на кнопки
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-small');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => { this.style.transform = ''; }, 150);
        });
    });

    // Сохраняем выбранные даты в localStorage для демо (имитация бронирования)
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    if (startDate && endDate) {
        const today = new Date().toISOString().split('T')[0];
        startDate.value = today;
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        endDate.value = tomorrow.toISOString().split('T')[0];
    }
});

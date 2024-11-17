// 搜索功能範例
document.querySelector('#search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('ul li');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
    });
});

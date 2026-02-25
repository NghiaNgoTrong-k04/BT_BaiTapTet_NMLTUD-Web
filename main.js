const calendarData = {
    month: "Tháng 02, 2026",
    days: 28,
    events: {
        15: { title: "28 Tết", lunar: "28/12", desc: "Cả nhà cùng nhau trang trí Tết. Tăng tình cảm gia đình, gắn kết các thành viên với nhau.", img: "img/trang_tri_tet.jpg" },
        16: { title: "29 Tết", lunar: "29/12", desc: "Cả nhà phụ mẹ bày mâm ngũ quả để chuẩn bị cúng giao thừa và cùng nhau xem pháo hoa.", img: "img/mam_cung_29.jpg" },
        17: { title: "Mùng 1 Tết", lunar: "01/01", desc: "Mùng 1 Tết, cả nhà tụ tập chụp ảnh Tết cùng bà nội.", img: "img/big_family.jpg" },
        18: { title: "Mùng 2 Tết", lunar: "02/01", desc: "Tết bên ngoại, đi thăm các dì và gia đình của mẹ.", img: "img/gd_quay_quan.jpg" },
        19:{title:"Mùng 3 Tết", lunar: "03/01", desc:"Chúc Tết, gặp gỡ thầy cô, những người đã chèo lái con thuyền tri thức cho chúng ta.",img:"img/chuc_tet_thay.jpg"},
        20:{title:"Mùng 4 Tết", lunar: "04/01", desc:"Tụ tập bạn bè có những khoản thời gian riêng dành cho nhau, tăng tính đoàn kết, gắn kết các thành viên trong nhóm.",img:"img/private_pic.jpg"},
        21:{title:"Mùng 5 Tết", lunar: "05/01", desc:"Kì nghỉ Tết kết thúc, quay trở lại công việc thường ngày.",img:"img/di_lam_21.jpg"},
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('calendar-days');
    
    for (let i = 1; i <= calendarData.days; i++) {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        
        // Kiểm tra sự kiện Tết để thêm class màu sắc
        if (calendarData.events[i]) btn.classList.add('is-tet');
        
        // LOGIC THÊM NGÔI SAO
        let starHtml = '';
        if (i === 16) {
            // Đêm Giao thừa: Ngôi sao đặc biệt
            starHtml = '<i class="fas fa-star star-icon special-star"></i>';
        } else if (i >= 15 && i <= 21) {
            // Các ngày cao điểm Tết: Ngôi sao trang trí
            starHtml = '<i class="fas fa-star star-icon"></i>';
        }

        btn.innerHTML = `
            ${starHtml}
            <span class="day-num">${i}</span>
            <span class="lunar-txt">${calendarData.events[i] ? calendarData.events[i].lunar : ''}</span>
        `;

        btn.onclick = () => {
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateDetail(i);
        };
        
        grid.appendChild(btn);
    }
});

function updateDetail(day) {
    const event = calendarData.events[day];
    const welcome = document.getElementById('welcome-msg');
    const card = document.getElementById('detail-card');

    if (event) {
        welcome.style.display = 'none';
        card.style.display = 'block';
        document.getElementById('detail-title').innerText = event.title;
        document.getElementById('detail-lunar').innerText = 'Âm lịch: ' + event.lunar;
        document.getElementById('detail-desc').innerText = event.desc;
        document.getElementById('detail-img').src = event.img;
        document.getElementById('detail-date-num').innerText = 'Ngày ' + day;
    } else {
        welcome.style.display = 'block';
        card.style.display = 'none';
    }
}
const container = document.querySelector('.cake-container');
const totalPieces = 7; // จำนวนชิ้นเค้กที่ตก

for(let i = 0; i < totalPieces; i++) {
  const piece = document.createElement('div');
  piece.classList.add('cake-piece');

  // ตั้งตำแหน่งซ้ายขวาสุ่ม
  const startX = Math.random() * 220; // เพราะ container กว้าง 300 ลบ width 80
  piece.style.left = `${startX}px`;

  // ตั้งเวลาหน่วงให้แต่ละชิ้นตกไม่พร้อมกัน
  const delay = i * 0.5;

  // กำหนด animation fall ความยาว 3 วินาที
  piece.style.animation = `fall 3s ease-in forwards`;
  piece.style.animationDelay = `${delay}s`;

  container.appendChild(piece);
}

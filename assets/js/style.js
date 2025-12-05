document.addEventListener('DOMContentLoaded', function () {
  // === Highlight menu aktif di navbar atas ===
  const navbarLinks = document.querySelectorAll('.navbar-nav a');
  const currentPath = window.location.pathname.split('/').pop();

  navbarLinks.forEach(item => {
    const hrefPath = item.getAttribute('href');
    if (hrefPath === currentPath && hrefPath !== '#') {
      item.classList.add('active');
      // Jika dalam dropdown, buka parent-nya juga
      const dropdownParent = item.closest('.dropdown');
      if (dropdownParent) {
        dropdownParent.querySelector('.nav-link.dropdown-toggle')?.classList.add('active');
      }
    }
  });

  // === Mobile bottom nav (jika ada) ===
  const mobileMenu = document.querySelectorAll('.mobile-bottom-nav a');
  mobileMenu.forEach(item => {
    const hrefPath = item.getAttribute('href');
    if (hrefPath === currentPath && hrefPath !== '#') {
      item.classList.add('active');
    }
  });

  // === Highlight menu aktif di sidebar mobile ===
  const sidebarLinks = document.querySelectorAll('.offcanvas .list-group-item');
  sidebarLinks.forEach(item => {
    const hrefPath = item.getAttribute('href');
    if (hrefPath === currentPath && hrefPath !== '#') {
      item.classList.add('active');
      // Jika dalam collapse, buka parent-nya juga
      const collapseParent = item.closest('.collapse');
      if (collapseParent) {
        const trigger = document.querySelector(`[data-bs-target="#${collapseParent.id}"]`);
        if (trigger) {
          trigger.classList.add('active');
        }
      }
    }
  });

  // === Profil (mobile view) ===
  const profileContent = document.querySelectorAll('#profileContent .content-section');
  const mobileContainer = document.getElementById('mobileProfile');
  if (mobileContainer && profileContent.length > 0) {
    mobileContainer.innerHTML = ''; // Clear existing content
    profileContent.forEach(section => {
      const card = document.createElement('div');
      card.className = 'card shadow-sm mb-3';
      const body = document.createElement('div');
      body.className = 'card-body';
      body.innerHTML = section.innerHTML;

      // Add data-label to table cells for mobile list display
      const table = body.querySelector('.list-table');
      if (table) {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
          const th = row.querySelector('th');
          const td = row.querySelector('td');
          if (th && td) {
            td.setAttribute('data-label', th.textContent.trim());
          }
        });
      }

      card.appendChild(body);
      mobileContainer.appendChild(card);
    });
  }

  // === Fungsi untuk populate mobile cards ===
  function populateMobileCards() {
    const tabContent = document.querySelectorAll('#tabContent .content-section');
    const listCardMobileContainer = document.getElementById('listCardMobile');
    if (listCardMobileContainer && tabContent.length > 0) {
      listCardMobileContainer.innerHTML = ''; // Clear existing content
      tabContent.forEach(section => {
        const card = document.createElement('div');
        card.className = 'card shadow-sm mb-3';
        const body = document.createElement('div');
        body.className = 'card-body';
        body.innerHTML = section.innerHTML;

        // Add data-label to table cells for mobile list display
        const table = body.querySelector('.list-table');
        if (table) {
          const rows = table.querySelectorAll('tbody tr');
          rows.forEach(row => {
            const th = row.querySelector('th');
            const td = row.querySelector('td');
            if (th && td) {
              td.setAttribute('data-label', th.textContent.trim());
            }
          });
        }

        card.appendChild(body);
        listCardMobileContainer.appendChild(card);
      });
    }
  }

  // === Profil (mobile view) for BPT Modal ===
  const profileContentBpt = document.querySelectorAll('#tabContent2 .content-section');
  const mobileContainerBpt = document.getElementById('listCardMobile2');
  if (mobileContainerBpt && profileContentBpt.length > 0) {
    mobileContainerBpt.innerHTML = ''; // Clear existing content
    profileContentBpt.forEach(section => {
      const card = document.createElement('div');
      card.className = 'card shadow-sm mb-3';
      const body = document.createElement('div');
      body.className = 'card-body';
      body.innerHTML = section.innerHTML;

      // Add data-label to table cells for mobile list display
      const table = body.querySelector('.list-table');
      if (table) {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
          const th = row.querySelector('th');
          const td = row.querySelector('td');
          if (th && td) {
            td.setAttribute('data-label', th.textContent.trim());
          }
        });
      }

      card.appendChild(body);
      mobileContainerBpt.appendChild(card);
    });
  }

  // === Profil (mobile view) for PJ Modal ===
  const profileContentPj = document.querySelectorAll('#tabContent3 .content-section');
  const mobileContainerPj = document.getElementById('listCardMobile3');
  if (mobileContainerPj && profileContentPj.length > 0) {
    mobileContainerPj.innerHTML = ''; // Clear existing content
    profileContentPj.forEach(section => {
      const card = document.createElement('div');
      card.className = 'card shadow-sm mb-3';
      const body = document.createElement('div');
      body.className = 'card-body';
      body.innerHTML = section.innerHTML;

      // Add data-label to table cells for mobile list display
      const table = body.querySelector('.list-table');
      if (table) {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
          const th = row.querySelector('th');
          const td = row.querySelector('td');
          if (th && td) {
            td.setAttribute('data-label', th.textContent.trim());
          }
        });
      }

      card.appendChild(body);
      mobileContainerPj.appendChild(card);
    });
  }

  // === Mobile List Card (mobile view) ===
  if (window.innerWidth <= 768) {
    populateMobileCards();
  }

  // === Event listener untuk resize window ===
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
      populateMobileCards();
    } else {
      // Jika kembali ke desktop, kosongkan mobile container
      const listCardMobileContainer = document.getElementById('listCardMobile');
      if (listCardMobileContainer) {
        listCardMobileContainer.innerHTML = '';
      }
    }
  });

  // === Load shortcut settings ===
  loadShortcutSettings();
});

document.addEventListener('DOMContentLoaded', function () {
  const accButtons = document.querySelectorAll('.accordion-btn');

  accButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      // hanya aktif di mobile
      if (window.innerWidth <= 768) {
        const row = btn.closest('tr').nextElementSibling;
        row.classList.toggle('show');
        btn.textContent = row.classList.contains('show') ? '−' : '+';
      }
    });
  });
});

// JavaScript for collapsible education table
document.addEventListener('DOMContentLoaded', function () {
  const schoolNames = document.querySelectorAll('.school-name');
  schoolNames.forEach(name => {
    name.addEventListener('click', function () {
      const nextRow = this.closest('tr').nextElementSibling;
      if (nextRow && nextRow.classList.contains('accordion-details')) {
        nextRow.classList.toggle('show');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const labelNames = document.querySelectorAll('.label-name');
  labelNames.forEach(name => {
    name.addEventListener('click', function () {
      const nextRow = this.closest('tr').nextElementSibling;
      if (nextRow && nextRow.classList.contains('accordion-details')) {
        nextRow.classList.toggle('show');
      }
    });
  });
});

const labelNames = document.querySelectorAll('.label-name');
labelNames.forEach(name => {
  name.addEventListener('click', function () {
    const nextRow = this.closest('tr').nextElementSibling;
    if (nextRow && nextRow.classList.contains('accordion-details')) {
      nextRow.classList.toggle('show');
      // Toggle icon
      const icon = this.querySelector('i');
      if (icon) {
        icon.classList.toggle('bi-chevron-down');
        icon.classList.toggle('bi-chevron-up');
      }
    }
  });
});

// Toggle icon pada mobileAccordion
document.addEventListener('DOMContentLoaded', function () {
  const accordion = document.getElementById('collapseAccordion');
  const headerBtn = document.querySelector('#headingAccordion .accordion-button i');

  if (accordion && headerBtn) {
    accordion.addEventListener('show.bs.collapse', function () {
      headerBtn.classList.remove('bi-chevron-right');
      headerBtn.classList.add('bi-chevron-down');
    });
  }
});

// Toggle icon untuk accordion di riwayat_donasi.html
document.addEventListener('DOMContentLoaded', function () {
  // Ambil semua ACCORDION COLLAPSE
  const allAccordions = document.querySelectorAll('.accordion-collapse');

  allAccordions.forEach(acc => {
    // Cari tombol yang mengarah ke collapse ini
    const button = document.querySelector(`[data-bs-target="#${acc.id}"] i`);

    if (!button) return;

    // Saat accordion dibuka
    acc.addEventListener('show.bs.collapse', function () {
      button.classList.remove('bi-chevron-right');
      button.classList.add('bi-chevron-down');
    });

    // Saat accordion ditutup
    acc.addEventListener('hide.bs.collapse', function () {
      button.classList.remove('bi-chevron-down');
      button.classList.add('bi-chevron-right');
    });
  });
});

// Set Date and Time
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long', // hari
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', // detik
  };
  document.getElementById('currentDateTime').textContent = now.toLocaleDateString('id-ID', options);
}

updateDateTime();
setInterval(updateDateTime, 1000);

const popup = document.getElementById('shortcutPopup');
const button = document.getElementById('btnShortcut');

// Tampilkan / sembunyikan popup
document.addEventListener('DOMContentLoaded', function () {
  // Cegah error jika elemen tidak ditemukan
  if (!button || !popup) {
    return;
  }

  button.addEventListener('click', () => {
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  });

  // Tutup jika klik di luar
  document.addEventListener('click', function (e) {
    if (!button.contains(e.target) && !popup.contains(e.target)) {
      popup.style.display = 'none';
    }
  });
});

// Fungsi untuk menyimpan pengaturan shortcut
function saveShortcutSettings() {
  const selectedShortcuts = [];
  for (let i = 1; i <= 12; i++) {
    const checkbox = document.getElementById(`shortcut${i}`);
    if (checkbox && checkbox.checked) {
      selectedShortcuts.push(i);
    }
  }
  localStorage.setItem('selectedShortcuts', JSON.stringify(selectedShortcuts));
  applyShortcutVisibility(selectedShortcuts);
  alert('Pengaturan shortcut berhasil disimpan!');
  $('#settingShortcutModal').modal('hide');
}

// Fungsi untuk menerapkan visibilitas shortcut berdasarkan array
function applyShortcutVisibility(selected) {
  const cards = document.querySelectorAll('.card-menu');
  cards.forEach((card, index) => {
    const cardIndex = index + 1; // 1-based
    if (selected.includes(cardIndex)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Fungsi untuk memuat pengaturan shortcut saat halaman dimuat
function loadShortcutSettings() {
  const saved = localStorage.getItem('selectedShortcuts');
  if (saved) {
    const selectedShortcuts = JSON.parse(saved);
    applyShortcutVisibility(selectedShortcuts);
    // Set checkbox sesuai saved
    for (let i = 1; i <= 12; i++) {
      const checkbox = document.getElementById(`shortcut${i}`);
      if (checkbox) {
        checkbox.checked = selectedShortcuts.includes(i);
      }
    }
  } else {
    // Default: semua aktif
    const all = Array.from({ length: 12 }, (_, i) => i + 1);
    applyShortcutVisibility(all);
    // Set semua checkbox checked
    for (let i = 1; i <= 12; i++) {
      const checkbox = document.getElementById(`shortcut${i}`);
      if (checkbox) {
        checkbox.checked = true;
      }
    }
  }
}

// Tombol APPLY (untuk popup lama jika ada)
function applyShortcut() {
  let selected = [];
  document.querySelectorAll('.shortcut-popup input:checked').forEach(c => {
    selected.push(c.value);
  });

  console.log('Shortcut dipilih:', selected);

  alert('Shortcut berhasil disimpan!');
  popup.style.display = 'none';
}

// Tombol BATALKAN
function closeShortcut() {
  popup.style.display = 'none';
}

// ==================== CONTEXT MENU ===================
document.addEventListener('DOMContentLoaded', () => {
  const contextMenu = document.getElementById('contextMenu');
  const cardList = document.getElementById('cardList');
  let longPressTimer;
  let isMobile = window.innerWidth <= 768;

  // ================================
  // Fungsi: Menu dari ikon titik tiga
  // ================================
  function showMenuAtCard(icon, data) {
    contextMenu.style.display = 'block';

    const rect = icon.getBoundingClientRect();
    const menuWidth = contextMenu.offsetWidth;

    contextMenu.style.left = rect.left - menuWidth - 8 + window.scrollX + 'px';
    contextMenu.style.top = rect.top + window.scrollY + 'px';

    contextMenu.dataset.rowId = data.id ?? '';
    contextMenu.dataset.rowNama = data.nama ?? '';
  }

  // ================================
  // Fungsi: Menu dari event mouse / touch
  // ================================
  function showMenuAtEventPos(x, y, row) {
    contextMenu.style.display = 'block';
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';

    contextMenu.dataset.rowId = row.dataset.id ?? '';
    contextMenu.dataset.rowNama = row.dataset.nama ?? '';
  }

  // ================================
  // EVENT: Klik titik tiga kartu
  // ================================
  if (cardList) {
    cardList.addEventListener('click', e => {
      const icon = e.target.closest('.card-menu');
      if (!icon) return;

      e.preventDefault();
      e.stopPropagation();

      const card = icon.closest('.card');
      const data = {
        id: card.dataset.id,
        nama: card.dataset.nama,
      };

      showMenuAtCard(icon, data);
    });
  }

  // ================================
  // DESKTOP: Right-click <tr>
  // ================================
  document.addEventListener('contextmenu', e => {
    if (isMobile) return e.preventDefault();

    const row = e.target.closest('tr');
    if (!row || !row.closest('.dataTable')) return;

    e.preventDefault();
    showMenuAtEventPos(e.pageX, e.pageY, row);
  });

  // ================================
  // MOBILE: Long press <tr>
  // ================================
  document.addEventListener('touchstart', e => {
    if (!isMobile) return;

    const row = e.target.closest('tr');
    if (!row || !row.closest('.dataTable')) return;

    const t = e.touches[0];
    row.dataset.startX = t.clientX;
    row.dataset.startY = t.clientY;

    longPressTimer = setTimeout(() => {
      showMenuAtEventPos(t.pageX, t.pageY, row);
    }, 550); // long press 0.55s
  });

  document.addEventListener('touchmove', e => {
    if (!isMobile) return;
    clearTimeout(longPressTimer);
  });

  document.addEventListener('touchend', () => {
    if (!isMobile) return;
    clearTimeout(longPressTimer);
  });

  // ================================
  // Klik luar menutup menu
  // ================================
  document.addEventListener('click', e => {
    if (!contextMenu.contains(e.target) && !e.target.closest('.card-menu')) {
      contextMenu.style.display = 'none';
    }
  });

  // ================================
  // Prevent browser context menu on mobile cards
  // ================================
  document.addEventListener('contextmenu', e => {
    if (isMobile && e.target.closest('.card')) {
      e.preventDefault();
    }
  });

  contextMenu.addEventListener('click', e => e.stopPropagation());

  // ================================
  // Scroll / Resize tutup menu
  // ================================
  window.addEventListener('scroll', () => (contextMenu.style.display = 'none'));
  window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    contextMenu.style.display = 'none';
  });

  document.addEventListener('show.bs.modal', () => {
    contextMenu.style.display = 'none';
  });
});

// ==================== CONTEXT MENU ===================
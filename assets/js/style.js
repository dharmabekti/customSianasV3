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

document.addEventListener('DOMContentLoaded', function () {
  // Tutup contextmenu saat resize
  window.addEventListener('resize', function () {
    const cm = document.getElementById('contextMenu');
    if (cm) cm.style.display = 'none';
  });

  // toggle context menu
  document.addEventListener('click', function (e) {
    // ======== Hanya ikon card-menu yg boleh buka contextMenu ========
    if (e.target.classList.contains('card-menu')) {
      e.preventDefault();
      e.stopPropagation();

      const icon = e.target;
      const cm = document.getElementById('contextMenu');
      if (!cm) return;

      cm.style.opacity = '0';
      cm.style.display = 'block';

      requestAnimationFrame(() => {
        const rect = icon.getBoundingClientRect();
        const w = cm.offsetWidth;

        cm.style.left = rect.left - w - 10 + 'px';
        cm.style.top = rect.top + window.scrollY + 'px';
        cm.style.opacity = '1';
      });

      return;
    }
    // ===============================================================

    // =================

    // Klik luar → tutup
    const cm = document.getElementById('contextMenu');
    if (cm && !cm.contains(e.target)) {
      cm.style.display = 'none';
    }
  });

  // Klik pada contextMenu tidak menutup
  const cm = document.getElementById('contextMenu');
  if (cm) {
    cm.addEventListener('click', e => e.stopPropagation());
  }

  // modal dibuka → tutup contextMenu
  document.addEventListener('show.bs.modal', function () {
    const cm = document.getElementById('contextMenu');
    if (cm) cm.style.display = 'none';
  });

  window.addEventListener('scroll', () => {
    const cm = document.getElementById('contextMenu');
    if (cm) cm.style.display = 'none';
  });
});

// Jalankan saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  const contextMenu = document.getElementById('contextMenu');
  const cardList = document.getElementById('cardList');

  if (!contextMenu) return;

  let longPressTimer;
  let isMobile = window.innerWidth <= 768;

  // ===============================
  // Fungsi Show ContextMenu (Card)
  // ===============================
  function showMenuAtCard(icon, rowData) {
    contextMenu.style.display = 'block';

    const rect = icon.getBoundingClientRect();
    const menuWidth = contextMenu.offsetWidth;

    const leftPos = rect.left - menuWidth - 5 + window.scrollX;
    const topPos = rect.top + rect.height + window.scrollY;

    contextMenu.style.left = `${leftPos}px`;
    contextMenu.style.top = `${topPos}px`;

    contextMenu.dataset.rowId = rowData.id || '';
    contextMenu.dataset.rowNama = rowData.nama || '';
  }

  // Event: Klik ikon titik 3 pada card
  if (cardList) {
    cardList.addEventListener('click', function (e) {
      if (!e.target.classList.contains('card-menu')) return;

      e.preventDefault();
      e.stopPropagation();

      const icon = e.target;
      const card = icon.closest('.card');
      if (!card) return;

      const rowData = {
        id: card.dataset.id,
        nama: card.dataset.nama,
      };

      showMenuAtCard(icon, rowData);
    });
  }

  // ==========================================
  // Fungsi Show ContextMenu (Table Events)
  // ==========================================
  function showContextMenu(e, row) {
    contextMenu.style.display = 'block';
    contextMenu.style.left = e.pageX + 'px';
    contextMenu.style.top = e.pageY + 'px';

    contextMenu.dataset.rowId = row.dataset.id || '';
    contextMenu.dataset.rowNama = row.dataset.nama || '';
  }

  // ============================
  // 1. Desktop (Right Click)
  // ============================
  document.addEventListener('contextmenu', function (e) {
    if (isMobile) {
      e.preventDefault();
      return;
    }

    const row = e.target.closest('tr');
    if (!row || !row.closest('.dataTable')) return;

    e.preventDefault();
    showContextMenu(e, row);
  });

  // ============================
  // 2. Mobile (Long Press)
  // ============================
  document.addEventListener('touchstart', function (e) {
    if (!isMobile) return;

    const row = e.target.closest('tr');
    if (!row || !row.closest('.dataTable')) return;

    longPressTimer = setTimeout(() => {
      showContextMenu(e.touches[0], row);
    }, 500);
  });

  document.addEventListener('touchend', function () {
    if (isMobile) clearTimeout(longPressTimer);
  });

  document.addEventListener('touchmove', function () {
    if (isMobile) clearTimeout(longPressTimer);
  });

  // ============================
  // 3. Hide context menu
  // ============================
  document.addEventListener('click', function (e) {
    if (!contextMenu.contains(e.target)) {
      contextMenu.style.display = 'none';
    }
  });

  // ============================
  // 4. Handle resize
  // ============================
  window.addEventListener('resize', function () {
    isMobile = window.innerWidth <= 768;
  });
});

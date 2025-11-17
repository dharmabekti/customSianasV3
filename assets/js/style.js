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

  // === Fungsi untuk populate mobile cards ===
  function populateMobileCards() {
    const komunitasContent = document.querySelectorAll('#tabContent .content-section');
    const listCardMobileContainer = document.getElementById('listCardMobile');
    if (listCardMobileContainer && komunitasContent.length > 0) {
      listCardMobileContainer.innerHTML = ''; // Clear existing content
      komunitasContent.forEach(section => {
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

  // === Profil (mobile view) for PJ Modal ===
  const profileContentPj = document.querySelectorAll('#tabContent2 .content-section');
  const mobileContainerPj = document.getElementById('listCardMobile2');
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

  // === Profil (mobile view) for BPT Modal ===
  const profileContentBpt = document.querySelectorAll('#tabContent3 .content-section');
  const mobileContainerBpt = document.getElementById('listCardMobile3');
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

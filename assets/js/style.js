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

  // === Mobile List Card (mobile view) ===
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

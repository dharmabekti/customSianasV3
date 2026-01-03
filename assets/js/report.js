const ReportUI = {
  breakpoint: 992,

  hide(el) {
    el.classList.add('d-none');
  },

  show(el) {
    el.classList.remove('d-none');
  },

  isMobile() {
    return window.innerWidth < this.breakpoint;
  },

  highlightNegativeValues(tableSelector) {
    document.querySelectorAll(`${tableSelector} tbody td`).forEach(td => {
      const val = td.textContent.trim().replace(/\./g, '');
      if (!isNaN(val) && Number(val) < 0) {
        td.classList.add('text-danger', 'fw-semibold');
      }
    });
  },

  initDataTable(wrapperSelector) {
    const table = document.querySelector(`${wrapperSelector} table`);
    if (!$.fn.DataTable.isDataTable(table)) {
      $(table).DataTable({
        responsive: true,
        paging: false,
        searching: false,
        info: false,
        ordering: false,
      });
    }
  },

  populateMobileList({ tableSelector, listSelector, headers, cardHeaderClass = 'bg-aat text-white' }) {
    const listGroup = document.querySelector(`${listSelector} .list-group`);
    listGroup.innerHTML = '';

    const rows = document.querySelectorAll(`${tableSelector} table tbody tr`);

    headers.slice(1).forEach((year, yearIndex) => {
      const card = document.createElement('div');
      card.className = 'card mb-3';

      let html = `
        <div class="card-header ${cardHeaderClass}">
          <h6 class="mb-0">${year}</h6>
        </div>
        <div class="card-body">
      `;

      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const label = cells[0].textContent.trim();
        const value = cells[yearIndex + 1].textContent.trim();
        const raw = value.replace(/\./g, '');
        const isNegative = !isNaN(raw) && Number(raw) < 0;

        html += `
          <div class="d-flex justify-content-between text-start mb-2">
            <span>${label}</span>
            <span class="${isNegative ? 'text-danger fw-semibold' : ''}">
              ${value}
            </span>
          </div>
        `;
      });

      html += `</div>`;
      card.innerHTML = html;
      listGroup.appendChild(card);
    });
  },
};

function updateDisplay() {
  // hanya jalan jika data sudah dicari
  if (!placeholder.classList.contains('d-none')) return;

  if (ReportUI.isMobile()) {
    ReportUI.show(tableWrapper);
    ReportUI.hide(document.getElementById('tableContainer'));
    ReportUI.show(listWrapper);
    ReportUI.populateMobileList({
      tableSelector: '#resultTable',
      listSelector: '#resultList',
      headers,
    });
  } else {
    ReportUI.show(tableWrapper);
    ReportUI.show(document.getElementById('tableContainer'));
    ReportUI.hide(listWrapper);
    ReportUI.initDataTable('#tableContainer');
    ReportUI.highlightNegativeValues('#tableContainer');
  }
}

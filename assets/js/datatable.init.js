// ===============================
$(document).ready(function () {
  const dataTableOptions = {
    destroy: true,
    responsive: true,
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/id.json',
      paginate: {
        previous: '<<',
        next: '>>',
      },
      zeroRecords: 'Tidak ada data yang ditemukan',
      info: 'Menampilkan _START_ sampai _END_ dari _TOTAL_ data',
    },
    autowidth: true,
    pageLength: 10,
    lengthMenu: [
      [10, 20, 25, 50, 100, -1],
      [10, 20, 25, 50, 100, 'Semua'],
    ],

    ordering: true,
    order: [], // ⬅️ urutan awal mengikuti urutan asli (query)
  };

  // Daftar ID datatable yang ingin diinit
  const tableIDs = ['#datatable', '#datatable2', '#datatable3'];

  // Simpan instance masing-masing tabel
  const tableInstances = {};

  function initAllDataTables() {
    tableIDs.forEach(id => {
      if ($.fn.DataTable.isDataTable(id)) {
        $(id).DataTable().destroy();
      }

      const dt = $(id).DataTable(dataTableOptions);

      // Full width fix
      $(id).css('width', '100%');
      $(id).parent().css('width', '100%');

      tableInstances[id] = dt;
    });
  }

  // Init saat halaman siap
  initAllDataTables();

  // Update responsif jika layar berubah
  $(window).on('resize orientationchange', function () {
    Object.values(tableInstances).forEach(dt => {
      dt.responsive.recalc();
      dt.columns.adjust().draw(false);
    });
  });
});

$(document).ready(function () {
  $('#laporanTable').DataTable({
    pageLength: 20,
    paging: true,
    ordering: false,
    rowGroup: {
      dataSrc: 0,
      startRender: function (rows, groupDate) {
        // Format tanggal: "13 Okt 2025"
        const d = new Date(groupDate);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formatted = d.toLocaleDateString('id-ID', options);

        return $('<div/>').addClass('dt-group-header').text(formatted);
      },
    },
    // columnDefs: [
    //   { targets: 0, visible: false }, // sembunyikan kolom tanggal
    // ],
  });
});

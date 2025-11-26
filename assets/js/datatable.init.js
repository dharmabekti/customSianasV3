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
        info: 'Menampilkan _START_ sampai _END_ dari _TOTAL_ data',
      },
      pageLength: 10,
      lengthMenu: [
        [10, 20, 25, 50, 100, -1],
        [10, 20, 25, 50, 100, 'Semua'],
      ],
      ordering: true,
      initComplete: function () {
        // $('.dataTables_length, .dataTables_filter').wrapAll('<div class="dt-top"></div>');
      },
    };

    let dataTableInstance;

    function initDataTable() {
      if (dataTableInstance) {
        dataTableInstance.destroy();
      }
      dataTableInstance = $('#datatable').DataTable(dataTableOptions);
      // Fix column widths for full width
      dataTableInstance.columns.adjust().draw();
      // Force full-width after responsive mode
      $('#datatable').css('width', '100%');
      $('#datatable').parent().css('width', '100%');
      $('.dataTables_wrapper').css('width', '100%');
    }

    // Initialize on document ready
    initDataTable();

    // Listen to window resize and orientation change and redraw the datatable to ensure responsiveness.
    $(window).on('resize orientationchange', function () {
      if (dataTableInstance) {
        dataTableInstance.responsive.recalc();
        dataTableInstance.columns.adjust().draw(false);
      }
    });
  });

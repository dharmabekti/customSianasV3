/**
 * Initialize Date Range Picker (Reusable)
 * @param {string} selector - input selector (ex: '#datepicker')
 * @param {function} onApply - callback saat apply
 * @param {function} onCancel - callback saat cancel
 * @param {object} customOptions - optional override config
 */
function initDateRangePicker(selector, onApply = null, onCancel = null, customOptions = {}) {
  if (!$(selector).length) return;

  const defaultOptions = {
    locale: {
      format: 'DD/MM/YYYY',
      separator: ' - ',
      applyLabel: 'Terapkan',
      cancelLabel: 'Batal',
      fromLabel: 'Dari',
      toLabel: 'Ke',
      customRangeLabel: 'Custom',
      weekLabel: 'W',
      daysOfWeek: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
      monthNames: [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
      ],
      firstDay: 1,
    },
    opens: 'left',
    autoUpdateInput: false,
    showDropdowns: true,
    ranges: {
      'Hari Ini': [moment(), moment()],
      Kemarin: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      '7 Hari Terakhir': [moment().subtract(6, 'days'), moment()],
      '30 Hari Terakhir': [moment().subtract(29, 'days'), moment()],
      'Bulan Ini': [moment().startOf('month'), moment().endOf('month')],
      'Bulan Lalu': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    },
  };

  const options = $.extend(true, {}, defaultOptions, customOptions);

  $(selector).daterangepicker(options);

  $(selector).on('apply.daterangepicker', function (ev, picker) {
    $(this).val(
      picker.startDate.format(options.locale.format) +
        options.locale.separator +
        picker.endDate.format(options.locale.format)
    );

    if (typeof onApply === 'function') {
      onApply(picker);
    }
  });

  $(selector).on('cancel.daterangepicker', function () {
    $(this).val('');

    if (typeof onCancel === 'function') {
      onCancel();
    }
  });
}

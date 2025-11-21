const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

function swal_confirm(title, msg, icon) {
  swal({
    title: title,
    text: msg,
    button: "OK",
    dangerMode: false,
    icon: icon,
  });
}

function swal_alert(title, msg, icon) {
  Toast.fire({
    icon: icon,
    title: msg,
  });
}

function swal_modal(msg, icon) {
  return Swal.fire({
    icon: icon,
    title: msg,
    showConfirmButton: false,
    timer: 1500,
  });
}

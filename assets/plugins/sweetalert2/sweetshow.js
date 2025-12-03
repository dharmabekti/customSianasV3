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
  return Swal.fire({
    title: title,
    text: msg,
    icon: icon,
    allowOutsideClick: false, // Prevents closing on outside click
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Batal',
  });
}


function swal_alert(title, msg, icon) {
  return Swal.fire({
    title: title,
    text: msg,
    icon: icon,
    allowOutsideClick: false, // Prevents closing on outside click
    showCancelButton: false,
    showConfirmButton: false,
    timer: 2000, // Alert hilang dalam 2 detik
    timerProgressBar: true, // Menampilkan progress bar
  });
}

function toast_alert(msg, icon) {
  Toast.fire({
    icon: icon,
    title: msg,
  });
}
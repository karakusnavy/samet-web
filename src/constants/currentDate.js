var today = new Date();
var dd = today.getDate() + 1;
var mm = today.getMonth() + 1;
var hh = today.getHours();
var ss = today.getSeconds();
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
export default dd + "-" + mm + "-" + yyyy;

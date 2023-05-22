function StartTime() {
  setTimeout(StartTime, 500);
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let period = "";
  if (h > 12) {
    h = h - 12;
    period = "PM";
  } else {
    period = "AM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("time").innerHTML =
    h + " : " + m + " : " + s + "  " + period;

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = weekday[d.getDay()];
  document.getElementById("demo").innerHTML = day;
}

const convert12hrTo24hr = (time: string) => {
  let separator = time.split(":");
  let hour = Number(separator[0]);
  let rest = separator[1];
  let minute = rest.split(" ")[0];
  let period = rest.split(" ")[1];
  if (period === "PM") {
    hour = hour + 12;
  } else if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  }
  return `${hour}:${minute}`;
};


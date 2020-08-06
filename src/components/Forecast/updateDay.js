function updateDay(dayIndex) {
  const dayName = {
    1: "MON", 
    2: "TUE", 
    3: "WED", 
    4: "THU", 
    5: "FRI", 
    6: "SAT", 
    7: "SUN"
  };
  const days = [];
  for (let i = 0; i < 5; i++) {
    let addon = dayIndex + i;
    if (addon > 7) addon -=7;
    days.push(dayName[addon]);
  }
  return days;
}


module.exports = { updateDay };
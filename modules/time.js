import { DateTime } from 'luxon/src/luxon.js';

const time = document.getElementById('date');
setInterval(() => {
  time.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );
}, 1000);

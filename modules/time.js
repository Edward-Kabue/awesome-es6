import { DateTime } from '../node_modules/luxon/src/luxon';

const time = document.getElementById('date');
setInterval(() => {
  time.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
}, 1000);

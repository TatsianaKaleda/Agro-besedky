import LightCountdown from "../libs/lightcountdown_v1_3/LightCountdown"

export default () =>
     document.addEventListener('DOMContentLoaded', () => {
          let dateEnd = new Date();
          dateEnd.setDate(
               dateEnd.getDay()
                    ? dateEnd.getDate() - dateEnd.getDay() + 8
                    : dateEnd.getDate() + 1
          );
          dateEnd.setHours(0, 0, 0);

          new LightCountdown(dateEnd, '.countdown-week').start()
     })
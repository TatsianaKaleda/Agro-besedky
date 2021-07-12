
export default class Core {
     constructor(dateEnd, options = {}, events) {
          if (dateEnd instanceof Date) {
               this.dateEnd = dateEnd
          } else if (Date.parse(dateEnd)) {
               this.dateEnd = new Date(dateEnd)
          } else {
               throw new Error("LightCountdown: Invalid Date in first argument!")
          }

          this.events = events
          this.options = {
               finish: null,
               interval: 1000,
          }

          Object.keys(options).forEach(key => this.options[key] = options[key]);

          this.timer = 0

          this.init()
     }

     init() {
          document.dispatchEvent(new CustomEvent(this.events.init, { detail: this.getRange() }))
     }

     start() {
          this.timer = setInterval(() => this.tick(), this.options.interval)
          document.dispatchEvent(new Event(this.events.start))
     }

     stop() {
          clearInterval(this.timer)
          document.dispatchEvent(new Event(this.events.stop))
     }

     tick() {
          let range = this.getRange();
          if (range.v < 0) {
               range = {
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                    v: 0
               };
               return this.stop()
          }

          document.dispatchEvent(new CustomEvent(this.events.tick, { detail: range }))
     }

     getRange() {
          let now = new Date();
          let value = this.dateEnd - now;
          let s = Math.floor(value / 1000 % 60);
          let m = Math.floor(value / 1000 / 60 % 60);
          let h = Math.floor(value / 1000 / 60 / 60 % 24);
          let d = Math.floor(value / 1000 / 60 / 60 / 24 % 365);

          if (s < 10) {
               s = "0".concat(s)
          }
          if (m < 10) {
               m = "0".concat(m)
          }
          if (h < 10) {
               h = "0".concat(h)
          }
          if (d < 10) {
               d = "0".concat(d)
          }

          return {
               days: d,
               hours: h,
               minutes: m,
               seconds: s,
               value: value
          }
     }
}

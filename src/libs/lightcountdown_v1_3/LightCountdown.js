import Core from './Core/Core'
import Presentation from './Presentation/Presentation';
import Events from './Events'

/**
 * LightCountdown javascript plugin
 * @version 1.3
 * @author oskarvitko16@gmail.com
 */

export default class LightCountdown {
     constructor(dateEnd, selector, options = {}) {
          this.events = Events(selector)
          this.presentation = new Presentation(selector, options, this.events)
          this.core = new Core(dateEnd, options, this.events)
     }

     start() { this.core.start() }
     stop() { this.core.stop() }
}
import { templates } from './templates/templates'
import blockTypes from './templates/blockTypes'
import { languages } from './languages/languages'

export default class Presentation {
     constructor(selector, options = {}, events) {
          if (selector instanceof Node) {
               this.place = [selector]
          } else if (selector instanceof NodeList) {
               this.place = selector
          } else if (typeof selector === "string") {
               this.place = document.querySelector(selector)
               if (!this.place) {
                    throw new Error("LightCountdown: Invalid Selector!")
               }
          } else {
               throw new Error("LightCountdown: Invalid Selector!")
          }

          this.events = events
          this.template = getTemplate(options.template)
          this.language = getLanguage(options.language)
          this.options = {
               seconds: true,
               minutes: true,
               hours: true,
               days: true,
               delimiter: ':',
               animation: false,
               animationDuration: '600ms'
          }
          this.maxValues = {
               days: 7,
               hours: 24,
               minutes: 60,
               seconds: 60
          }
          this.refs = {
               days: null,
               hours: null,
               minutes: null,
               seconds: null
          }

          Object.keys(options).forEach(key => this.options[key] = options[key]);

          this.initEvents()
     }

     initEvents() {
          document.addEventListener(this.events.init, event =>
               this.createContainer(event.detail))

          document.addEventListener(this.events.start, event => {

          })
          document.addEventListener(this.events.stop, event => {

          })
          document.addEventListener(this.events.tick, event =>
               this.updateData(event.detail))
     }

     createContainer(data) {
          const template = []

          const container = this.template.getBlock(blockTypes.CONTAINER)
          const delimiter = this.template.getBlock(blockTypes.DELIMITER, {
               [blockTypes.DELIMITER]: this.options.delimiter
          })

          for (let key in this.refs) {
               const item = this.getItem(key, data)
               if (item) {
                    template.push(item)
                    this.refs[key] = item.firstChild

                    if (this.options.animation) {
                         this.refs[key].style.animationDuration = this.options.animationDuration
                         this.refs[key].addEventListener('animationend', () => {
                              this.refs[key].classList.remove(...this.options.animation.split(' '))
                         })
                    }
               }
          }

          template.map((item, index) => {
               container.appendChild(item)
               if (index < template.length - 1) {
                    container.appendChild(delimiter.cloneNode(true))
               }
          })

          this.place.appendChild(container)
     }

     getItem(type, data) {
          if (!this.options[type]) {
               return null
          }

          return this.template.getBlock(blockTypes.ITEM, {
               [blockTypes.DIGITS]: data[type],
               [blockTypes.TEXT]: this.language[type],
               maxValue: this.maxValues[type]
          })
     }

     updateData(data) {
          for (let key in this.refs) {
               if (this.refs[key]) {
                    if (this.refs[key].textContent != data[key]) {
                         this.refs[key].textContent = data[key]
                         if (this.options.animation) {
                              this.refs[key].classList.add(...this.options.animation.split(' '))
                         }
                    }
               }
          }
     }
}

const getTemplate = template => {
     if (template) {
          if (templates[template]) {
               return templates[template]
          } else {
               throw new Error("LightCountdown: Invalid Template")
          }
     } else {
          return templates["default"]
     }
}

const getLanguage = language => {
     if (language) {
          if (languages[language]) {
               return languages[language]
          } else {
               throw new Error("LightCountdown: Invalid Language")
          }
     } else {
          return languages["ru"]
     }
}
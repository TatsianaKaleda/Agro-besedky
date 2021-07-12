import blockTypes from "../blockTypes"
import BaseTemplate from "../BaseTemplate"
import './LightCircleTemplate.scss'

export default class LightCircleTemplate extends BaseTemplate {
     constructor() {
          super()

          this.styles = {
               [blockTypes.CONTAINER]: 'lightcountdown__light-circle-container',
               [blockTypes.DIGITS]: 'lightcountdown__light-circle-digits',
               [blockTypes.TEXT]: 'lightcountdown__light-circle-text',
               [blockTypes.DELIMITER]: 'lightcountdown__light-circle-delimiter',
               [blockTypes.ITEM]: 'lightcountdown__light-circle-item',
          }
     }

     getBlock(type, values = {}) {
          if (type === blockTypes.ITEM) {
               const block = super.getBlock(type, values)

               const progress = document.createElement('div')
               progress.classList.add('lightcountdown__light-circle-progress')
               const svgHTML = `
               <svg class="lightcountdown__light-circle-progress-circle" xmlns="http://www.w3.org/2000/svg">        
                    <circle class="lightcountdown__light-circle-progress-circle-prog"></circle>
               </svg>
               `

               progress.innerHTML = svgHTML

               block.appendChild(progress)
               this.progressInit(block, values.maxValue)

               return block
          }

          return super.getBlock(type, values)
     }

     progressInit(block, maxValue) {
          const progressProg = block.querySelector('.lightcountdown__light-circle-progress-circle-prog')

          block.firstChild.addEventListener('DOMSubtreeModified', event => {
               handler(event.target)
          })
          block.firstChild.addEventListener('DOMNodeInsertedIntoDocument', event => {
               setTimeout(() => handler(event.target), 200)
          })

          const handler = target => {
               const FULL_CIRCLE_RATIO = 6.25
               const radius = getComputedStyle(progressProg).r.split('p')[0]
               const fullCircle = radius * FULL_CIRCLE_RATIO;
               const value = fullCircle - (target.textContent * fullCircle / maxValue)

               if (target.textContent == 0) {
                    progressProg.style.opacity = 0
                    progressProg.style.strokeDasharray = '1, 999'
               } else {
                    progressProg.style.opacity = 1
                    progressProg.style.strokeDasharray = `${value}, 999`
               }
          }
     }
}

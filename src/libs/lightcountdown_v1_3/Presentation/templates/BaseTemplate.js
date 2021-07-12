import blockTypes from "./blockTypes"

/**
 * Abstract Class BaseTemplate.
 *
 * @class BaseTemplate
 */

export default class BaseTemplate {
     constructor() {
          if (this.constructor === BaseTemplate) {
               throw new Error("Abstract classes can't be instantiated.");
          }
     }

     getBlock(type, values = {}) {
          const block = document.createElement('div')

          switch (type) {
               case blockTypes.CONTAINER:
                    if (this.styles[blockTypes.CONTAINER]) {
                         block.classList.add(this.styles[blockTypes.CONTAINER])
                    }

                    return block

               case blockTypes.ITEM:
                    if (this.styles[blockTypes.ITEM]) {
                         block.classList.add(this.styles[blockTypes.ITEM])
                    }

                    const digits = this.getBlock(blockTypes.DIGITS, {
                         [blockTypes.DIGITS]: values[blockTypes.DIGITS]
                    })

                    const text = this.getBlock(blockTypes.TEXT, {
                         [blockTypes.TEXT]: values[blockTypes.TEXT]
                    })

                    block.appendChild(digits)
                    block.appendChild(text)

                    return block

               case blockTypes.DIGITS:
                    if (this.styles[blockTypes.DIGITS]) {
                         block.classList.add(this.styles[blockTypes.DIGITS])
                    }

                    block.textContent = values[blockTypes.DIGITS]

                    return block

               case blockTypes.TEXT:
                    if (this.styles[blockTypes.TEXT]) {
                         block.classList.add(this.styles[blockTypes.TEXT])
                    }

                    block.textContent = values[blockTypes.TEXT]

                    return block

               case blockTypes.DELIMITER:
                    if (this.styles[blockTypes.DELIMITER]) {
                         block.classList.add(this.styles[blockTypes.DELIMITER])
                    }

                    block.textContent = values[blockTypes.DELIMITER]

                    return block

               default:
                    throw new Error('LightCountdown: Invalid BlockType')
          }
     }
}
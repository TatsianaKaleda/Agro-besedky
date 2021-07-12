import blockTypes from "../blockTypes"
import BaseTemplate from "../BaseTemplate"
import './DefaultTemplate.css'

export default class DefaultTemplate extends BaseTemplate {
     constructor() {
          super()

          this.styles = {
               [blockTypes.CONTAINER]: 'lightcountdown__default-container',
               [blockTypes.DIGITS]: 'lightcountdown__default-digits',
               [blockTypes.TEXT]: 'lightcountdown__default-text',
               [blockTypes.DELIMITER]: 'lightcountdown__default-delimiter',
          }
     }
}

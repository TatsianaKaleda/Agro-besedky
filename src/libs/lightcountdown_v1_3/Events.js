const Events = (selector) => {
     const id = selector.split('.').join('')

     return {
          start: `${id}:countdownStart`,
          stop: `${id}:countdownStop`,
          tick: `${id}:countdownTick`,
          init: `${id}:countdownInit`
     }
}

export default Events
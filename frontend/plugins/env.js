'use strict'
export default (context, inject) => {

  function _get() {
    const api = context.env.API
    return api
  }

  const Env = {
    get() {
      const url = _get()
      return url
    }
  }
  inject('env', Env)
}

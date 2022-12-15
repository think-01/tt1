export const noop = () => {}

export const delay = t => new Promise(r => setTimeout(r, t))

export const isEmail = str => delay(1500).then( () => /^\S+@[^\s@]+\.\S{2,3}$/.test(str))

export const minLength = str => delay(2500).then( () => str.length >= 5)
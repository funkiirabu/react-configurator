import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
  decals: ['television', 'hannya', 'kitsune', 'retro', 'writing'],
  selectedColor: '#EFBD4E',
  selectedDecal: 'kitsune'
})

export { state }

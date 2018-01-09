import Vue from 'vue'
import HelloPlayer from '@/components/HelloPlayer'

describe('HelloPlayer.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloPlayer)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.shogi_player').textContent).toEqual('Welcome to Your Vue.js App')
  })
})

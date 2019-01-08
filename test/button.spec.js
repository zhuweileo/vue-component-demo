import MButton from '../src/MButton'
import {mount} from "@vue/test-utils";

describe('MButton.vue',function () {

  it('can set type prop',function () {
    const wrapper = mount(MButton);
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains('warn')).to.be.true
  })

});

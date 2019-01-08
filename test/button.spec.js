import MButton from '../src/MButton'
import {mount} from "@vue/test-utils";
import Syn from 'syn'

describe('MButton.vue',function () {

  it('can set type prop',function () {
    const wrapper = mount(MButton,{
      propsData:{
        type: 'warn',
      }
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains('warn')).to.be.true
  })

  it('can click',function (done) {
    const click = sinon.spy();
    const haha = sinon.spy();
    const wrapper = mount(MButton,{
      propsData:{
        type: 'warn',
      },
      listeners:{
        click,
      }
    });

    Syn.click(wrapper.vm.$el,function () {
      sinon.assert.calledWith(click);
      done();
    });
  })

});

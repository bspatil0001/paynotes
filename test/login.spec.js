import Vue from 'vue'
import {
    shallowMount,
    mount,
    createLocalVue
} from '@vue/test-utils'
import login from '../src/components/login'
import VueRouter from 'vue-router'
const router = new VueRouter()
const localVue = createLocalVue()

let storage = Object.create(null);

function store() {
    let set = jest.fn((key) => {
        storage[key] = value;
    })

    let get = jest.fn((key) => {
        if (storage[key] != null) {
            return storage[key];
        }
    })
    return {
        set,
        get
    }
}

describe('PayNotes test', () => {
    it('login component', () => {
        const wrapper = mount(login, {
            localVue,
            router
        });

        wrapper.setData({
            loginInfo: {
                username: "user",
                password: "user"
            }
        })
        wrapper.find("[data-username]").setValue("user");
        wrapper.find("[data-password]").setValue("user");
        console.log(wrapper.loginInfo)
        expect(wrapper.text()).to.equal('hi')
    })
})
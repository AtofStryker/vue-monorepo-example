import {mount} from '@vue/test-utils';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify'
import ComponentExamplePlain from '@/component-example-plain.vue'
import Vue from 'vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(Vuetify)
const router = new VueRouter()
const i18n = new VueI18n({})

describe('Test Suite', () => {
    const contructor = (options = {}) => {
        return mount(ComponentExamplePlain, {
            propsData: {
                navItems: mockNavItems
            },
            router,
            i18n,
            stubs: ['router-link', 'router-view'],
            ...options
        })
    }

    test('Is a Vue Instance', () => {
        const wrapper = contructor()
        expect(wrapper.isVueInstance()).toBeTruthy()
    })  
})
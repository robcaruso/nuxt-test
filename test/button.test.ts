import { setActivePinia, createPinia } from "pinia";
import { useCountStore } from "../stores/CountStore";
import { describe, it, expect, beforeEach } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";
import ButtonComponentVue from "../components/Common/ButtonComponent.vue";


describe("stor test", async () => {
    await setup({

    })
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    it("test ", () => {
        const wrapper = mount(ButtonComponentVue);
        expect(wrapper.text()).toContain("0")
    })
    it("test plus state", () => {

    })
});
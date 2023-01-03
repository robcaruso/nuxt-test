import { flushPromises, mount } from "@vue/test-utils";

import { nextTick } from "vue";
import { describe, expect, it } from "vitest";
import ProductListVue from "@/components/Common/ProductList.vue";
import Dropdown from 'primevue/dropdown';
import TestComponentVue from "@/components/Test/TestComponent.vue";
import { setup, createPage } from "@nuxt/test-utils";
import PrimeVue from 'primevue/config';



describe("Product List Test", () => {

    it("will mount", async () => {
        const wrapper = mount(ProductListVue, {
            global: {
                plugins: [PrimeVue],
                components: { Dropdown }
            }
        });
        await flushPromises();
        console.log(wrapper.html())
        expect(wrapper.exists).toBeTruthy();
        expect(wrapper.text()).toContain("Products");
        const dd = wrapper.find("[aria-label='Select a Product']")
        await dd.trigger("click");
        await flushPromises();
        console.log(dd.html());
        const drop = wrapper.getComponent(Dropdown);
        console.log("----------------------")
        console.log(drop.html());
        await wrapper.find("[id='products_1']").trigger("click");
        expect(wrapper.text()).toContain("");

    })
});
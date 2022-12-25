import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ProductListVue from "@/components/Common/ProductList.vue";


describe("Product List Test", () => {
    it("will mount", () => {
        const wrapper = mount(ProductListVue, {

        });

        expect(wrapper.exists).toBeTruthy();
    })
});
import { describe, it, expect } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";
import TextBoxComponentVue from "../components/Common/TextBoxComponent.vue";

describe("Input test", () => {
    it("will mount and contain hello", () => {
        const wrapper = mount(TextBoxComponentVue);
        expect(wrapper.text()).toContain("hello")
    })
});
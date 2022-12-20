import { describe, it, expect } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";
import TextBoxComponentVue from "../components/Common/TextBoxComponent.vue";

describe("my test", () => {
    it("test", () => {
        const wrapper = mount(TextBoxComponentVue);
        expect(wrapper.text()).toContain("hello")
    })
});
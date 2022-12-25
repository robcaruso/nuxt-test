import { setActivePinia, createPinia } from "pinia";
import { createTestingPinia } from '@pinia/testing'
import { useCountStore } from "../stores/CountStore";
import { describe, it, expect, beforeEach } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";
import ButtonComponentVue from "../components/Common/ButtonComponent.vue";


describe("Button test", async () => {
    await setup();
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    it("will mount and test cout will be  0", () => {
        const wrapper = mount(ButtonComponentVue);
        expect(wrapper.text()).toContain("0")
    })
    it("will increase with click", async () => {
        const wrapper = mount(ButtonComponentVue, {
            global: {
                plugins: [createTestingPinia()],
            },
        });
        const countStore = useCountStore();
        await wrapper.find('[id = "plus"]').trigger('click');
        expect(countStore.count).toBe(0)
        expect(countStore.plusCount).toHaveBeenCalledTimes(1)
    })
});
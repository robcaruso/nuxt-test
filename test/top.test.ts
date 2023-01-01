import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";

import TopComponentVue from "~~/components/TopComponent.vue";



describe("Top component test", async () => {
  await setup({

  })
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it("will contain this ", () => {
    const wrapper = mount(TopComponentVue);
    console.log(wrapper.html());
    expect(wrapper.text()).toContain("This")
  })
  it("test plus state", () => {

  })
});
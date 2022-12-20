import { setActivePinia, createPinia } from "pinia";
import { useCountStore } from "../stores/CountStore";
import { describe, it, expect, beforeEach } from "vitest";
import { setup } from "@nuxt/test-utils";


describe("store test", async () => {
    await setup({

    })
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    it("test initial state", () => {
        const store = useCountStore();
        expect(store.count).toBe(0);
    })
    it("test plus state", () => {
        const store = useCountStore();
        expect(store.count).toBe(0);
        store.plusCount()
        expect(store.count).toBe(1)
    })
});
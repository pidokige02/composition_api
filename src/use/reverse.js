import { ref, computed } from "vue";

export default function useReverse () {
    const normal = ref("abcdefghij");

    const texttest = ref("");

    const reversed = computed(() => {
        return normal.value.split('').reverse().join('')
    });

    function reverseMessage() {
        return texttest.value.split('').reverse().join('')
    };
    return {normal, reversed, texttest ,reverseMessage}
}

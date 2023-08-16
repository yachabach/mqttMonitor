import { computed, ref } from 'vue'

export const createConfigStore = () => {

    const topics = ref([])

    const topicList = computed(() => topics.value)

    return {
        topicList
    }

}
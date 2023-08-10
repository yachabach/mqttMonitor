import * as fs from 'fs'
import { computed, ref } from 'vue'

export const createConfigStore = configFile => {

    const topics = ref([])

    const topicList = computed(() => topics.value)

    return {
        topicList
    }

}
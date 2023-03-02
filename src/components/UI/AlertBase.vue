<script setup lang="ts">
import { computed } from 'vue'

export type AlertType = 'success' | 'warning'

interface AlertBaseProps {
    message: string
    type?: AlertType
}

const props = withDefaults(defineProps<AlertBaseProps>(), { type: 'success' })

type AlertStylesMap = {
    [key in AlertType]: string
}

const alertStyles: AlertStylesMap = {
    success: 'bg-green-100 shadow-green-700 text-green-800',
    warning: 'bg-yellow-100 shadow-yellow-600 text-yellow-800',
}

const alertClasses = computed(() => alertStyles[props.type])
</script>

<template>
    <div
        class="p-4 bg-green-200 rounded-lg shadow shadow-green-700"
        :class="alertClasses"
    >
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
interface ButtonBaseProps {
    label: string
}

defineProps<ButtonBaseProps>()
</script>

<template>
    <button
        class="px-10 py-2 text-white bg-blue-600 rounded active:bg-blue-800"
    >
        {{ label }}
    </button>
</template>

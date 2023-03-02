<script setup lang="ts">
import { InputHTMLAttributes, ref } from 'vue'
import { uuid } from 'vue3-uuid'

interface TextInputProps {
    label: string
    modelValue: string
    inputAttributes?: InputHTMLAttributes
}

defineProps<TextInputProps>()
const emit = defineEmits(['update:modelValue'])

const id = ref(uuid.v4())

const onInput = ($event: Event) => {
    emit('update:modelValue', ($event.target as HTMLInputElement).value)
}
</script>

<template>
    <div class="flex flex-col">
        <label :for="id">{{ label }}</label>
        <input
            class="p-2 mt-2 border rounded border-slate-400"
            :id="id"
            :value="modelValue"
            @input="onInput"
            v-bind="inputAttributes"
        />
    </div>
</template>

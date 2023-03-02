<script setup lang="ts">
import { ref } from 'vue'
import ButtonBase from './components/UI/ButtonBase.vue'
import CardBase from './components/UI/CardBase.vue'
import TextInput from './components/UI/TextInput.vue'
import AlertDisplay from './components/AlertDisplay/AlertDisplay.vue'
import isValidIsbn13 from './utils/isValidIsbn13'

const isbnValue = ref<string>('')
const isValid = ref<boolean | null>(null)

const onSubmit = () => {
    if (isbnValue.value) isValid.value = isValidIsbn13(isbnValue.value)
}

const onClear = () => {
    isbnValue.value = ''
    isValid.value = null
}
</script>

<template>
    <main class="h-screen bg-blue-100 py-80 px-80">
        <form @submit.prevent="onSubmit">
            <CardBase class="flex flex-col gap-8 mb-8">
                <TextInput
                    label="Input the ISBN-13 to verify:"
                    v-model="isbnValue"
                    :input-attributes="{ maxlength: '13' }"
                />
                <div class="flex justify-evenly">
                    <ButtonBase label="Verify" type="submit" />
                    <ButtonBase
                        label="Clear"
                        type="button"
                        class="bg-red-500"
                        @click="onClear"
                    />
                </div>
            </CardBase>
            <AlertDisplay :isbn-is-valid="isValid" />
        </form>
    </main>
</template>

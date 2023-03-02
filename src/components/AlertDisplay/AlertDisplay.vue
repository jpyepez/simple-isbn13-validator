<script setup lang="ts">
import AlertBase from '../UI/AlertBase.vue'

interface AlertDisplayProps {
    isbnIsValid: boolean | null
}

defineProps<AlertDisplayProps>()
</script>

<template>
    <AlertBase
        v-if="isbnIsValid === true"
        message="Verification complete. This is a valid ISBN-13."
    />
    <AlertBase
        v-else-if="isbnIsValid === false"
        message="This is not a valid ISBN-13. Please check the number and try again."
        type="warning"
    />
</template>

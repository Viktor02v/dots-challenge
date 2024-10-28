<script setup>
import { ref } from "vue";

const capitalize = ref("");

const updateValue = (event) => {
  // Capitalize the first letter and make the rest lowercase
  const value = event.target.value;
  capitalize.value =
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};
</script>

<template>
  <input
    type="text"
    class="border border-gray-300"
    :value="capitalize"
    @input="updateValue"
  />
  <p>Input: {{ capitalize }}</p>
</template>

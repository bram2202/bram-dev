<template>
    <div>
        <a :href="link" target="_blank">{{title}}</a>
    </div>
</template>


<script setup lang="ts">
defineProps<{
    title: string,
    link: string
}>()
</script>

<style scoped>
div {
    padding: 5px;
}

a {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 0.8);
    border-radius: 12px;
    padding: 6px;
}

a:hover {
    transition: 0.3s;
    background-color: hsla(160, 100%, 37%, 0.8);
    color: black;

}
</style>
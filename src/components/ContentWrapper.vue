<script setup lang="ts">
import LinkWrapper from './LinksWrapper.vue';

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="info">
    <h1>{{ msg }}</h1>
    <h3>
      <LinkWrapper />
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: hsla(160, 100%, 37%, 1);
}

h3 {
  font-size: 1.2rem;
}

.wrapper h1,
.info h3 {
  text-align: center;
}

.info {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {

  .info h1,
  .info h3 {
    text-align: center;
  }
}

a {
  padding: 5px;
  color: hsla(160, 100%, 37%, 0.8);

}
</style>

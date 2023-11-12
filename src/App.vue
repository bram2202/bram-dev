<script setup lang="ts">
import { nextTick, ref } from "vue";
import ContentHolder from './components/ContentWrapper.vue'
import ConfettiExplosion from "vue-confetti-explosion";
const visible = ref(false);
const screenWidth = ref(screen.width)
const screenHeight = ref(screen.height)

const explode = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
};

</script>
<template>
  <ConfettiExplosion v-if="visible" :stageHeight="screenHeight" :stageWidth="screenWidth" />
  <header>
    <font-awesome-icon icon="fa-solid fa-computer" width="125" height="125" class="logo" @click="explode" />
    <div class="wrapper">
      <ContentHolder msg="Bram van Deventer" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  cursor: pointer;
}

.logo {
  font-size: 100px;
  color: hsla(160, 100%, 37%, 0.5);
}

.confetti-container {
  position: absolute;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

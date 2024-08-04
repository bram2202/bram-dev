<template>
  <div class="main">
    <ConfettiExplosion v-if="visible" :stageHeight="screenHeight" :stageWidth="screenWidth" />
    <div class="wrapper" >
      <v-icon class="logo" icon="mdi-desktop-classic" @click="explode" />
      <ContentHolder msg="Bram van Deventer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContentHolder from '../components/ContentWrapper.vue'
import { nextTick, ref } from "vue";
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


<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
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
  position: absolute !important;
}

@media (min-width: 1024px) {
  .wrapper {
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
}
</style>
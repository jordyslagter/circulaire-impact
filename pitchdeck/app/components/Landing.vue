<script setup>
import gsap from "gsap";

const title = ref(null);
const subtitle = ref(null);

onMounted(() => {
  gsap.fromTo(title.value, { x: -50 }, { x: 0 });
  gsap.fromTo(subtitle.value, { x: 50 }, { x: 0 });
});
</script>

<template>
  <section
    class="w-full h-[100vh] bg-greentomgreen text-antiprimary text-center flex flex-col justify-center items-center font-bold"
  >
    <h1 ref="title" class="text-6xl text-shadow-black">
      Een rugzak voor de volgende generatie...
    </h1>
    <h2 ref="subtitle" class="text-5xl mt-5 text-shadow-black">
      ...en de generaties daarna
    </h2>
  </section>
</template>

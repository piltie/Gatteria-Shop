<template>
  <div
    class="mt-14 text-center font-bold tracking-widest text-2xl text-eerie-black flex flex-col"
  >
    <a href="#best_sellers">FOR HUMANS</a>
    <div class="m-auto flex items-center w-[9rem]">
      <div class="flex-grow border-t-2 border-pastel-pink mr-2"></div>
      <div class="w-[17px] overflow-hidden inline-block animate-bounce mt-1">
        <div
          class="h-3 w-3 bg-pastel-red -rotate-45 transform origin-top-left"
        ></div>
      </div>
      <div class="flex-grow border-t-2 border-pastel-pink ml-2"></div>
    </div>
    <div class="flex justify-between">
      <img
        class="w-[20rem] mt-[1rem]"
        v-for="image in forHumansImages"
        :key="image.alt"
        :src="require(`../assets/images/${image.src}`)"
        :alt="image.alt"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "BodyProducts",
  data() {
    return {
      forHumansImages: [
        {
          src: "Cat_in_Cup_Stickers.png",
          alt: "Cat in Cup Stickers",
        },
        {
          src: "Cat_Paw_Retractable_Eraser_Kitty_Kitten.jpg",
          alt: "Cat Paw Retractable Eraser",
        },
        {
          src: "Fish_Cat_Hoodie.jpg",
          alt: "Fish Cat Hoodie",
        },
      ],
    };
  },
};
</script>

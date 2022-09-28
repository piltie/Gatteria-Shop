<template>
  <div
    class="grid grid-cols-[minmax(106px,_1fr)_repeat(4,_minmax(150px,_1fr))_minmax(316px,_1fr)] items-center font-bold text-pastel-red py-3 bg-pastel-pink"
  >
    <a href="#portuguese-website"
      ><img class="w-10 ml-16" src="../assets/images/brazil_flag.png"
    /></a>

    <h1 class="text-center col-span-4">
      <a href="#cart-page"
        >Free international shipping on orders over $50! 💸</a
      >
    </h1>

    <div class="flex justify-between mr-16 font-light text-white">
      <a
        href="#search-page"
        class="flex flex-nowrap items-center hover:text-pastel-red"
        ><SearchIcon class="w-5 mr-2" />Search</a
      >
      <a
        href="#user-page"
        class="flex flex-nowrap items-center hover:text-pastel-red"
        ><UserIcon class="w-5 mr-2" />Log In</a
      >
      <a
        href="#cart-page"
        class="flex flex-nowrap items-center hover:text-pastel-red"
        ><ShoppingBagIcon class="w-5 mr-2" />Bag: 0</a
      >
    </div>
  </div>
</template>

<script>
import { UserIcon } from "@heroicons/vue/solid";

import { SearchIcon, ShoppingBagIcon } from "@heroicons/vue/outline";

export default {
  components: { UserIcon, SearchIcon, ShoppingBagIcon },
  name: "HeaderContent",
};
</script>

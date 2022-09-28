<template>
  <div class="flex font-light">
    <ul
      class="list-none w-full flex justify-center m-auto bg-pastel-brown text-white px-5 z-20"
    >
      <li class="hover:bg-pastel-brown-light">
        <a href="#home" class="block px-7 py-3">HOME</a>
      </li>
      <li class="hover:bg-pastel-brown-light">
        <a href="#about" class="block px-7 py-3">ABOUT</a>
      </li>
      <li class="group hover:bg-pastel-brown-light">
        <a href="#services" class="flex px-7 py-3"
          >SERVICES<ChevronDownIcon class="w-4 ml-2"
        /></a>
        <ul class="absolute invisible bg-pastel-brown group-hover:visible">
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 block"
              href="#adoption"
              >Adoption</a
            >
          </li>
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 block"
              href="#cat_cafe"
              >Cat Cafe</a
            >
          </li>
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 pr-28 block"
              href="#pet_shop"
              >Pet Shop</a
            >
          </li>
        </ul>
      </li>
      <li class="group hover:bg-pastel-brown-light">
        <a href="#for_humans" class="flex px-7 py-3"
          >FOR HUMANS<ChevronDownIcon class="w-4 ml-2"
        /></a>
        <ul class="absolute invisible bg-pastel-brown group-hover:visible">
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 block"
              href="#accessories"
              >Accessories</a
            >
          </li>
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 block"
              href="#apparel"
              >Apparel</a
            >
          </li>
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 block"
              href="#plushies"
              >Plushies</a
            >
          </li>
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 pr-28 block"
              href="#stationery"
              >Stationery</a
            >
          </li>

          <li></li>
        </ul>
      </li>
      <li class="group hover:bg-pastel-brown-light">
        <a href="#services" class="flex px-7 py-3"
          >FOR CATS<ChevronDownIcon class="w-4 ml-2"
        /></a>
        <ul class="absolute invisible bg-pastel-brown group-hover:visible">
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 pr-28 block"
              href="#food_and_treats"
              >Food & Treats</a
            >
          </li>
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 block"
              href="#furniture_and_toys"
              >Furniture & Toys</a
            >
          </li>
          <li>
            <a
              class="hover:bg-pastel-brown-light py-2 pl-3 block"
              href="#collars_harnesses_and_leashes"
              >Collars, Harnesses & Leashes</a
            >
          </li>
        </ul>
      </li>
      <li class="hover:bg-pastel-brown-light">
        <a href="#contact_us" class="block px-7 py-3">CONTACT US</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ChevronDownIcon } from "@heroicons/vue/outline";

export default {
  components: { ChevronDownIcon },
  name: "HeaderMenu",
};
</script>
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

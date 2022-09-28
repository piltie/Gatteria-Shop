<template>
  <header class="bg-pastel-pink-light">
    <HeaderTop />
    <a href="home"
      ><img class="m-auto w-80 py-6" src="../../assets/images/logo.png"
    /></a>
    <HeaderMenu />
  </header>
  <body class="m-auto pt-12 w-[78rem]">
    <BodySlider />
    <BodyProducts />
  </body>
  <button
    @click="teste"
    class="text-pastel-brown-dark hover:text-pastel-brown-light"
    id="texte"
  >
    Isso é um teste (ignore XD)
  </button>
</template>
<script>
import HeaderTop from "../HeaderTop.vue";
import HeaderMenu from "../HeaderMenu.vue";
import BodyProducts from "../BodyProducts.vue";
import BodySlider from "../BodySlider.vue";
import { useUsers } from "@/stores/counter";
import { mapActions } from "pinia";

export default {
  name: "SiteLayout",
  components: {
    HeaderTop,
    HeaderMenu,
    BodyProducts,
    BodySlider,
  },
  methods: {
    // gives access to this.increment() inside the component
    // same as calling from store.increment()
    ...mapActions(useUsers, ["test"]),
    async teste() {
      let conteudoteste = await this.test();
      document.getElementById("texte").innerHTML = conteudoteste;
    },
  },
};
</script>

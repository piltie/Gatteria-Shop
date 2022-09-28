<template>
  <div class="flex justify-between">
    <div
      class="absolute flex justify-between m-auto mt-[29rem] right-0 left-0 w-16 z-10"
    >
      <button
        :class="
          `rounded-full inline-block w-4 h-4 ` +
          [this.index == '1' ? 'bg-pastel-brown-light' : 'bg-pastel-red']
        "
      ></button>
      <button
        :class="
          `rounded-full inline-block w-4 h-4 ` +
          [this.index == '2' ? 'bg-pastel-brown-light' : 'bg-pastel-red']
        "
      ></button>
      <button
        :class="
          `rounded-full inline-block w-4 h-4 ` +
          [this.index == '3' ? 'bg-pastel-brown-light' : 'bg-pastel-red']
        "
      ></button>
    </div>
    <button
      @click="leftButtonClicked"
      class="text-pastel-brown-dark hover:text-pastel-brown active:text-pastel-brown-light"
    >
      <ChevronLeftIcon class="w-14" ref="leftButton" />
    </button>
    <div class="justify-center w-[70rem] overflow-hidden">
      <div class="flex z-0" ref="sliderContainer">
        <img
          v-for="image in slider"
          :key="image.alt"
          :src="require(`../assets/images/${image.src}`)"
          :alt="image.alt"
          class=""
        />
      </div>
    </div>
    <button
      @click="rightButtonClicked"
      class="text-pastel-brown-dark hover:text-pastel-brown active:text-pastel-brown-light"
    >
      <ChevronRightIcon class="w-14" ref="rightButton" />
    </button>
  </div>
</template>
<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";

export default {
  components: { ChevronLeftIcon, ChevronRightIcon },
  name: "BodySlider",
  data() {
    return {
      index: 1,
      leftClicked: false,
      slider: [
        {
          id: "firstImage",
          src: "Cat_Kit_Article_Web_Banner.jpg",
          alt: "Cat Kit Article Web Banner",
        },
        {
          id: "secondImage",
          src: "HatsuneMikuXPusheen_dotcom_banner.jpg",
          alt: "Cat Kit Article Web Banner 3",
        },
        {
          id: "thirdImage",
          src: "HKxPusheen_Launch-Article-Web-Banner_DESKTOP.jpg",
          alt: "Cat Kit Article Web Banner 2",
        },
      ],
    };
  },
  mounted() {
    console.log("mounted!");
    this.$nextTick(() => {
      document.addEventListener("click", this.onClick);
      this.$refs.sliderContainer.addEventListener(
        "transitionend",
        this.onTransitionEnd
      );
    });
  },
  methods: {
    rightButtonClicked(event) {
      if (this.index === 1 && this.leftClicked == true) {
        return;
      }
      if (this.index === 3) {
        this.$refs.sliderContainer.classList.add(`-translate-x-[0rem]`);
        this.$refs.sliderContainer.classList.add(`duration-1000`);
      } else {
        if (
          !this.$refs.rightButton.classList.contains("text-pastel-brown-light")
        ) {
          this.$refs.rightButton.classList.add("text-pastel-brown-light");
          this.$refs.leftButton.classList.remove("text-pastel-brown-light");
        }
        if (this.leftClicked === true) {
          const regex = /\[(.*?)\]/;
          let value = regex.exec(this.$refs.sliderContainer.className);
          let mano = parseInt(value[1].substring(0, 2));
          mano += 70;
          console.log(mano);
          this.$refs.sliderContainer.classList.add(`-translate-x-[${mano}rem]`);
          //this.$refs.sliderContainer.classList.remove(`${value}`);
          this.index++;
        } else {
          console.log("scr");
          this.$refs.sliderContainer.classList.add(
            "-translate-x-[70rem]",
            "duration-1000"
          );
          this.leftClicked = true;
        }
      }

      event.stopPropagation();
    },
    leftButtonClicked(event) {
      if (
        !this.$refs.leftButton.classList.contains("text-pastel-brown-light")
      ) {
        this.$refs.leftButton.classList.add("text-pastel-brown-light");
        this.$refs.rightButton.classList.remove("text-pastel-brown-light");
      }
      event.stopPropagation();
      this.slider.unshift(this.slider[2]);
      this.slider.pop();
    },
    onClick() {
      this.$refs.rightButton.classList.remove("text-pastel-brown-light");
      this.$refs.leftButton.classList.remove("text-pastel-brown-light");
    },
    onTransitionEnd() {
      console.log("AJUDA");
      if (this.leftClicked === true) {
        console.log("AAA");
        if (this.index === 3) {
          this.index = 1;
          for (let i = 0; i <= 140; i += 70) {
            console.log("i:", i);
            this.$refs.sliderContainer.classList.remove(
              `-translate-x-[${i}rem]`
            );
          }
          this.$refs.sliderContainer.classList.remove(`duration-1000`);
          this.leftClicked = false;
          return;
        }
        if (this.index === 1 || this.index === 2) {
          console.log("jesus");
          this.index++;
        }
      }
      if (this.leftClicked === false && this.index === 1) {
        this.index++;
      }
    },
  },
};
</script>

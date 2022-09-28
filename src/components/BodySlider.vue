<template>
  <div class="flex justify-between">
    <ul
      class="absolute flex justify-between m-auto mt-[29rem] right-0 left-0 w-16 z-10"
    >
      <li v-for="n in 3" :key="n" class="flex">
        <button
          :class="
            `rounded-full w-4 h-4 ` +
            [this.queue == n ? 'bg-pastel-brown-light' : 'bg-pastel-red']
          "
        ></button>
      </li>
    </ul>
    <button
      @click="showNextImage"
      class="text-pastel-brown-dark hover:text-pastel-brown-light"
      id="leftButton"
      ref="leftButton"
    >
      <ChevronLeftIcon class="w-14" />
    </button>
    <div class="overflow-hidden">
      <div class="w-[70rem] flex opacity-0" ref="sliderContainer">
        <img
          v-for="image in sliderImages"
          :key="image.alt"
          :src="require(`../assets/images/${image.src}`)"
          :alt="image.alt"
        />
      </div>
    </div>
    <button
      @click="showNextImage"
      class="text-pastel-brown-dark hover:text-pastel-brown-light"
      id="rightButton"
      ref="rightButton"
    >
      <ChevronRightIcon class="w-14" />
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
      queue: 1, // Symbolizes what image is being shown at the slider
      clickedLeftButton: false,
      clickedRightButton: false,
      sliderImages: [
        {
          src: "Cat_Kit_Article_Web_Banner.jpg",
          alt: "Cat Kit Article Web Banner",
        },
        {
          src: "HatsuneMikuXPusheen_dotcom_banner.jpg",
          alt: "Cat Kit Article Web Banner 3",
        },
        {
          src: "HKxPusheen_Launch-Article-Web-Banner_DESKTOP.jpg",
          alt: "Cat Kit Article Web Banner 2",
        },
      ],
    };
  },
  mounted() {
    let slider = this.$refs.sliderContainer;
    const sliderContainer = this.$refs.sliderContainer;
    // Guarantees the functions will be called only after the DOM is ready and Vue updated it
    this.$nextTick(() => {
      //sliderContainer.classList.remove("opacity-0");
      let test = async () => {
        sliderContainer.classList.add(
          "transition-opacity",
          "delay-500",
          "duration-500",
          "opacity-100"
        );
      };

      async function test2() {
        await test;
        sliderContainer.classList.remove("opacity-0");
      }

      test2();

      sliderContainer.addEventListener("click", function () {
        sliderContainer.classList.add(
          "transition-opacity",
          "duration-300",
          "opacity-100"
        );
      });
      document.addEventListener("click", this.onClick);
      slider.addEventListener("transitionend", this.onTransitionEnd);
    });
  },
  methods: {
    showNextImage(event) {
      let slider = this.$refs.sliderContainer;
      let queue = this.queue;
      const button = event.currentTarget;

      // Remove all of the animation's (-translate-x-) classes that the slider has
      const classes = slider.className
        .split(" ")
        .filter((c) => !c.startsWith("-translate-x-"));
      slider.className = classes.join(" ").trim();

      // Allow the button to stay light-colored after clicking on it
      event.stopPropagation();
      button.classList.add("text-pastel-brown-light");

      // Add animation classes to the right button
      if (button.id === "rightButton") {
        let leftButton = this.$refs.leftButton;
        leftButton.classList.remove("text-pastel-brown-light");

        this.clickedRightButton = true;
        this.clickedLeftButton = false;

        if (queue === 1) {
          slider.classList.add(`-translate-x-[70rem]`, `duration-1000`);
          return;
        }

        if (queue === 2) {
          slider.classList.add(`-translate-x-[140rem]`);
          return;
        }

        if (queue === 3) {
          slider.classList.add(`-translate-x-[0rem]`);
          return;
        }
      }

      // Add animation classes to the left button
      if (button.id === "leftButton") {
        let rightButton = this.$refs.rightButton;
        rightButton.classList.remove("text-pastel-brown-light");

        this.clickedRightButton = false;
        this.clickedLeftButton = true;

        if (queue === 1) {
          slider.classList.add(`-translate-x-[140rem]`, `duration-1000`);
          return;
        }

        if (queue === 2) {
          slider.classList.add(`-translate-x-[0rem]`);
        }

        if (queue === 3) {
          slider.classList.add(`-translate-x-[70rem]`);
        }
      }
    },

    // Remove the button's light color when clicking anywhere in the document
    onClick() {
      let rightButton = this.$refs.rightButton;
      let leftButton = this.$refs.leftButton;

      rightButton.classList.remove("text-pastel-brown-light");
      leftButton.classList.remove("text-pastel-brown-light");
    },

    // Makes the
    onTransitionEnd() {
      const queue = this.queue;

      if (this.clickedRightButton) {
        if (queue === 1 || queue === 2) {
          this.queue++;
          return;
        }
        if (queue === 3) {
          this.queue = 1;
          return;
        }
      }

      if (this.clickedLeftButton) {
        if (queue === 2 || queue === 3) {
          this.queue--;
          return;
        }
        if (queue === 1) {
          this.queue = 3;
          return;
        }
      }
    },
    /*isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },*/
  },
};
</script>

import { defineStore } from "pinia";

const myRequest = new Request("https://localhost:7083/WeatherForecast");

export const useUsers = defineStore("users", {
  state: () => ({
    userData: null,
    // ...
  }),

  actions: {
    async test() {
      try {
        this.userData = await fetch(myRequest).then(function (response) {
          return response.json();
        });
        return JSON.stringify(this.userData);
      } catch (error) {
        // let the form component display the error
        return error;
      }
    },
  },
});

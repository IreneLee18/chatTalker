const app = Vue.createApp({
  data() {
    return {
      ques1: false,
      ques2: false,
      ques3: false,
      temp: {},
      renderNum:'10000',
      numbers: [
        {
          num: "10000",
          basicPrice: 600,
          standardPrice: 1600,
        },
        {
          num: "15000",
          basicPrice: 500,
          standardPrice: 1500,
        },
        {
          num: "20000",
          basicPrice: 400,
          standardPrice: 1400,
        },
        {
          num: "25000",
          basicPrice: 300,
          standardPrice: 1300,
        },
        {
          num: ">25000",
          basicPrice: 100,
          standardPrice: 1000,
        },
      ],
    };
  },
  methods: {
    toTop() {
      scrollTo(0, 0);
    },
    selectNum(item) {
      this.temp = { ...item };
      console.log(this.temp);
    },
    clickQuestion(key) {
      console.log(key);
      this[key] = !this[key];
    },
  },
  created() {
    //page2:做預設一開始是10000位
    this.temp.num=this.renderNum
  },
});
app.mount("#app");

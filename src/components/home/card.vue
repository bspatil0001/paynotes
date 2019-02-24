<template>
  <div>
    <section class="card" @click="click(item)">
      <article>
        <h2 class="category">{{ item.id | date }}</h2>
        <h1 class="headline">{{ item.title }}</h1>
        <hr>
        <p class="description">{{ item.description }}</p>
      </article>
    </section>
  </div>
</template>

<style lang="scss">
.card {
  float: left;
  overflow: hidden;
  height: 200px;
  width: 21%;
  margin: 20px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 10px 10px -8px rgba(black, 0.075),
    0 12px 20px -8px rgba(black, 0.075), 0 15px 20px -8px rgba(black, 0.05),
    0 0 10px 2px rgba(black, 0.025);
  transition-duration: 1s;

  &:hover {
    transform: scale(1.1);
  }

  header {
    position: relative;
    overflow: hidden;
    height: 200px;

    img {
      display: block;
      position: absolute;
      bottom: 0;
      width: 150%;
      margin-left: -25%;
    }
  }

  article {
    padding: 30px;
    height: 100%;

    h2 {
      margin: 0;
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      color: rgba(black, 0.3);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h1 {
      margin: 12px 0 15px 0;
      font-family: "Martel", serif;
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    hr {
      width: 24px;
      margin: 0 auto;
      border: none;
      border-bottom: 2px solid rgba(black, 0.1);
    }

    p {
      margin: 15px auto 0 auto;
      font-family: "Noto Serif", "Book Antiqua", Palatino, "Palatino Linotype",
        "Palatino LT STD", Georgia, serif;
      font-size: 15px;
      line-height: 21px;
      color: rgba(black, 0.5);
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-height: 1.5;
    }
  }
  @media screen and (max-width: 900px) {
    width: 28%;
  }
  @media screen and (max-width: 786px) {
    width: 44%;
  }
  @media screen and (max-width: 600px) {
    width: 89%;
  }
}
</style>
<script>
export default {
  name: "card",
  props: { item: Object },
  filters: {
    date: function(date) {
      date = new Date(date);
      return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }
  },
  methods: {
    click(item) {
      this.$emit("send", item);
    }
  }
};
</script>

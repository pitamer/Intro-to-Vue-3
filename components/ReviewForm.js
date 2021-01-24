app.component("review-form", {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a Review</h3>

        <label for="name">Name:</label>
        <input id="name" v-model="name"/>

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
        
        <label for="rating">Rating:</label>
        <select id="rating" v-model="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>  
        </select>

        <input class="button" type="submit" value="Submit" />

    </form>`,

  data() {
    return {
      name: "",
      review: "",
      rating: null,
    };
  },

  methods: {
      onSubmit() {
          return null
      }
  }
});

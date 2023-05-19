<template>
<main class="container">
  <div>
    <h1>{{ item.title }}</h1>
    <!-- A movie details section that initially hides the movie details. The button's label changes based on the value of the showDetails property. If showDetails is true, the movie details are displayed along with a "Hide Details" button. If showDetails is false, only a "Show Details" button is displayed. Clicking the button triggers the toggleDetails method, which toggles the value of showDetails between true and false, thus changing the UI and showing or hiding the movie details section accordingly. -->
    <div v-if="showDetails">
      <h2>{{ movie.title }}</h2>
      <p>Release Year: {{ movie.releaseYear }}</p>
      <p>Genre: {{ movie.genre }}</p>
      <button @click="toggleDetails" class="btn btn-primary">Hide Details</button>
    </div>
    <!-- V-else starts here  -->
    <div v-else>
      <button @click="toggleDetails" class="btn btn-primary">Show Details</button>
    </div>
    <!-- image element that has been bound to vue.js such that it uses information within the 'item' object -->
    <img
      :src="item.imgLink"
      :alt="item.name"
      class="img-thumbnail"
    />
    <p> {{ item.info }}</p>
  </div>  
    <!-- allows you to automatically synchronize the value of an input element with the data property it is bound to, providing real-time updates in both directions. In this case a message that will be returned below the input field. -->
  <div class="input-form">
    <p>
      <input v-model="message">
    </p>
    <p> "{{ message }}" </p>
  </div>
  
</main>
  </template>
  
  <script>
  
  export default {
    name: 'HomeContent',
    data() {
      return {
            message:'Leave your review here...  ',
            item:                     
            {
                title:"Trending Tonight",
                name:"Eyes Wide Shut",
                imgLink:"http://deep-focus.com/images/1280_EWS.jpg",
                info: "Eyes Wide Shut is a 1999 erotic mystery psychological drama film directed, produced, and co-written by Stanley Kubrick. It is based on the 1926 novella Traumnovelle by Arthur Schnitzler, transferring the story's setting from early twentieth-century Vienna to 1990s New York City. The plot centers on a doctor who is shocked when his wife reveals that she had contemplated having an affair a year earlier. He then embarks on a night-long adventure, during which he infiltrates a masked orgy of an unnamed secret society."
            },
          showDetails: false,
          movie: {
            title: 'Eyes Wide Shut',
            releaseYear: 1999,
            genre: 'Psychological Thriller, Drama'
          }
      };
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
              
        }
    }
}
  </script>     
  
  <style>
  
  </style>
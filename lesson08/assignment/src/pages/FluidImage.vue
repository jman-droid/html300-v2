<template>
    <main class="container">
      <!-- Component for page heading -->
      <PageHeading>
        <h1 slot="heading">Some of our favorite titles</h1>
      </PageHeading>
      <!-- Loop over the images array and render image components -->
      <div class="fluid-image film" v-for="(image, i) in images" :key="i">
        <!-- Button to toggle the image border -->
        <button type="button" class="btn btn-secondary py-3 px-4 border_btn" @click="toggleBorder(i)">
          {{ image.isBordered ? 'Hide Border' : 'Show Border' }}
        </button>
        <!-- Image component -->
        <ImageComp
          :src="image.url"
          :alt="image.alt"
          :name="image.name"
          :class="{ 'img-fluid': !image.isBordered, 'img-fluid border border-danger border-4': image.isBordered }"
        ></ImageComp>
      </div>
    </main>
  </template>
  
  
  <script>
  import ImageComp from "../components/ImageComp.vue";
  import PageHeading from "../components/PageHeading.vue";
  export default {
    name: 'FluidImage',
    components: { PageHeading, ImageComp },
    data() {
      return {
         // Array of image objects
        images: [
          {
            name: "Secrets & Lies (1996)",
            alt: "a family sits down for bbq dinner in garden",
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcriterion-production.s3.amazonaws.com%2Fcarousel-files%2F7a6bf951b45a8748cd9ed37e3cd728f8.jpeg&f=1&nofb=1&ipt=d86398199591e62244dc6a6253f4c8f45f7bec62e31a504d0888acf100669c9c&ipo=images",
            isBordered: false // Initial border state for the image
          },
          {
            name: "The Duke of Burgundy (2014)",
            alt: "a woman walking toward camera looks up off camera optimistically ",
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcultmoviecultdotcom.files.wordpress.com%2F2020%2F09%2Fduke-4.jpg&f=1&nofb=1&ipt=a24db47fcb2d27dc56acfd7ccb553486a0154c2cd9bc15d7f2181202b8ba61a1&ipo=images",
            isBordered: false
          },
          {
            name: "Bacurau (2019)",
            alt: "a group of townspeople stand forlorn, one woman in the center stands looking down in a blood-soaked coat",
            url: "https://external-preview.redd.it/G4Qt4DtItShXlKFLRZ6Ag7h_qYz876M5IfDgTtpNZ2I.jpg?auto=webp&s=de2ac34fc1133058ccbc6a4496a2ec2e6a124f87",
            isBordered: false
          },
          {
            name: "Possession (1981)",
            alt: "a closeup of a woman looking straight into the camera with tears in her eyes and awry smile",
            url: "https://image.tmdb.org/t/p/original/zfw3fcF7d4KcWYEvps4zUfl303b.jpg",
            isBordered: false
          }
        ]
      };
    },
    methods: {
        // Method to toggle the image border
      toggleBorder(index) {
        this.images[index].isBordered = !this.images[index].isBordered;
      }
    }
  };
  </script>
<style>
.fluid-image {
        padding-top: 5rem;
    }
      
</style>
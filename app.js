
const h = Vue.h;

const app = Vue.createApp({
  data() {
    return {
      count: 0,
      title: 'Hello Vue 3'
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Changed title!'
    }
  },
  template: `
    <div class="card center">
      <h1>{{ title }}</h1>
      <div class="content-wrapper">
        content 1
      </div>
      <div class="label-wrapper">
        <ul>
          <li v-for>
            <span>Count: </span>
            {{ count }}
          </li>
        </ul>
      </div>
      <div class="Buttons-wrapper">
        <button @click="count++">Back</button>
        <button @click="changeTitle()">Forward</button>
      </div>
    </div>
  `,
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }

})

app.mount('#app')

// setTimeout(() => {
//   app.unmount()
// }, 2000)
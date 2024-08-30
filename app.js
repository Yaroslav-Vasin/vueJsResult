
const h = Vue.h;

const app = Vue.createApp({
  data() {
    return {
      currentId: 0,
      count: 0,
      title: 'Hello Vue 3',
      steps: [
        { id: 1, title: 'Core', data: 'Data 1', active: false },
        { id: 2, title: 'Components', data: 'Data 2', active: false },
        { id: 3, title: 'Router', data: 'Data 3', active: false },
        { id: 4, title: 'Vuex', data: 'Data 4', active: false },
        { id: 5, title: 'Composition', data: 'Data 5', active: false }
      ]
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Changed title!'
    },

    isActive(step) {
      if (step.active) {
        return 'active'
      }
    },

    changeStatus(step) {
      console.log(step);

      this.currentId = Number(step) || Number(step) === 0 ? step : step.id

      console.log(this.currentId);

      this.steps.forEach(s => s.active = false)
      this.steps.forEach(s => {
        if (s.id <= this.currentId) {
          s.active = true
        }
      })
    },

    nextStep() {
      const newStep = this.currentId + 1

      if (newStep > this.steps.length) {
        this.currentId - 1
        return
      }

      this.changeStatus(newStep)
    },

    prevStep() {
      const newStep = this.currentId - 1

      if (newStep < 0) {
        this.currentId + 1
        return
      }

      this.changeStatus(newStep)
    }
  },
  template: `
    <div class="card center">
        <h1>План по изучению Vue.js</h1>
        <p>Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API...</p>
        
        <nav>
          <a v-for="(step, index) in steps"
            key="item.title"
            :href="'#step-' + (index + 1)"
            :class="isActive(step)"
            :id="'nav-step-' + (index + 1)"
            @click="changeStatus(step)"
          >
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-label">Основы</div>
          </a>
        </nav>
        
        <div class="buttons-wrapper">
            <button id="back-btn" class="button" @click="prevStep()">НАЗАД</button>
            <button id="next-btn" class="button" @click="nextStep()">ДАЛЕЕ</button>
        </div>
    </div>
  `,
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  // },
  // updated() {
  //   console.log('updated');
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount');
  // },
  // unmounted() {
  //   console.log('unmounted');
  // }
})

app.mount('#app')

// setTimeout(() => {
//   app.unmount()
// }, 2000)
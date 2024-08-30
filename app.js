
const h = Vue.h;

const app = Vue.createApp({
  data() {
    return {
      secondButtonText: 'Next',
      currentId: 0,
      count: 0,
      title: 'Hello Vue 3',
      steps: [
        { id: 1, title: 'Core', data: 'Data 1', active: false },
        { id: 2, title: 'Components', data: 'Data 2', active: false },
        { id: 3, title: 'Router', data: 'Data 3', active: false },
        { id: 4, title: 'Vuex', data: 'Data 4', active: false },
        { id: 5, title: 'Composition', data: 'Data 5', active: false }
      ],
      nextButtonStatus: 'active'
    }
  },
  methods: {
    getTitle(index) {
      return this.steps[index].title;
    },
    changeTitle() {
      this.title = 'Changed title!'
    },
    isActive(step) {
      return step.active ? 'active' : '';
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

      if (newStep > this.steps.length + 1) {
        this.currentId - 1
        return
      }

      console.log(this.currentId >= this.steps.length);


      this.changeStatus(newStep)
    },
    prevStep() {
      const newStep = this.currentId - 1

      if (newStep < 0) {
        this.currentId + 1
        return
      }

      this.changeStatus(newStep)
    },
    restart() {
      this.currentId = 0
      this.steps.forEach(s => s.active = false)
      this.steps.forEach(s => {
        if (s.id <= this.currentId) {
          s.active = false
        }
      })
    },
  },
  computed: {
    isPrevDisabled() {
      return this.currentId <= 0;
    },
    buttonText() {
      this.secondButtonText = this.currentId >= this.steps.length ? 'End' : 'Next';
      return this.secondButtonText;
    },
    setOfButtons() {
      return this.currentId > this.steps.length ? false : true;
    },
    currentData() {
      // Убедитесь, что currentId не выходит за пределы массива
      if (this.currentId === 0) {
        return this.steps[0].data;
      }

      if (this.currentId >= 1 && this.currentId <= this.steps.length) {
        return this.steps[this.currentId - 1].data;
      }

      if (this.currentId > this.steps.length) {
        return this.steps[this.steps.length - 1].data;
      }

    }
  },
  template: `
    <div class="card center">
        <h1>План по изучению Vue.js</h1>
        <p>{{ this.currentData }}</p>

        <nav>
          <a v-for="(step, index) in steps"
            key="item.title"
            :href="'#step-' + (index + 1)"
            :class="isActive(step)"
            :id="'nav-step-' + (index + 1)"
            @click="changeStatus(step)"
          >
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-label">{{ getTitle(index) }}</div>
          </a>
        </nav>

        <div class="buttons">
            <button v-if="setOfButtons" id="back-btn" class="button" @click="prevStep()" :disabled="isPrevDisabled">Back</button>
            <button v-if="setOfButtons" id="next-btn" class="button" @click="nextStep()">{{ buttonText }}</button>
            <button v-else="setOfButtons" id="next-btn" class="button" @click="restart()">Restart</button>
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
  mounted() {
    console.log('mounted');
  },
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
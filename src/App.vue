<template>
  <div class="wrapper">
    <template v-if="!birthday">
      <div id="countdown" class="countdown">
      <div class="countdown__title">
        countdown to my Birthday:
      </div>
      <countdown :time="timeToBirthday">
        <template slot-scope="props">
          <div class="countdown__timer timer">
            <div class="timer__item">
              <div id="days" class="timer__num">{{ props.days }}</div>
              <div class="timer__text">days</div>
            </div>
            <div class="timer__item">
              <div id="hours" class="timer__num">{{ props.hours }}</div>
              <div class="timer__text">Hours</div>
            </div>
            <div class="timer__item">
              <div id="minutes" class="timer__num">{{ props.minutes }}</div>
              <div class="timer__text">Minutes</div>
            </div>
            <div class="timer__item">
              <div id="seconds" class="timer__num">{{ props.seconds }}</div>
              <div class="timer__text">Seconds</div>
            </div>
          </div>
        </template>
      </countdown>
    </div>
    </template>
    <template v-else>
      <h1 id="birthdayTime" class="birthday">
        IT IS MY BIRTHDAY.
      </h1>
    </template>
  </div>
</template>

<script>

const yearOfTheEvent = new Date().getFullYear();
let eventDate = new Date(yearOfTheEvent, 10, 7);

export default {
  name: 'App',
  data: function () {
    return {
      now: new Date(),
      timer: undefined,
    }
  },
  computed: {
    birthday() {
      return this.now.getMonth() === 10 && this.now.getDate() === 7
    },
    getYear() {
      return this.now.getFullYear()
    },
    getTimestamp() {
      return this.now.getTime();
    },
    timeToBirthday () {
      if (this.getYear === eventDate.getFullYear() + 1) {
        eventDate = new Date(this.getYear, 10, 7);
      }
      return eventDate.getTime() - this.getTimestamp;
    },
  },
  watch: {
    birthday: {
      handler(newV) {
        if (newV) {
          this.$confetti.start()
        } else {
          this.$confetti.stop();
        }
      },
      immediate: true
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.now = new Date();
    }, 1000)
  },
};
</script>

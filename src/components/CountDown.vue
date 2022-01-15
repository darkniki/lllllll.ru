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
                <div class="timer__num">{{ props.days }}</div>
                <div class="timer__text">{{ getPluralForm(props.days, ['Day', 'Days']) }}</div>
              </div>
              <div class="timer__item">
                <div class="timer__num">{{ props.hours }}</div>
                <div class="timer__text">{{ getPluralForm(props.hours, ['Hour', 'Hours']) }}</div>
              </div>
              <div class="timer__item">
                <div class="timer__num">{{ props.minutes }}</div>
                <div class="timer__text">{{ getPluralForm(props.minutes, ['Minute', 'Minutes']) }}</div>
              </div>
              <div class="timer__item">
                <div class="timer__num">{{ props.seconds }}</div>
                <div class="timer__text">{{ getPluralForm(props.seconds, ['Second', 'Seconds']) }}</div>
              </div>
            </div>
          </template>
        </countdown>
      </div>
    </template>
    <template v-else>
      <h1 class="birthday">
        IT IS MY BIRTHDAY.
      </h1>
    </template>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, computed } from '@vue/composition-api'
import Confetti from 'vue-confetti/src/confetti';
import {getPluralForm} from '@/utils/getPluralForm';

const BIRTH = {
  day: 7,
  month: 10,
};
const yearOfTheEvent = new Date().getFullYear();
let eventDate = new Date(yearOfTheEvent, BIRTH.month, BIRTH.day);
export default defineComponent({
  name: 'CountDown',
  setup() {
    const now = ref(new Date());
    const party = ref(false);
    const confetti = new Confetti();
    const birthday = computed(() => now.value.getMonth() === BIRTH.month && now.value.getDate() === BIRTH.day);
    const getYear = computed(() => now.value.getFullYear());
    const getTimestamp = computed(() => now.value.getTime());
    const timeToBirthday = computed(() => {
      if (now.value > eventDate) {
        eventDate = new Date(getYear.value + 1, BIRTH.month, BIRTH.day);
      } else if (getYear.value === eventDate.getFullYear() + 1) {
        eventDate = new Date(getYear.value, BIRTH.month, BIRTH.day);
      }

      return eventDate.getTime() - getTimestamp.value;
    });
    const partyHandler = () => {
      if (birthday.value && !party.value) {
        party.value = true
        confetti.start()
      } else if (!birthday.value && party.value) {
        party.value = false
        confetti.stop();
      }
    }
    const updatePartyTime = () => setInterval(() => {
      now.value = new Date()
      partyHandler()
    }, 1000);

    onMounted(updatePartyTime)

    return {
      getPluralForm,
      timeToBirthday,
      birthday,
    }
  }
})
</script>

<style lang="scss">
@import "src/assets/styles/main";
</style>

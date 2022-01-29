<template>
  <div class="wrapper">
    <template v-if="!birthday">
      <div id="countdown" class="countdown">
        <div class="countdown__title">
          {{ $t('countdown') }}
        </div>
        <countdown :time="timeToBirthday">
          <template slot-scope="props">
            <div class="countdown__timer timer">
              <div class="timer__item">
                <div class="timer__num">{{ props.days }}</div>
                <div class="timer__text">{{ $tc('days', props.days) }}</div>
              </div>
              <div class="timer__item">
                <div class="timer__num">{{ props.hours }}</div>
                <div class="timer__text">{{ $tc('hours', props.hours) }}</div>
              </div>
              <div class="timer__item">
                <div class="timer__num">{{ props.minutes }}</div>
                <div class="timer__text">{{ $tc('minutes', props.minutes) }}</div>
              </div>
              <div class="timer__item">
                <div class="timer__num">{{ props.seconds }}</div>
                <div class="timer__text">{{ $tc('seconds', props.seconds) }}</div>
              </div>
            </div>
          </template>
        </countdown>
      </div>
    </template>
    <template v-else>
      <h1 class="birthday">
        {{ $t('itsMyBirthday') }}
      </h1>
    </template>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, unref, computed } from '@vue/composition-api'
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
    const birthday = computed(() => unref(now).getMonth() === BIRTH.month && unref(now).getDate() === BIRTH.day);
    const timeToBirthday = computed(() => {
      if (unref(now) > eventDate) {
        eventDate = new Date(unref(now).getFullYear() + 1, BIRTH.month, BIRTH.day);
      } else if (unref(now).getFullYear() === eventDate.getFullYear() + 1) {
        eventDate = new Date(unref(now).getFullYear(), BIRTH.month, BIRTH.day);
      }

      return eventDate.getTime() - unref(now).getTime();
    });
    const partyHandler = () => {
      if (unref(birthday) && !unref(party)) {
        party.value = true
        confetti.start()
      } else if (!unref(birthday) && unref(party)) {
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

<style lang="scss" scoped>
  @import "src/components/countDown/styles/main";
</style>

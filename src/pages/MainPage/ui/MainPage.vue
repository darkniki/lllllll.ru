<template>
    <FullScreenBadge v-if="isBirthday" :text="t('itsMyBirthday')" />
    <CountDown
        v-else
        :timer="{
            days, hours, minutes, seconds,
        }" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed, onMounted, ref } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import Confetti from 'vue-confetti/src/confetti';
import { FullScreenBadge } from '@/shared/ui/FullScreenBadge';
import { CountDown } from '@/shared/ui/CountDown';

const { t } = useI18n();

const confetti = new Confetti();
const isConfettiRunning = ref(false);

const currentDate = ref(dayjs());
const birthdayDate = dayjs('1996-11-07');

const getNextBirthdayDate = (date: Dayjs) => {
    const today = dayjs().startOf('day');
    const birthday = date.startOf('day');
    const nextBirthday = birthday.set('year', today.year());
    return today.isAfter(nextBirthday) ? nextBirthday.add(1, 'year') : nextBirthday;
};

const nextBirthdayDateRef = ref(getNextBirthdayDate(birthdayDate));

const nextBirthdayDate = computed(() => nextBirthdayDateRef.value);
const isBirthday = computed(() => currentDate.value.isSame(nextBirthdayDate.value, 'day'));

const timeRemaining = computed(() => {
    const durationRemaining = dayjs.duration(nextBirthdayDate.value.diff(currentDate.value));
    return durationRemaining.asMilliseconds() > 0 ? durationRemaining : dayjs.duration(0);
});

const days = computed(() => Math.floor(timeRemaining.value.asDays()).toString().padStart(2, '0'));
const hours = computed(() => timeRemaining.value.format('HH'));
const minutes = computed(() => timeRemaining.value.format('mm'));
const seconds = computed(() => timeRemaining.value.format('ss'));

const startConfetti = () => {
    if (!isConfettiRunning.value) {
        confetti.start();
        isConfettiRunning.value = true;
    }
};

const stopConfetti = () => {
    if (isConfettiRunning.value) {
        confetti.stop();
        isConfettiRunning.value = false;
    }
};

onMounted(() => {
    setInterval(() => {
        currentDate.value = dayjs();
        if (currentDate.value.isAfter(nextBirthdayDate.value)) {
            nextBirthdayDateRef.value = getNextBirthdayDate(nextBirthdayDateRef.value as Dayjs);
            startConfetti();
        } else {
            stopConfetti();
        }
    }, 1000);
});
</script>

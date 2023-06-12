<template>
    <FullScreenBadge v-if="isConfetti" :text="t('itsMyBirthday')" />
    <CountDown v-else :timer="timer" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, computed, watch } from 'vue';
import { useNow } from '@vueuse/core';
import dayjs from 'dayjs';
import Confetti from 'vue-confetti/src/confetti';
import { FullScreenBadge } from '@/shared/ui/FullScreenBadge';
import { CountDown } from '@/shared/ui/CountDown';

enum DateFormat {
    ISO8601 = 'YYYY-mm-dd'
}

const { t } = useI18n();
const now = useNow();
const birthday = '1996-11-07';
const confetti = new Confetti();
const isConfetti = ref(false);
const birthdayThisYear = dayjs(birthday, DateFormat.ISO8601).year(dayjs().get('year'));
watch(now, () => {
    const isDateToday = dayjs(birthdayThisYear.format()).isToday();
    if (isDateToday && !isConfetti.value) {
        isConfetti.value = true;
        confetti.start();
    } else if (!isDateToday && isConfetti.value) {
        isConfetti.value = false;
        confetti.stop();
    }
});

const untilBirthday = computed(() => (birthdayThisYear.isBefore(now.value)
    ? birthdayThisYear.add(1, 'year')
    : birthdayThisYear));

const duration = computed(() => dayjs.duration(untilBirthday.value.diff(now.value)));
const timer = computed(() => ({
    days: String(Math.floor(duration.value.asDays())).length === 1
        ? `0${String(Math.floor(duration.value.asDays()))}`
        : String(Math.floor(duration.value.asDays())),
    hours: duration.value.format('HH'),
    minutes: duration.value.format('mm'),
    seconds: duration.value.format('ss'),
}));
</script>

<template>
    <div class="wrapper">
        <div id="countdown" class="countdown">
            <div class="countdown__title">
                {{ t('countdown') }}
            </div>
            <div class="countdown__timer timer">
                <div class="timer__item">
                    <div class="timer__num">{{ timer.days }}</div>
                    <div class="timer__text">{{ t('days', +timer.days) }}</div>
                </div>
                <div class="timer__item">
                    <div class="timer__num">{{ timer.hours }}</div>
                    <div class="timer__text">{{ t('hours', +timer.hours) }}</div>
                </div>
                <div class="timer__item">
                    <div class="timer__num">{{ timer.minutes }}</div>
                    <div class="timer__text">{{ t('minutes', +timer.minutes) }}</div>
                </div>
                <div class="timer__item">
                    <div class="timer__num">{{ timer.seconds }}</div>
                    <div class="timer__text">{{ t('seconds', +timer.seconds) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps<{ timer: { days: string, hours: string, minutes: string, seconds: string } }>();
const { t } = useI18n();
</script>

<style lang="scss" scoped>
@import "./CountDown";
</style>

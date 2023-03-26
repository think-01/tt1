<template>
  <ul>
    <li v-for="recordLine in recordLines" :key="recordLine">
      {{ recordLine }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import getRecord, {sport} from "./type-predicates"

const records : sport[] = [
  {
    __type: 'lifting',
    exercise: 'dead lift',
    weight: 80,
    reps: 8,
  },
  {
    __type: 'running',
    distance: 5,
    time: 30,
  },
  {
    __type: 'lifting',
    exercise: 'bench press',
    weight: 40,
    reps: 12,
  },
  {
    __type: 'climbing',
    style: 'boulder',
    grade: '6b'
  },
  {
    __type: 'climbing',
    style: 'lead climb',
    grade: '6c'
  }
]

const recordLines = records.map(sport => getRecord(sport))
</script>

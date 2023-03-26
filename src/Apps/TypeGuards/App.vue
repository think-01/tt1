<template>
  <ul>
    <li v-for="record in records" :key="record">
      {{ record }}
    </li>
  </ul>
</template>

<script setup lang="ts">
  import {Sport, getMyRecord} from './sports'

  const activities : Sport[] = [
    {
      exercise: 'dead lift',
      weight: 80,
      reps: 8
    },
    {
      distance: 5,
      time: 30
    },
    {
      exercise: 'bench press',
      weight: 40,
      reps: 12
    },
    {
      style: 'boulder',
      grade: '6b'
    },
    {
      style: 'lead climb',
      grade: '6c'
    }
  ]

  const records = activities.map(sport => getMyRecord(sport))
</script>

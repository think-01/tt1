<template>
  <ul>
    <li v-for="record in records" :key="record">
      {{ record }}
    </li>
  </ul>
</template>

<script setup lang="ts">
  import {Sport, getMyRecord} from './sports'
  import {makeLifting} from "@/Apps/TypePredicates/lifting";
  import {makeRunning} from "@/Apps/TypePredicates/running";
  import {makeClimbing} from "@/Apps/TypePredicates/climbing";

  const activities : Sport[] = [
      makeLifting('dead lift', 80, 8),
      makeRunning(5, 30),
      makeLifting('bench press', 40, 12),
      makeClimbing('boulder', '6b'),
      makeClimbing('lead climb', '6c')
  ]

  const records = activities.map(sport => getMyRecord(sport))
</script>

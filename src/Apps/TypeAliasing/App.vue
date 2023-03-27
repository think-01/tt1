<template>
  <div>
  <h4>Here are my sport achievements</h4>
  <p v-for="achievement in achievements">{{achievement}}</p>
  </div>
</template>

<script setup lang="ts">
  import { getAchievement } from "./sports";

  type lifting = { exercise: string, weight: number, reps: number }
  type running = { distance: number, time: number }
  type climbing = { style: string, grade: string }

  type sport = lifting | running | climbing

  const sportsData: sport[] = []
  sportsData.push({ exercise: "dead lift", weight: 115, reps: 8})
  sportsData.push({ exercise: "bench press", weight: 75, reps: 10})
  sportsData.push({ distance: 5, time: 30 })
  sportsData.push({ style: "boulder", grade: "7a" })
  sportsData.push({ style: "lead climb", grade: "6c" })

  //sportsData.push({ style: "do nothing", grade: "but I'm still happy" })

  const achievements = sportsData.map(getAchievement)
</script>

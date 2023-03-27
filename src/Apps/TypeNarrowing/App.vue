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
  //type climbing = { style: "boulder" | "lead climb", grade: string }
  //type climbing = { style: "boulder" | "lead climb", grade: "5a" | "5b" | "5c" | "6a" | "6b" | "6c" | "7a" | "7b" | "7c" | "8a" | "8b" | "8c" | "9a" | "9b" | "9c" }

  type sport = lifting | running | climbing

  const sportsData: sport[] = []
  sportsData.push({ exercise: "dead lift", weight: 115, reps: 8})
  sportsData.push({ exercise: "bench press", weight: 75, reps: 10})
  sportsData.push({ distance: 5, time: 30 })
  sportsData.push({ style: "boulder", grade: "7a" })
  sportsData.push({ style: "lead climb", grade: "6c" })

  sportsData.push({ style: "do nothing", grade: "but I'm still happy" })
  //sportsData.push({ style: "boulder", grade: "only in my dreams" })

  const achievements = sportsData.map(getAchievement)
  //const achievements = [...sportsData, null].map(getAchievement)
</script>

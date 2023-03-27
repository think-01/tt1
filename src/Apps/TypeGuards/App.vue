<template>
  <div>
  <h4>Here are my sport achievements</h4>
  <p v-for="achievement in achievements">{{achievement}}</p>
  </div>
</template>

<script setup lang="ts">
  import {getAchievement} from "./sports";
  import {climbing, sport} from "./types";

  const sportsData: sport[] = []
  sportsData.push({ exercise: "dead lift", weight: 115, reps: 8})
  sportsData.push({ exercise: "bench press", weight: 75, reps: 10})
  sportsData.push({ distance: 5, time: 30 })
  sportsData.push({ style: "boulder", grade: "7a" })
  sportsData.push({ style: "lead climb", grade: "6c" })

  const achievements = [...sportsData].map(getAchievement)
  //const achievements = [...sportsData, null].map(getAchievement)
  //const achievements = [...sportsData, "whatever"].map(getAchievement)
  //const achievements = [...sportsData, { distance: 12.5, time: 74 }].map(getAchievement)
  //const achievements = [...sportsData, { style: "lead climb", grade: "6c" }].map(getAchievement)
  //const achievements = [...sportsData, { style: "lead climb", grade: "6c" } as climbing].map(getAchievement)
  //const achievements = [...sportsData, { style: "do nothing", grade: "but I'm still happy" } as climbing].map(getAchievement)
</script>

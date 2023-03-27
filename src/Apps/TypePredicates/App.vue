<template>
  <div>
  <h4>Here are my sport achievements</h4>
  <p v-for="achievement in achievements">{{achievement}}</p>
  </div>
</template>

<script setup lang="ts">
  import { getAchievement, Sport } from "./sports";

  const sportsData: Sport[] = []
  sportsData.push({ distance: 5, time: 30 })
  sportsData.push({ distance: 250, time: 7,style: "mountain" })
  sportsData.push({ style: "lead climb", grade: "6c" })

  const achievements = sportsData.map(getAchievement)
</script>

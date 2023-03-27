<template>
  <div>
  <h4>Here are my sport achievements</h4>
  <p v-for="achievement in achievements">{{achievement.text}}</p>
  </div>
</template>

<script setup lang="ts">
  import { getAchievementClass } from "./sports";
  import {sport} from "./types";

  const sportsData: sport[] = []
  sportsData.push({ distance: 5, time: 30 })
  sportsData.push({ distance: 250, time: 7,style: "mountain" })
  sportsData.push({ style: "lead climb", grade: "6c" })

  const achievements = sportsData.map(getAchievementClass)
</script>

<template>
  <div>
  <h4>Here are my sport achievements</h4>
  <p v-for="achievement in achievements">{{achievement}}</p>
  </div>
</template>

<script setup lang="ts">
  import {climbing, cycling, running} from "./types";
  import {Repository} from "./repository";
  import {getAchievement} from "./sports";

  const climbingAchievements = new Repository<climbing>()
  climbingAchievements.push({ style: "lead climb", grade: "6c" })
  climbingAchievements.push({ style: "boulder", grade: "7a" })

  const runningAchievements = new Repository<running>()
  runningAchievements.push({ distance: 5, time: 30 })
  runningAchievements.push({ distance: 12.5, time: 74 })

  const cyclingAchievements = new Repository<cycling>()
  cyclingAchievements.push({ distance: 250, time: 7, style: "mountain" })

  const achievements = [...climbingAchievements.items,
                        ...runningAchievements.items,
                        ...cyclingAchievements.items].map(getAchievement)
</script>

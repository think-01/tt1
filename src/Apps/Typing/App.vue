<template>
  <div>
  <h4>Here are my sport achievements</h4>
  <p v-for="achievement in achievements">{{achievement}}</p>
  </div>
</template>

<script setup lang="ts">
  import { getAchievement } from "./sports";

  type Sport = any
  //type Sport = { }
  //type Sport = { exercise: string }
  //type Sport = { exercise: string, weight: number, reps: number }
  //type Sport = { exercise: string, weight: number, reps: number, distance: number }
  //type Sport = { exercise: string, weight: number, reps: number, distance?: number }
  //type Sport = { exercise: string, weight: number, reps: number, distance?: number, time?: number }
  //type Sport = { exercise?: string, weight?: number, reps?: number, distance?: number, time?: number }
  //type Sport = { exercise: string, weight: number, reps: number } | { distance: number, time: number }
  //type Sport = { exercise: string, weight: number, reps: number } | { distance: number, time: number } | { style: string, grade: string }

  const sportsData: Sport[] = []
  sportsData.push({ exercise: "dead lift", weight: 115, reps: 8})
  sportsData.push({ exercise: "bench press", weight: 75, reps: 10})
  sportsData.push({ distance: 5, time: 30 })
  sportsData.push({ style: "boulder", grade: "7a" })
  sportsData.push({ style: "lead climb", grade: "6c" })

  sportsData.push({ sport: "football", year: 2019, place: 1 })
  sportsData.push({ exercise: "russian twist", reps: 25 })
  sportsData.push({ style: "free dive", depth: 22 })
  sportsData.push(null)

  const achievements = sportsData.map(getAchievement)
</script>

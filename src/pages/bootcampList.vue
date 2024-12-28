<script setup>
import { ref } from "vue";

// courses 데이터 정의
const courses = ref([
  {
    title: "Java기반 백엔드 개발 & Cloud Docker 배포 과정 11기",
    category: "백엔드",
    status: "모집 중",
    cost: "무료",
    type: "오프라인",
    duration: "25.01.13 ~ 25.08.01",
    time: "월, 화, 수, 목, 금 / 9:00 ~ 18:00",
    details: ["Java", "Spring", "JPA", "Docker"],
    organizer: "중앙에이치티에이"
  },
  {
    title: "Python 기반 데이터 분석 과정",
    category: "데이터 분석",
    status: "모집 마감",
    cost: "유료",
    type: "온라인",
    duration: "24.11.01 ~ 25.05.01",
    time: "월, 수, 금 / 10:00 ~ 15:00",
    details: ["Pandas", "Numpy", "Matplotlib"],
    organizer: "데이터랩스"
  }
]);
</script>



<template>
    <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <!-- 테이블 헤더 -->
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">과정</th>
            <th scope="col" class="px-6 py-3">카테고리</th>
            <th scope="col" class="px-6 py-3">상태</th>
            <th scope="col" class="px-6 py-3">비용</th>
            <th scope="col" class="px-6 py-3">운영 형태</th>
            <th scope="col" class="px-6 py-3">기간</th>
            <th scope="col" class="px-6 py-3">시간</th>
            <th scope="col" class="px-6 py-3">특이사항</th>
            <th scope="col" class="px-6 py-3">운영사</th>
          </tr>
        </thead>
        <!-- 테이블 본문 -->
        <tbody>
          <tr v-for="(course, index) in courses" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ course.title }}
            </th>
            <td class="px-6 py-4">{{ course.category }}</td>
            <td class="px-6 py-4">{{ course.status }}</td>
            <td class="px-6 py-4">{{ course.cost }}</td>
            <td class="px-6 py-4">{{ course.type }}</td>
            <td class="px-6 py-4">{{ course.duration }}</td>
            <td class="px-6 py-4">{{ course.time }}</td>
            <td class="px-6 py-4">
              <ul class="list-disc list-inside">
                <li v-for="(detail, i) in course.details" :key="i">{{ detail }}</li>
              </ul>
            </td>
            <td class="px-6 py-4">{{ course.organizer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>
  </template>
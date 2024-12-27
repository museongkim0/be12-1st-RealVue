<template>
    <div class="attendance-management">
      <h1 class="page-title">출석 관리</h1>
  
      <!-- 카테고리 탭 -->
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: selectedTab === tab }"
          @click="selectTab(tab)"
        >
          {{ tab }}
        </button>
      </div>
  
      <!-- 전체 출석률 -->
      <div v-if="selectedTab === '전체'">
        <h2>전체 출석률</h2>
        <p>기간: {{ formatDate(startDate) }} ~ {{ formatDate(endDate) }}</p>
        <table class="custom-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>전체 출석률</th>
              <th>출석 상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id">
              <td>{{ student.name }}</td>
              <td>{{ student.attendanceRate }}%</td>
              <td>{{ student.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- 월별 출석률 -->
      <div v-if="selectedTab === '월별'">
        <h2>월별 출석률</h2>
        <label for="month">월 선택:</label>
        <select id="month" v-model="selectedMonth" @change="filterMonthlyAttendance">
          <option v-for="month in months" :key="month" :value="month">
            {{ month }}월
          </option>
        </select>
  
        <table class="custom-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>출석률</th>
              <th>출석 상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in filteredMonthlyAttendance" :key="student.id">
              <td>{{ student.name }}</td>
              <td>{{ student.attendanceRate }}%</td>
              <td>{{ student.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- 일별 출석여부 -->
      <div v-if="selectedTab === '일별'">
        <h2>일별 출석여부</h2>
        <label for="date">날짜 선택:</label>
        <input type="date" id="date" v-model="selectedDate" @change="filterDailyAttendance" />
  
        <table class="custom-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>출석 여부</th>
              <th>출석 상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in filteredDailyAttendance" :key="student.id">
              <td>{{ student.name }}</td>
              <td>{{ student.isPresent ? 'Y' : 'N' }}</td>
              <td>{{ student.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  
  export default {
    setup() {
      const startDate = new Date("2024-11-20");
      const endDate = new Date("2025-05-16");
  
      const tabs = ["전체", "월별", "일별"];
      const selectedTab = ref("전체");
  
      const students = ref([
        { id: 1, name: "김학생", attendanceRate: 85, status: "출석" },
        { id: 2, name: "이학생", attendanceRate: 90, status: "지각" },
        { id: 3, name: "박학생", attendanceRate: 75, status: "병가" },
      ]);
  
      const selectedMonth = ref(null);
      const months = computed(() => {
        const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();
        const monthList = [];
  
        for (let year = startYear; year <= endYear; year++) {
          const start = year === startYear ? startDate.getMonth() + 1 : 1;
          const end = year === endYear ? endDate.getMonth() + 1 : 12;
          for (let month = start; month <= end; month++) {
            monthList.push(`${year}.${month.toString().padStart(2, "0")}`);
          }
        }
        return monthList;
      });
  
      const selectedDate = ref(null);
  
      const filteredMonthlyAttendance = ref([]);
      const filteredDailyAttendance = ref([]);
  
      const filterMonthlyAttendance = () => {
        filteredMonthlyAttendance.value = students.value.map((student) => {
          return { ...student, attendanceRate: Math.random() * 100, status: student.status };
        });
      };
  
      const filterDailyAttendance = () => {
        filteredDailyAttendance.value = students.value.map((student) => {
          return { ...student, isPresent: Math.random() > 0.5, status: student.status };
        });
      };
  
      const selectTab = (tab) => {
        selectedTab.value = tab;
        if (tab === "월별") filterMonthlyAttendance();
        if (tab === "일별") filterDailyAttendance();
      };
  
      const formatDate = (date) => {
        return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date
          .getDate()
          .toString()
          .padStart(2, "0")}`;
      };
  
      return {
        tabs,
        selectedTab,
        students,
        startDate,
        endDate,
        months,
        selectedMonth,
        selectedDate,
        filteredMonthlyAttendance,
        filteredDailyAttendance,
        selectTab,
        filterMonthlyAttendance,
        filterDailyAttendance,
        formatDate,
      };
    },
  };
  </script>
  
  <style scoped>
  .attendance-management {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .page-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #343a40;
  }
  
  .tabs {
    display: flex;
    margin-bottom: 20px;
    gap: 10px;
  }
  
  .tabs button {
    flex: 1;
    padding: 12px;
    border: none;
    background-color: #e9ecef;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .tabs button.active {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
  }
  
  .tabs button:hover {
    background-color: #adb5bd;
  }
  
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .custom-table th,
  .custom-table td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #dee2e6;
    font-size: 14px;
  }
  
  .custom-table th {
    background-color: #f1f3f5;
    font-weight: bold;
    color: #495057;
  }
  
  .custom-table tbody tr:hover {
    background-color: #e9ecef;
  }
  
  label {
    font-size: 14px;
    font-weight: bold;
    color: #495057;
  }
  
  select,
  input[type="date"] {
    margin-left: 10px;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #ced4da;
    border-radius: 5px;
  }
  </style>
  
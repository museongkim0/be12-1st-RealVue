<template>
    <div class="attendance-page">
      <h1 class="page-title">출석 관리</h1>
  
      <!-- 필터 섹션 -->
      <div class="filter-section">
        <label for="view-mode">보기 방식:</label>
        <select v-model="viewMode" id="view-mode" class="view-mode-select">
          <option value="all">전체</option>
          <option value="monthly">월별</option>
          <option value="daily">일별</option>
        </select>
      </div>
  
      <!-- 캘린더 섹션 (월별/일별에서만 표시) -->
      <div v-if="viewMode !== 'all'" class="calendar-section">
        <h2 class="calendar-title">날짜 선택</h2>
        <vue-cal
          class="calendar"
          :disable-views="['year', 'week', 'day']"
          v-model="selectedDate"
          :events="calendarEvents"
          @cell-click="onDateClick"
        />
      </div>
  
      <!-- 출석 테이블 -->
      <div class="table-section">
        <h2 class="table-title">출석 목록</h2>
        <table class="custom-table">
          <thead>
            <tr>
              <th>학생 이름</th>
              <th>연락처</th>
              <th>출석 여부</th>
              <th>전체 출석률</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in filteredAttendance" :key="student.id">
              <td>{{ student.name }}</td>
              <td>{{ student.contact }}</td>
              <td>{{ student.attendance }}</td>
              <td>{{ student.attendanceRate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  import VueCal from "vue-cal";
  import "vue-cal/dist/vuecal.css";
  
  export default {
    components: {
      VueCal,
    },
    data() {
      return {
        viewMode: "all", // 전체, 월별, 일별
        selectedDate: new Date(),
        calendarEvents: [], // 캘린더에서 표시할 이벤트 (옵션)
        students: [
          {
            id: 1,
            name: "김학생",
            contact: "010-1234-5678",
            attendance: "Y",
            attendanceRate: "95%",
            dates: ["2024-12-24", "2024-12-23", "2024-12-22"],
          },
          {
            id: 2,
            name: "이학생",
            contact: "010-5678-1234",
            attendance: "N",
            attendanceRate: "80%",
            dates: ["2024-12-23", "2024-12-20"],
          },
        ],
      };
    },
    computed: {
      filteredAttendance() {
        if (this.viewMode === "all") {
          return this.students;
        } else if (this.viewMode === "monthly") {
          const selectedMonth = new Date(this.selectedDate).getMonth();
          return this.students.map((student) => ({
            ...student,
            attendance:
              student.dates.some(
                (date) => new Date(date).getMonth() === selectedMonth
              )
                ? "Y"
                : "N",
          }));
        } else if (this.viewMode === "daily") {
          const selectedDay = new Date(this.selectedDate).toDateString();
          return this.students.map((student) => ({
            ...student,
            attendance:
              student.dates.some(
                (date) => new Date(date).toDateString() === selectedDay
              )
                ? "Y"
                : "N",
          }));
        }
      },
    },
    methods: {
      onDateClick(date) {
        this.selectedDate = date;
      },
    },
  };
  </script>
  
  <style scoped>
  .attendance-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .page-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #444;
  }
  
  .filter-section {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .view-mode-select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .calendar-section {
    margin-bottom: 20px;
  }
  
  .calendar-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .custom-table th,
  .custom-table td {
    text-align: left;
    padding: 12px;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
  }
  
  .custom-table th {
    background-color: #f7f7f7;
    font-weight: bold;
  }
  
  .custom-table tr:hover {
    background-color: #f9f9f9;
  }
  </style>
  
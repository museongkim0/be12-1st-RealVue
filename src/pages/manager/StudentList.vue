<template>
    <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <div class="student-list-container">
      <h1 class="page-title">학생 관리</h1>

      <!-- 수강 신청한 학생 테이블 -->
      <div class="table-section">
        <h2 class="table-title">수강 신청한 학생</h2>
        <table class="custom-table">
          <thead>
            <tr>
              <th>학생 이름</th>
              <th>연락처</th>
              <th>당일 출석 여부</th>
              <th>전체 출석률</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in appliedStudents" :key="student.id" @click="openModal(student)">
              <td>{{ student.name }}</td>
              <td>{{ student.contact }}</td>
              <td>{{ student.attendanceToday }}</td>
              <td>{{ student.totalAttendance }}</td>
              <td>
                <button @click.stop="approveStudent(student)" class="approve-button">승인</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- 현재 수강 중인 학생 테이블 -->
      <div class="table-section">
        <h2 class="table-title">현재 수강 중인 학생</h2>
        <table class="custom-table">
          <thead>
            <tr>
              <th>학생 이름</th>
              <th>연락처</th>
              <th>당일 출석 여부</th>
              <th>전체 출석률</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in currentStudents" :key="student.id" @click="openModal(student)">
              <td>{{ student.name }}</td>
              <td>{{ student.contact }}</td>
              <td>{{ student.attendanceToday }}</td>
              <td>{{ student.totalAttendance }}</td>
              <td>
                <button @click.stop="expelStudent(student)" class="expel-button">제적 처리</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      
  
      <!-- 학생 상세 정보 모달 -->
      <div v-if="selectedStudent" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h3 class="modal-title">학생 상세 정보</h3>
          <p><strong>이름:</strong> {{ selectedStudent.name }}</p>
          <p><strong>연락처:</strong> {{ selectedStudent.contact }}</p>
          <p><strong>전체 출석률:</strong> {{ selectedStudent.totalAttendance }}</p>
          <p><strong>상세 설명:</strong> {{ selectedStudent.details }}</p>
          <button class="close-modal-button" @click="closeModal">닫기</button>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentStudents: [
          { id: 1, name: "김철수", contact: "010-1234-5678", attendanceToday: "Y", totalAttendance: "90%", details: "수업 참여율이 높습니다." },
          { id: 2, name: "박영희", contact: "010-5678-1234", attendanceToday: "N", totalAttendance: "75%", details: "지각이 잦습니다." },
        ],
        appliedStudents: [
          { id: 3, name: "이민호", contact: "010-9876-5432", attendanceToday: "N/A", totalAttendance: "N/A", details: "신규 수강 신청자입니다." },
        ],
        selectedStudent: null,
      };
    },
    methods: {
      openModal(student) {
        this.selectedStudent = student;
      },
      closeModal() {
        this.selectedStudent = null;
      },
      expelStudent(student) {
        alert(`${student.name} 학생을 제적 처리합니다.`);
      },
      approveStudent(student) {
        alert(`${student.name} 학생의 수강 신청을 승인합니다.`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* 공통 스타일 */
  .student-list-container {
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
  
  .table-section {
    margin-bottom: 40px;
  }
  
  .table-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #555;
  }
  
  /* 테이블 스타일 */
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .custom-table th, .custom-table td {
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
  
  .custom-table tr {
    cursor: pointer;
  }
  
  .expel-button, .approve-button {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
  
  .expel-button {
    background-color: #e74c3c;
  }
  
  .approve-button {
    background-color: #2ecc71;
  }
  
  .expel-button:hover {
    background-color: #c0392b;
  }
  
  .approve-button:hover {
    background-color: #27ae60;
  }
  
  /* 모달 스타일 */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .modal-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .close-modal-button {
    display: block;
    margin: 20px auto 0;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .close-modal-button:hover {
    background-color: #2980b9;
  }
  </style>
  
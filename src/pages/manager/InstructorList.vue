<template>
<div style="background-color: whitesmoke;"
class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <div class="instructor-list-container">
      <h1 class="page-title">강사 관리</h1>
  
      <!-- 강사 테이블 -->
      <div class="table-section">
        <div class="table-header">
          <h2 class="table-title">강사 목록</h2>
          <button class="add-button" @click="openRegisterModal">
            + 강사 등록
          </button>
        </div>
        <table class="custom-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>연락처</th>
              <th>담당중인 수업</th>
              <th>담당 반</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="instructor in instructors" :key="instructor.id" @click="openDetailsModal(instructor)">
              <td>{{ instructor.name }}</td>
              <td>{{ instructor.contact }}</td>
              <td>{{ instructor.currentClasses }}</td>
              <td>{{ instructor.assignedClasses }}</td>
              <td>
                <button @click.stop="deleteInstructor(instructor)" class="delete-button">강사 삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- 강사 상세 정보 모달 -->
      <div v-if="selectedInstructor" class="modal-overlay" @click="closeDetailsModal">
        <div class="modal-content" @click.stop>
          <h3 class="modal-title">강사 상세 정보</h3>
          <p><strong>이름:</strong> {{ selectedInstructor.name }}</p>
          <p><strong>연락처:</strong> {{ selectedInstructor.contact }}</p>
          <p><strong>담당중인 수업:</strong> {{ selectedInstructor.currentClasses }}</p>
          <p><strong>담당 반:</strong> {{ selectedInstructor.assignedClasses }}</p>
          <p><strong>추가 정보:</strong> {{ selectedInstructor.details }}</p>
          <button class="close-modal-button" @click="closeDetailsModal">닫기</button>
        </div>
      </div>
  
      <!-- 강사 등록 모달 -->
      <div v-if="showRegisterModal" class="modal-overlay" @click="closeRegisterModal">
        <div class="modal-content" @click.stop>
          <h3 class="modal-title">강사 등록</h3>
          <form @submit.prevent="registerInstructor">
            <div class="form-group">
              <label for="name">이름</label>
              <input v-model="newInstructor.name" id="name" type="text" required />
            </div>
            <div class="form-group">
              <label for="contact">연락처</label>
              <input v-model="newInstructor.contact" id="contact" type="text" required />
            </div>
            <div class="form-group">
              <label for="classes">담당 수업</label>
              <input v-model="newInstructor.currentClasses" id="classes" type="text" required />
            </div>
            <div class="form-group">
              <label for="assigned-classes">담당 반</label>
              <input v-model="newInstructor.assignedClasses" id="assigned-classes" type="text" required />
            </div>
            <button type="submit" class="submit-button">등록</button>
            <button type="button" class="close-modal-button" @click="closeRegisterModal">취소</button>
          </form>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        instructors: [
          {
            id: 1,
            name: "이강사",
            contact: "010-1234-5678",
            currentClasses: "프로그래밍 기초",
            assignedClasses: "A반, B반",
            details: "프로그래밍 기초 수업 강사",
          },
          {
            id: 2,
            name: "박강사",
            contact: "010-5678-1234",
            currentClasses: "웹 개발 입문",
            assignedClasses: "C반",
            details: "웹 개발 입문 수업 강사",
          },
        ],
        selectedInstructor: null,
        showRegisterModal: false,
        newInstructor: {
          name: "",
          contact: "",
          currentClasses: "",
          assignedClasses: "",
        },
      };
    },
    methods: {
      openDetailsModal(instructor) {
        this.selectedInstructor = instructor;
      },
      closeDetailsModal() {
        this.selectedInstructor = null;
      },
      openRegisterModal() {
        this.showRegisterModal = true;
      },
      closeRegisterModal() {
        this.showRegisterModal = false;
      },
      registerInstructor() {
        this.instructors.push({
          ...this.newInstructor,
          id: Date.now(),
          details: "새로 등록된 강사",
        });
        this.newInstructor = { name: "", contact: "", currentClasses: "", assignedClasses: "" };
        this.closeRegisterModal();
      },
      deleteInstructor(instructor) {
        this.instructors = this.instructors.filter((i) => i.id !== instructor.id);
        alert(`${instructor.name} 강사를 삭제했습니다.`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* 기존 스타일 재사용 */
  .instructor-list-container {
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
  
  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .table-title {
    font-size: 20px;
    font-weight: bold;
    color: #555;
  }
  
  .add-button {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .add-button:hover {
    background-color: #2980b9;
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
  
  .custom-table tr {
    cursor: pointer;
  }
  
  .delete-button {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    background-color: #e74c3c;
    cursor: pointer;
  }
  
  .delete-button:hover {
    background-color: #c0392b;
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
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .submit-button {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .submit-button:hover {
    background-color: #2980b9;
  }
  
  .close-modal-button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 14px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .close-modal-button:hover {
    background-color: #c0392b;
  }
  </style>
  
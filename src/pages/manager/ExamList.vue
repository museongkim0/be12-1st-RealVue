<script setup>
import { ref } from 'vue';

const examData = ref([
  { id: 1, subject: "수학", date: "2024-12-30", participants: 26, total: 30 },
  { id: 2, subject: "영어", date: "2024-12-29", participants: 25, total: 30 },
  { id: 3, subject: "과학", date: "2024-12-28", participants: 28, total: 30 },
  { id: 4, subject: "역사", date: "2024-12-27", participants: 20, total: 30 },
  { id: 5, subject: "음악", date: "2024-12-26", participants: 18, total: 30 },
]);

const showAddExamForm = ref(false);
const newExam = ref({
  id: null,
  subject: "",
  date: "",
  participants: 0,
  total: 30,
});

const addExam = () => {
  if (!newExam.value.subject || !newExam.value.date) {
    alert("모든 필드를 입력하세요.");
    return;
  }
  newExam.value.id = examData.value.length + 1; // ID 자동 증가
  examData.value.push({ ...newExam.value });
  resetForm();
  showAddExamForm.value = false;
};

const resetForm = () => {
  newExam.value = { id: null, subject: "", date: "", participants: 0, total: 30 };
};
</script>

<template>
  <div class="container">
    <div class="exam-list-header">
      <h1>전체 시험 리스트</h1>
      <button class="add-button" @click="showAddExamForm = true">시험 추가</button>
    </div>
    <div class="exam-card-grid">
      <div v-for="exam in examData" :key="exam.id" class="exam-card">
        <div class="exam-header">
          <h3 class="exam-subject">{{ exam.subject }}</h3>
          <p class="exam-date">시험 날짜: {{ exam.date }}</p>
        </div>
        <div class="exam-body">
          <p class="exam-participants">
            참여 인원: {{ exam.participants }} / {{ exam.total }}
          </p>
          <progress
            class="exam-progress"
            :value="exam.participants"
            :max="exam.total"
          ></progress>
        </div>
        <div class="exam-footer">
          <router-link to="/manager/examDetails">
            <button class="exam-button">상세보기</button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 시험 추가 폼 -->
    <div v-if="showAddExamForm" class="add-exam-form">
      <h2>새 시험 추가</h2>
      <div class="form-group">
        <label for="subject">과목</label>
        <input id="subject" v-model="newExam.subject" type="text" placeholder="시험 과목" />
      </div>
      <div class="form-group">
        <label for="date">날짜</label>
        <input id="date" v-model="newExam.date" type="date" />
      </div>
      <div class="form-actions">
        <button class="submit-button" @click="addExam">추가</button>
        <button class="cancel-button" @click="showAddExamForm = false">취소</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.exam-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.add-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.add-button:hover {
  background-color: #45a049;
}

/* 시험 추가 폼 */
.add-exam-form {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.add-exam-form h2 {
  margin-bottom: 20px;
  font-size: 18px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.submit-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.submit-button:hover {
  background-color: #45a049;
}

.cancel-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.cancel-button:hover {
  background-color: #e53935;
}

.exam-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

/* 시험 카드 */
.exam-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.exam-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 시험 카드 헤더 */
.exam-header {
  padding: 16px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #eee;
}

.exam-subject {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.exam-date {
  font-size: 14px;
  color: #666;
}

/* 시험 카드 본문 */
.exam-body {
  padding: 16px;
}

.exam-participants {
  font-size: 16px;
  color: #444;
  margin-bottom: 8px;
}

.exam-progress {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: #e0e0e0;
  appearance: none;
  overflow: hidden;
}

.exam-progress::-webkit-progress-bar {
  background-color: #e0e0e0;
  border-radius: 4px;
}

.exam-progress::-webkit-progress-value {
  background-color: #4caf50;
  border-radius: 4px;
}

/* 시험 카드 푸터 */
.exam-footer {
  padding: 16px;
  background-color: #f7f7f7;
  text-align: center;
}

.exam-button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.exam-button:hover {
  background-color: #45a049;
}
</style>


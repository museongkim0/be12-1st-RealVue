<template>
    <section class="p-6 xl:max-w-6xl xl:mx-auto">
      <header class="mb-6 flex items-center justify-between">
        <div class="flex items-center">
          <div class="icon bg-white text-black rounded-full w-12 h-12 flex justify-center items-center mr-3">
            <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path d="..." stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h1 class="text-4xl">질의응답답게시판</h1>
        </div>
        <button class="btn-primary">글쓰기</button>
      </header>
  
      <div class="search-bar flex justify-end mb-6">
        <div class="relative w-64">
          <svg class="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path d="..." stroke="currentColor" stroke-width="2"/>
          </svg>
          <input type="text" class="pl-10 w-full border rounded" placeholder="Search..." />
        </div>
        <button class="btn-secondary ml-3">검색</button>
      </div>
  
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" :key="post.id">
            <td>{{ index + 1 }}</td>
            <td>{{ post.name }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.Creationdate }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script setup>
import {ref} from 'vue';

const posts = ref([
    { id:1, name: '김유진', title: 'vscode 커밋하는는', Creationdate: '2024-12-26'},
    { id:2, name: '김무성', title: 'db?', Creationdate: '2024-12-06'},
    { id:3, name: '오건하', title: 'JS와 Java' , Creationdate: '2024-11-25'},
    { id:4, name: '이우진', title: 'Java가 뭐에요요', Creationdate: '2024-11-02'},
    { id:5, name: '김정엽', title: 'vue가 뭐에요?', Creationdate: '2024-10-20'},
    { id:6, name: '심강사', title: '자유일까?', Creationdate: '2024-10-22'},
    
]);
</script>

  <style scoped>
  .btn-primary {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  .btn-secondary {
    padding: 10px 20px;
    background-color: gray;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  </style>
  
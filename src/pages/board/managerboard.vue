<template>
    <section class="p-6 xl:max-w-6xl xl:mx-auto">
      <header class="mb-6 flex items-center justify-between">
        <div class="flex items-center">
          <div class="icon bg-white text-black rounded-full w-12 h-12 flex justify-center items-center mr-3">
            <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path d="..." stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h1 class="text-4xl">게시판</h1>
        </div>
        <button class="btn-primary">글쓰기</button>
      </header>
  
      <div class="search-bar flex justify-end mb-6">
        <div class="relative w-64">
          <svg class="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path d="..." stroke="currentColor" stroke-width="2"/>
          </svg>
          <input
            type="text"
            v-model="searchQuery"
            class="pl-10 w-full border rounded"
            placeholder="Search..."
          />
        </div>
        <button @click="filterPosts" class="btn-secondary ml-3">검색</button>
      </div>
  
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>제목</th>
            <th>카테고리</th>
            <th>작성일</th>
            <th>삭제</th> <!-- 삭제 버튼을 위한 열 추가 -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in filteredPosts" :key="post.id">
            <td>{{ index + 1 }}</td>
            <td>{{ post.name }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.category }}</td>
            <td>{{ post.Creationdate }}</td>
            <!-- 삭제 버튼 추가 -->
            <td class="before:hidden lg:w-1 whitespace-nowrap">
              <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                <button
                  @click="deletePost(post.id)" 
                  class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 p-1 mr-3 last:mr-0 mb-3"
                  type="button">
                  <span class="inline-flex justify-center items-center w-6 h-6">
                    <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                      <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const posts = ref([
    { id: 1, name: '김유진', title: '하기...싫은...', category: '자유', Creationdate: '2024-12-26' },
    { id: 2, name: '김무성', title: '자유', category: '자유', Creationdate: '2024-12-06' },
    { id: 3, name: '오건하', title: 'D-10', category: '자유', Creationdate: '2024-11-25' },
    { id: 4, name: '이우진', title: '정신이이', category: '자유', Creationdate: '2024-11-02' },
    { id: 5, name: '김정엽', title: '자유다!', category: '자유', Creationdate: '2024-10-20' },
    { id: 6, name: '심강사', title: '자유일까?', category: '공지사항', Creationdate: '2024-10-22' },
  ]);
  
  const searchQuery = ref(''); // 검색어 상태
  
  // 게시물 필터링 함수
  const filteredPosts = computed(() => {
    if (!searchQuery.value) return posts.value;
    return posts.value.filter(post => 
      post.title.includes(searchQuery.value) || post.name.includes(searchQuery.value)
    );
  });
  
  // 게시물 삭제 함수
  const deletePost = (id) => {
    posts.value = posts.value.filter(post => post.id !== id);
  };
  
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
   
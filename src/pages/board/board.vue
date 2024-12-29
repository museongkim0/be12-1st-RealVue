<script setup></script>
<template>
     <section class="p-6 xl:max-w-6xl xl:mx-auto">
          <section class="mb-6 flex items-center justify-between">
            <div class="flex items-center justify-start"><span
                class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/>
                </svg>
                
                </span>
              <h1 class="text-3xl leading-tight">게시판

              </h1>
            
            </div>
            
          </section>
          <div style="display: flex; justify-content: flex-end; align-items: center; position: relative; width: 100%; padding-right: 20px;">
            <!-- 검색 입력 필드 -->
            <div style="position: relative; flex: 1; max-width: 300px;">
              <!-- SVG 아이콘 -->
              <svg style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%); width: 20px; height: 20px; fill: gray;" 
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>
              </svg>
              <!-- 입력 필드 -->
              <input 
                type="text" 
                placeholder="Search..."
                style="width: 100%; padding: 10px 10px 10px 40px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
            </div>
            
            <!-- 글쓰기 버튼 -->
            <button style="padding: 10px 20px; background-color: #007BFF; color: white; border-radius: 5px; border: none; cursor: pointer; margin-left: 10px;">
              글쓰기
            </button>
          </div>
     </section>
</template>
<style scoped></style>
<template>
  <div class="min-h-screen flex flex-col">
    <!-- 头部 -->
    <header class="text-black py-2">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">{{ $t("welcome") }}</h1>
        <nav>
          <button
            @click="changeLanguage('en')"
            class="mr-2 hover:text-blue-200 transition-colors"
            :class="{ 'font-bold': currentLanguage === 'en' }"
          >
            English
          </button>
          <button
            @click="changeLanguage('zh')"
            class="hover:text-blue-200 transition-colors"
            :class="{ 'font-bold': currentLanguage === 'zh' }"
          >
            中文
          </button>
        </nav>
      </div>
    </header>

    <!-- 内容区 -->
    <main class="flex-grow">
      <!-- banner -->
      <section class="w-full h-[600px] bg-cyan-300"></section>

      <!-- 海晟logo -->
      <section class="h-[60px] bg-blue-600">
        <h2 class="text-3xl font-bold mb-4">{{ $t("about") }}</h2>
        <p class="text-gray-700 text-base md:text-lg">
          <!-- {{ $t('description') }} -->
        </p>
      </section>

      <!-- 成品 -->
      <section class="mb-8">
        <div
          class="p-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="service in services"
            :key="service.title"
            v-animate-on-scroll="{
              animation: 'fadeInUp',
              delay: '0.25s',
              duration: '1s',
            }"
            class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="imgg grid aspect-[16/9] bg-slate-700 animate-pulse"></div>
            <div class="p-3">
              <h3 class="text-xl font-semibold mb-2">
                {{ $t(service.title) }}
              </h3>
              <p class="text-gray-600">{{ $t(service.description) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 配件 -->
      <!-- <section class="mb-8">
        <div
          class="p-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="service in services"
            :key="service.title"
            v-animate-on-scroll="{ animation: 'fadeInUp', delay: '0.5s', duration: '1s' }"
            class="bg-white h-[300px] lg:h-[340px] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 class="text-xl font-semibold mb-2">{{ $t(service.title) }}</h3>
            <p class="text-gray-600">{{ $t(service.description) }}</p>
          </div>
        </div>
      </section> -->

      <!-- 公司简介 -->
      <section class="min-h-[400px] bg-theme-gradient">
        <p class="text-base md:text-lg">
          {{ "宁波鼎发塑料机械有限公司" }}
        </p>
      </section>

      <!-- 合作案例 -->
      <section class="pt-12">
        <div class="cooperate h-[74px]"></div>
        <div class="h-[560px] flex p-5">
          <div class="flex-1">
            <div
              v-for="(item, index) in cooperateList"
              :key="index"
              style="transition: all 0.3s ease-in-out;"
              class="h-1/3 p-6 border-b-[1px] border-white animate"
              :class="{ 'bg-[#E60012] text-white': activeCooperateIndex === index }"
              @click="chooseCooperateItem(index)"
            >
              123
            </div>
          </div>
          <div class="flex-1"></div>
        </div>
      </section>
    </main>

    <!-- 底部 -->
    <footer
      class="bg-theme-gradient text-white py-4 h-[70px] flex items-center"
      style="border-top: 5px #e60012 solid"
    >
      <div
        class="container mx-auto px-4 text-center text-[12px] text-[#ababab]"
      >
        <span class="">
          Copyright © 2023-2024 宁波鼎发塑料机械有限公司 版权所有 |
          企业官网：http://www.dingfasuji.com | 备案号：</span
        >
        <a target="_blank" href="https://beian.miit.gov.cn/" rel="nofollow"
          >浙ICP备2025150334号</a
        >
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

// 使用 vue-i18n
const { locale, t } = useI18n();

// 当前语言
const currentLanguage = computed(() => locale.value);

// 切换语言
const changeLanguage = (lang) => {
  locale.value = lang;
};

// 表单数据
const form = ref({
  name: "",
  email: "",
  message: "",
});

// 提交表单
const handleSubmit = () => {
  alert(t("submitSuccess"));
  console.log("Form Data:", form.value);
  form.value = { name: "", email: "", message: "" }; // 清空表单
};

// 服务列表
const services = [
  { title: "service1", description: "service1Description" },
  { title: "service2", description: "service2Description" },
  { title: "service3", description: "service3Description" },
  { title: "service1", description: "service1Description" },
  { title: "service2", description: "service2Description" },
  { title: "service3", description: "service3Description" },
];

const activeCooperateIndex = ref(0);
const cooperateList = [
  { title: "service1", description: "service1Description" },
  { title: "service1", description: "service1Description" },
  { title: "service1", description: "service1Description" },
]
const chooseCooperateItem = (index) => {
  activeCooperateIndex.value = index;
};
</script>

<style scoped>
.cooperate {
  position: relative;
}
.cooperate::after {
  content: "";
  width: 40px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0;
  margin-left: -20px;
  left: 50%;
  border-radius: 3px;
}
</style>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- 头部 -->
    <header class="bg-blue-600 text-white py-4">
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
            v-animate-on-scroll="{ animation: 'fadeInUp', delay: '0.25s', duration: '1s' }"
            class="bg-white h-[300px] lg:h-[340px] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 class="text-xl font-semibold mb-2">{{ $t(service.title) }}</h3>
            <p class="text-gray-600">{{ $t(service.description) }}</p>
          </div>
        </div>
      </section>

      <!-- 配件 -->
      <section class="mb-8">
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
      </section>

      <!-- 公司简介 -->
      <section>
        <h2 class="text-3xl font-bold mb-4">{{ $t("contact") }}</h2>
        <p class="text-gray-700 text-base md:text-lg">
          <!-- {{ $t('description') }} -->
        </p>
      </section>

      <!-- 合作案例 -->
      <section>
        <h2 class="text-3xl font-bold mb-4">{{ $t("contact") }}</h2>
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
</script>

<style scoped>
/* 自定义样式 */
</style>

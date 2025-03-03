<template>
  <div class="min-h-screen flex flex-col">
    <!-- 头部 -->
    <header class="text-black py-2">
      <div class="container px-4 flex justify-between items-center">
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
      <section class="w-full h-[600px] bg-theme-gradient"></section>
      <!-- 海晟logo -->
      <section
        class="h-[90px] mt-[48px] logo-bg flex flex-col items-center justify-center"
        :style="{ background: `url(${imagePath}) no-repeat center` }"
      >
        <h2 class="text-3xl mb-2" style="font-family: SimHei">{{ "海·晟" }}</h2>
        <p class="text-gray-700 text-base md:text-lg">
          {{ "HAI SHENG" }}
        </p>
        <div class="w-9 h-[5px] bg-[#e60012] mt-3 rounded-full"></div>
      </section>

      <!-- 成品 -->
      <section class="mb-8 border-t-2 mt-4 pt-4">
        <img
          class="pl-[20px] pr-[20px] md:pl-[60px] md:pr-[60px]"
          src="../assets/icon/wenzi.png"
          alt=""
        />
        <div
          class="pl-[20px] pr-[20px] md:pl-[60px] md:pr-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="(service, index) in services"
            :key="service.title + index"
            v-animate-on-scroll="{
              animation: 'fadeInUp',
              delay: '0.25s',
              duration: `${0.5 + index * 0.3}s`,
            }"
            class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="imgg grid aspect-[16/9] bg-slate-700 animate-pulse"
            ></div>
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
      <section
        class="max-h-[450px] bg-theme-gradient flex flex-col items-center pt-[48px]"
      >
        <p
          class="text-base md:text-[32px] text-white font-bold"
          v-animate-on-scroll="{
            animation: 'fadeInDown',
            delay: '0.25s',
            duration: `1s`,
          }"
        >
          {{ "宁波鼎发塑料机械有限公司" }}
        </p>
        <p
          class="text-base md:text-[16px] text-white mt-3"
          v-animate-on-scroll="{
            animation: 'fadeInUp',
            delay: '0.5s',
            duration: `1s`,
          }"
        >
          {{ "您值得信赖的注塑机制造商。" }}
        </p>
        <div
          class="w-9 h-[5px] bg-[#fff] mt-3 rounded-full mb-2"
          v-animate-on-scroll="{
            animation: 'fadeInUp',
            delay: '0.5s',
            duration: `1s`,
          }"
        ></div>
        <div
          class="w-[80%] max-w-[960px] text-white text-[14px] leading-loose overflow-auto mb-8"
          v-animate-on-scroll="{
            animation: 'fadeInUp',
            delay: '0.5s',
            duration: `1.25s`,
          }"
        >
          <p class="indent-8">
            宁波东钱湖旅游度假区鼎发塑料机械有限公司
            (曾用名：宁波市江东鼎发塑料机械有限公司)
            ，成立于2004年，位于浙江省宁波市，是一家专注于注塑机研发、生产、销售及售后服务的高新技术企业。自成立以来，我们始终秉持“创新引领、品质至上、服务为本”的经营理念，致力于为全球制造业客户提供高效、节能、智能化的注塑解决方案
          </p>
          <p class="indent-8">
            我们深知不同行业客户对注塑机的多样化需求，因此公司精心打造了涵盖小型、中型和大型注塑机的丰富产品系列，锁模力范围从[X]吨到[X]吨不等，能够满足汽车零部件、家电外壳、电子元件、医疗器械、玩具等多种行业的注塑生产需求。无论是高精度的微小注塑件，还是大型复杂结构的产品，鼎发注塑机都能精准高效地完成生产任务。
          </p>
          <p class="indent-8">
            我们深知售后服务对于客户的重要性，因此建立了完善的售后服务体系。公司在全国范围内设立了多个售后服务中心和维修网点，拥有一支专业的售后服务团队，他们经过严格的技术培训，具备丰富的现场维修和保养经验。无论客户遇到任何技术问题或设备故障，我们的售后服务人员都能在最短时间内响应并提供解决方案，确保客户的生产活动不受影响。同时，我们还为客户提供定期的设备巡检、保养维护、技术培训等增值服务，帮助客户更好地使用和管理注塑机，延长设备使用寿命，降低生产成本。
          </p>
        </div>
      </section>

      <!-- 合作案例 -->
      <section class="pt-12">
        <div class="cooperate h-[74px]"></div>
        <div class="h-[560px] flex p-5">
          <div class="flex-1">
            <div
              v-for="(item, index) in cooperateList"
              :key="index"
              style="transition: all 0.3s ease-in-out"
              class="h-1/3 p-6 border-b-[1px] border-white animate"
              :class="{
                'bg-[#E60012] text-white': activeCooperateIndex === index,
              }"
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

const imagePath = new URL("../assets/icon/top.png", import.meta.url).href;

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
];
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

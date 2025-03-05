<template>
  <div class="min-h-screen flex flex-col">
    <!-- 头部 -->
    <header class="text-white py-2 fixed top-0 bg-slate-400 w-[100%] z-10">
      <div class="px-4 lg:px-8 flex justify-between items-center">
        <h1 class="sm: text-[12px] md:text-xl lg:text-2xl font-bold">
          {{ $t("welcome") }}
        </h1>
        <nav class="sm: text-[12px] md:[14px] lg:text-base">
          <button
            @click="changeLanguage('en')"
            class="mr-2 transition-colors"
            :class="{ 'font-bold text-[#4649fc]': currentLanguage === 'en' }"
          >
            English
          </button>
          <button
            @click="changeLanguage('zh')"
            class="transition-colors"
            :class="{ 'font-bold text-[#4649fc]': currentLanguage === 'zh' }"
          >
            中文
          </button>
        </nav>
      </div>
    </header>

    <!-- 内容区 -->
    <main class="flex-grow sm: mt-[34px] md:mt-[44px] lg:mt-[48px]">
      <!-- banner -->
      <section
        class="w-full bg-theme-gradient h-[250px] md:h-[320px] lg:h-[500px] xl:h-[600px]"
      >
        <div
          class="text-white flex flex-col items-center justify-center h-full"
        >
          <div
            v-animate-on-scroll="{
              animation: 'fadeInUp',
              delay: '0.25s',
              duration: `${1}s`,
            }"
          >
            <p
              class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-normal font-bold"
              :class="{
                'tracking-[1rem]': currentLanguage === 'zh',
              }"
            >
              <span v-if="currentLanguage === 'zh'"
                >智<font color="#ff0000">注</font>卓越</span
              >
              <span v-else-if="currentLanguage === 'en'"
                ><font color="#ff0000">Molding </font>Excellence</span
              >
            </p>
            <p
              class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl !leading-normal font-bold"
              :class="{
                'tracking-[1rem]': currentLanguage === 'zh',
              }"
            >
              <span v-if="currentLanguage === 'zh'"
                ><font color="#ff0000">塑</font>造未来</span
              >
              <span v-else-if="currentLanguage === 'en'"
                ><font color="#ff0000">Shaping </font>the Future</span
              >
            </p>
          </div>
          <p
            v-if="currentLanguage === 'zh'"
            class="text-xl lg:text-2xl leading-normal mt-4 lg:mt-8 lg:mb-4"
            v-animate-on-scroll="{
              animation: 'fadeInLeft',
              delay: '0.4s',
              duration: `${1}s`,
            }"
          >
            宁波鼎发塑料机械有限公司
          </p>
          <p
            class="text-sm lg:text-lg !leading-normal"
            :class="{
              'mt-8': currentLanguage === 'en',
            }"
            v-animate-on-scroll="{
              animation: 'fadeInUp',
              delay: '0.6s',
              duration: `${1}s`,
            }"
          >
            Ningbo Dingfa Plastic Machinery Co., Ltd.
          </p>
        </div>
      </section>

      <!-- 海晟logo -->
      <section
        class="h-[90px] mt-[48px] logo-bg flex flex-col items-center justify-center"
        :style="{ background: `url(${imagePath}) no-repeat center` }"
      >
        <h2 class="text-3xl mb-2" style="font-family: SimHei">
          {{ $t("haiSheng2") }}
        </h2>
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
            v-for="(machine, index) in machines"
            :key="machine.title + index"
            v-animate-on-scroll="{
              animation: 'fadeInUp',
              delay: '0.2s',
              duration: `${0.5 + index * 0.2}s`,
            }"
            class="machine-item bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            @mouseover="scaleImage('machine', index, $event)"
            @mouseout="resetImage('machine', index, $event)"
          >
            <div class="imgg grid aspect-[16/9] bg-slate-700 overflow-hidden">
              <ImageViewer
                style="transition: transform 0.5s ease"
                class="transform transition-transform duration-300 origin-center"
                :images="[machine.image]"
              />
              <!-- <el-image
                style="transition: transform 0.5s ease"
                :class="{ 'scale-110': machineIndex == index }"
                class="transform transition-transform duration-300 origin-center"
                :src="machine.image"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :preview-src-list="[machine.image]"
                show-progress
                :initial-index="0"
                fit="cover"
                :preview-teleported="true"
                lazy
              /> -->
            </div>
            <div class="p-3">
              <h3 class="text-xl font-semibold mb-2">
                {{ $t(machine.title) }}
              </h3>
              <p class="text-gray-600">{{ $t(machine.description) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 配件 -->
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
            v-for="(part, index) in parts"
            :key="part.title + index"
            v-animate-on-scroll="{
              animation: 'fadeInUp',
              delay: '0.2s',
              duration: `${0.5 + index * 0.2}s`,
            }"
            class="part-item bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            @mouseover="scaleImage('part', index, $event)"
            @mouseout="resetImage('part', index)"
          >
            <div class="imgg grid aspect-[16/9] bg-slate-700 overflow-hidden">
              <ImageViewer 
                style="transition: transform 0.5s ease"
                class="transform transition-transform duration-300 origin-center"
                :images="[part.image]" 
              />
              <!-- <el-image
                style="transition: transform 0.5s ease"
                :class="{ 'scale-110': partIndex == index }"
                class="transform transition-transform duration-300 origin-center"
                :src="part.image"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :preview-src-list="[part.image]"
                show-progress
                :initial-index="0"
                fit="cover"
                :preview-teleported="true"
                lazy
              /> -->
            </div>
            <div class="p-3">
              <h3 class="text-xl font-semibold mb-2">
                {{ $t(part.title) }}
              </h3>
              <p class="text-gray-600">{{ $t(part.description) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 公司简介 -->
      <section
        class="max-h-[450px] bg-theme-gradient flex flex-col items-center pt-[48px] relative overflow-visible"
      >
        <p
          class="max-w-[90%] text-2xl md:text-[32px] text-white font-bold text-center"
          v-animate-on-scroll="{
            animation: 'fadeInDown',
            delay: '0.25s',
            duration: `1s`,
          }"
        >
          {{ $t("companyName") }}
        </p>
        <p
          class="text-base md:text-[16px] text-white mt-3"
          v-animate-on-scroll="{
            animation: 'fadeInUp',
            delay: '0.5s',
            duration: `1s`,
          }"
        >
          {{ $t("introductionTip") }}
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
          class="w-[85%] max-w-[1080px] text-white text-[14px] leading-loose overflow-auto mb-16"
          v-animate-on-scroll="{
            animation: 'fadeInUp',
            delay: '0.5s',
            duration: `1.25s`,
          }"
        >
          <p class="indent-8">{{ $t("introduction1") }}</p>
          <p class="indent-8">{{ $t("introduction2") }}</p>
          <p class="indent-8">{{ $t("introduction3") }}</p>
        </div>
        <!-- 统计 -->
        <div
          class="about-bottom w-[90%] mt-[-70px] absolute bottom-[-6rem] sm:bottom-[-3rem] lg:bottom-[-5rem]"
          v-animate-on-scroll="{
            animation: 'fadeInUp',
            delay: '0.5s',
            duration: `.5s`,
          }"
        >
          <div
            class="about-warp bg-white ml-6 mr-6 rounded shadow-xl flex flex-wrap justify-center"
          >
            <div
              class="about-item flex-1 flex justify-center items-center flex-col min-w-[120px] h-[72px] lg:h-[120px] p-2"
              v-for="(item, index) in aboutList"
              :key="index"
              >
              <div class="about-num leading-none font-bold text-center">
                <span class="text-2xl lg:text-[42px] align-top text-[#E60012]"
                  >{{ item.value }}</span
                >
                <span class="text-sm lg:text-base align-top ml-1 lg:ml-2">{{
                  item.unit ? $t(item.unit) : item.unitNormal
                }}</span>
              </div>
              <div
                class="about-text text-sm lg:text-base mt-2 text-center"
                :class="{ '!text-[10px]': locale == 'en' }"
              >
                {{ $t(item.text) }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 合作案例 -->
      <section class="cooperate-box pt-28 lg:pt-36">
        <!-- <div class="cooperate h-[60px] lg:h-[94px] flex flex-col items-center">
          <div
            class="text-bg lg:text-[32px] font-bold"
            style="color: rgba(0, 0, 0, 0.1)"
            v-animate-on-scroll="{
              animation: 'fadeInUp',
              delay: '0.2s',
              duration: `${0.5}s`,
            }"
          >
            COOPERATION CASES
          </div>
          <div
            class="text text-xl text-[#E60012] lg:text-3xl"
            v-animate-on-scroll="{
              animation: 'fadeInUp',
              delay: '0.5s',
              duration: `${0.8}s`,
            }"
          >
            {{ $t("cooperateName") }}
          </div>
        </div>
        <div class="h-[560px] lg:flex p-5">
          <div class="flex-1 shadow-lg mb-4 lg:mb-0">
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
          <div
            class="h-[300px] sm:mt-4 lg:mt-0 lg:h-auto lg:flex-1 lg:pl-4 flex"
          >
            <div class="left w-[50%] flex flex-col h-[100%]">
              <div class="introduce1 h-[40%] bg-[#E60012]"></div>
              <div class="contain flex-1"></div>
            </div>
            <div class="right w-[50%] flex flex-col h-[100%]">
              <div class="contain flex-1"></div>
              <div class="introduce2 h-[40%] bg-[#bbb]"></div>
            </div>
          </div>
        </div> -->
      </section>
    </main>

    <!-- 侧边联系方式 -->
    <div
      class="content-box fixed right-0 top-[320px] !z-[1000] text-white"
      style="pointer-events: auto; position: fixed; right: 0; top: 320px;"
    >
      <ul>
        <li class="phone">+86-13105521811</li>
        <li class="email">651886930@qq.com</li>
        <li class="qr">
          <div class="text-black">{{ $t('weixinQR') }}</div>
          <ImageViewer 
            class="ml-[45px] w-[100px] h-[100px]"
            :images="[qrImg]" 
          />
          <!-- <img class="ml-[45px] w-[100px] h-[100px]" src="../assets/icon/boss_qr.png" alt="" /> -->
        </li>
        <li class="back-top" @click="scrollToTop()"></li>
      </ul>
    </div>

    <!-- 底部 -->
    <footer
      class="bg-theme-gradient text-white py-4 h-[70px] flex items-center"
      style="border-top: 5px #e60012 solid"
    >
      <div
        class="container mx-auto px-4 text-center text-[12px] text-[#ababab]"
      >
        <span>
          {{ $t("copyright") }} | {{ $t("web") }}：http://www.dingfasuji.com |
          {{ $t("recordNumber") }}：</span
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
// 设置默认语言为中文
locale.value = "zh";
const currentLanguage = computed(() => locale.value);

const imagePath = new URL("../assets/icon/top.png", import.meta.url).href;

// 切换语言
const changeLanguage = (lang) => {
  locale.value = lang;
};

const qrImg = new URL("../assets/icon/boss_qr.png", import.meta.url).href

// 表单数据
const form = ref({
  name: "",
  email: "",
  message: "",
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scaleImage = (type = "machine", index, event) => {
  if (event) {
    event.stopPropagation();
  }
  if (type === "machine") {
    machineIndex.value = index;
  } else if (type === "part") {
    partIndex.value = index;
  }
};
const resetImage = (type = "machine", index) => {
  if (type === "machine") {
    machineIndex.value = -1;
  } else if (type === "part") {
    partIndex.value = -1;
  }
};

// aboutList
const aboutList = [
  {
    value: "2004",
    unit: "year",
    text: "aboutText1",
  },
  {
    value: "20",
    unitNormal: "+",
    text: "aboutText2",
  },
  {
    value: "10",
    unitNormal: "+",
    text: "aboutText3",
  },
  {
    value: "10",
    unitNormal: "+",
    text: "aboutText4",
  },
]


let machineIndex = ref(0);
// 成品机列表
const machines = [
  {
    title: "service1",
    description: "service1Description",
    image: new URL("../assets/images/machine/machine1.webp", import.meta.url).href,
  },
  {
    title: "service2",
    description: "service2Description",
    image: new URL("../assets/images/machine/machine2.webp", import.meta.url).href,
  },
  {
    title: "service3",
    description: "service3Description",
    image: new URL("../assets/images/machine/machine3.webp", import.meta.url).href,
  },
  {
    title: "service1",
    description: "service1Description",
    image: new URL("../assets/images/machine/machine4.webp", import.meta.url).href,
  },
  {
    title: "service2",
    description: "service2Description",
    image: new URL("../assets/images/machine/machine5.webp", import.meta.url).href,
  },
  {
    title: "service3",
    description: "service3Description",
    image: new URL("../assets/images/machine/machine1.webp", import.meta.url).href,
  },
];

let partIndex = ref(0);
// 成品机列表
const parts = [
  {
    title: "service1",
    description: "service1Description",
    image: new URL("../assets/images/product/11.jpg", import.meta.url).href,
  },
  {
    title: "service2",
    description: "service2Description",
    image: new URL("../assets/images/product/22.jpg", import.meta.url).href,
  },
  {
    title: "service3",
    description: "service3Description",
    image: new URL("../assets/images/product/33.jpg", import.meta.url).href,
  },
  {
    title: "service1",
    description: "service1Description",
    image: new URL("../assets/images/product/44.jpg", import.meta.url).href,
  },
  {
    title: "service2",
    description: "service2Description",
    image: new URL("../assets/images/product/55.jpg", import.meta.url).href,
  },
  {
    title: "service3",
    description: "service3Description",
    image: new URL("../assets/images/product/66.jpg", import.meta.url).href,
  },
  {
    title: "service1",
    description: "service1Description",
    image: new URL("../assets/images/product/77.jpg", import.meta.url).href,
  },
  {
    title: "service2",
    description: "service2Description",
    image: new URL("../assets/images/product/88.jpg", import.meta.url).href,
  },
  {
    title: "service3",
    description: "service3Description",
    image: new URL("../assets/images/product/99.jpg", import.meta.url).href,
  },
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
.about-bottom {
  .about-item {
  }
  .about-text {
    /* 文字居中 字母换行 */
    text-align: center;
    word-break: break-all;
  }
}
.content-box {
  ul {
    width: 200px;
    li {
      background-color: #e60012;
      width: 200px;
      height: 40px;
      color: #fff;
      margin-bottom: 3px;
      transition: all 0.5s ease;
      overflow: hidden;
      font-size: 14px;
      line-height: 44px;
      border-radius: 3px;
      position: relative;
      z-index: 99;
      right: -160px;
      text-indent: 44px;
    }
    li:nth-child(1) {
      background: #489ef5 url(../assets/icon/fixCont1.png) no-repeat 0 -48px;
    }
    li:nth-child(2) {
      background: #fcee76 url(../assets/icon/fixCont1.png) no-repeat 0 -98px;
    }
    li:nth-child(3) {
      background: #23D96E url(../assets/icon/fixCont1.png) no-repeat 0 -144px;
    }
    li:nth-child(4) {
      background: #3a3a3a url(../assets/icon/fixCont1.png) no-repeat 0 0px;
    }
    li:hover:not(:nth-child(4)) {
      right: 0;
    }
    li:nth-child(3):hover {
      right: -20px;
      height: 156px;
    }
  }
}
.cooperate-box {
  .introduce1 {
    position: relative; /* 确保绝对定位元素相对于此容器 */
    overflow: visible; /* 确保超出部分可以显示 */
  }
  .introduce1::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1rem solid #e60012;
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .introduce2 {
    position: relative; /* 确保绝对定位元素相对于此容器 */
    overflow: visible; /* 确保超出部分可以显示 */
  }
  .introduce2::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid #bbb;
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

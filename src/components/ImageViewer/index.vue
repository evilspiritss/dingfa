<template>
    <!-- 图片容器 -->
    <div class="image-container" ref="viewerContainer">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        :data-original="img"
        loading="lazy"
        class="preview-image"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, watch } from "vue";
  import Viewer from "viewerjs";
  import "viewerjs/dist/viewer.css"; // 引入样式
  
  const props = defineProps({
    images: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({})
    }
  });
  
  const viewerContainer = ref(null);
  let viewerInstance = null;
  
  // 初始化 Viewer
  const initViewer = () => {
  if (viewerContainer.value) {
    try {
      viewerInstance = new Viewer(viewerContainer.value, {
        // 默认配置（可覆盖）
        toolbar: {
          zoomIn: 1,
          zoomOut: 1,
          oneToOne: 1,
          reset: 1,
          rotateLeft: 1,
          rotateRight: 1,
          flipHorizontal: 1,
          flipVertical: 1,
        },
        ...props.options, // 合并传入的配置
      });
      console.log('Viewer initialized successfully', viewerInstance);
    } catch (error) {
      console.error('Error initializing Viewer:', error);
    }
  }
};
  
  // 销毁 Viewer
  const destroyViewer = () => {
    if (viewerInstance) {
      viewerInstance.destroy();
      viewerInstance = null;
    }
  };
  
  // 监听图片变化，更新 Viewer
  watch(
    () => props.images,
    () => {
      destroyViewer();
      initViewer();
    }
  );
  
  // 生命周期
  onMounted(initViewer);
  onBeforeUnmount(destroyViewer);
  </script>
  
  <style scoped>
  .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .preview-image {
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
  }
  </style>
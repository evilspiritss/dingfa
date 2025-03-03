// src/directives/animateOnScroll.js
import 'animate.css';

export const animateOnScroll = {
  mounted(el, binding) {
    const { animation, delay, duration } = binding.value;

    // 初始隐藏元素
    el.style.opacity = 0;

    // 配置 Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 显示元素并触发动画
            el.style.opacity = 1;
            el.classList.add('animate__animated', `animate__${animation}`);

            // 设置动画延迟
            if (delay) {
              el.style.animationDelay = delay;
            }

            // 设置动画持续时间
            if (duration) {
              el.style.animationDuration = duration;
            }

            // 停止观察
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1, // 当元素 10% 进入视口时触发
        rootMargin: '0px 0px -50px 0px', // 提前触发动画
      }
    );

    // 开始观察元素
    observer.observe(el);
  },
};
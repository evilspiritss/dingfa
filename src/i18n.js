import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome to Dingfa Suji',
    about: 'About Us',
    services: 'Our Services',
    contact: 'Contact Us',
    description: 'We provide high-quality industrial solutions for your business.',
    contactDescription: 'Feel free to reach out to us for any inquiries.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Submit',
    rightsReserved: 'All rights reserved.',
    service1: 'Custom Solutions',
    service1Description: 'Tailored solutions to meet your specific needs.',
    service2: 'Technical Support',
    service2Description: '24/7 expert support for your operations.',
    service3: 'Innovative Products',
    service3Description: 'Cutting-edge products for modern industries.'
  },
  zh: {
    welcome: '欢迎访问鼎发塑机',
    about: '关于我们',
    services: '我们的服务',
    contact: '联系我们',
    description: '我们为您的业务提供高质量的工业解决方案。',
    contactDescription: '如有任何疑问，请随时联系我们。',
    name: '姓名',
    email: '邮箱',
    message: '留言',
    submit: '提交',
    rightsReserved: '版权所有。',
    service1: '定制解决方案',
    service1Description: '量身定制的解决方案，满足您的特定需求。',
    service2: '技术支持',
    service2Description: '为您的运营提供24/7专家支持。',
    service3: '创新产品',
    service3Description: '为现代工业提供尖端产品。'
  }
};

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

export default i18n;
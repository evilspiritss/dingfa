import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome: "Welcome to Dingfa Plastic Machinery",
    about: "About Us",
    services: "Our Services",
    contact: "Contact Us",
    description:
      "We provide high-quality industrial solutions for your business.",
    contactDescription: "Feel free to reach out to us for any inquiries.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Submit",
    rightsReserved: "All rights reserved.",
    service1: "Custom Solutions",
    service1Description: "Tailored solutions to meet your specific needs.",
    service2: "Technical Support",
    service2Description: "24/7 expert support for your operations.",
    service3: "Innovative Products",
    service3Description: "Cutting-edge products for modern industries.",
    haiSheng1: "Hai Sheng",
    haiSheng2: "HAI·SHENG",
    companyName: "Dingfa Plastic Machinery Co., Ltd.",
    introductionTip: "You can trust Dingfa Plastic Machinery",
    year: "Year",
    month: "Month",
    day: "Day",
    introduction1:
      'Ningbo Dongqian Lake Tourist Resort Dingfa Plastic Machinery Co., Ltd. (formerly known as Ningbo Jiangdong Dingfa Plastic Machinery Co., Ltd.), founded in 2004, is located in Ningbo, Zhejiang Province. It is a high-tech enterprise specializing in the research and development, production, sales, and after-sales service of injection molding machines. Since its establishment, we have always adhered to the business philosophy of "innovation leading, quality first, and service-oriented", committed to providing efficient, energy-saving, and intelligent injection molding solutions for global manufacturing customers',
    introduction2:
      "We are well aware of the diverse needs of customers in different industries for injection molding machines. Therefore, the company has carefully created a rich product line covering small, medium, and large injection molding machines, with clamping forces ranging from [X] tons to [X] tons, which can meet the injection molding production needs of various industries such as automotive parts, home appliance casings, electronic components, medical equipment, toys, etc. Whether it is high-precision micro injection molded parts or large and complex structured products, Dingfa injection molding machines can accurately and efficiently complete production tasks.",
    introduction3:
      "We are well aware of the importance of after-sales service for customers, so we have established a comprehensive after-sales service system. The company has established multiple after-sales service centers and maintenance outlets nationwide, with a professional after-sales service team that has undergone rigorous technical training and has rich experience in on-site repair and maintenance. Regardless of any technical issues or equipment malfunctions encountered by customers, our after-sales service personnel are able to respond and provide solutions in the shortest possible time, ensuring that customers' production activities are not affected. At the same time, we also provide value-added services such as regular equipment inspections, maintenance, and technical training to help customers better use and manage injection molding machines, extend equipment lifespan, and reduce production costs.",
    aboutText1: "Founded in 2004",
    aboutText2: "Self-developed for 20 years",
    aboutText3: "Market coverage 10+ countries",
    aboutText4: "Professional after-sales service team",
    cooperateName: "COOPERATION CASES",
    copyright: "Copyright © 2025-2099 Dingfa Plastic Machinery Co., Ltd. All Rights Reserved",
    web: "Web",
    recordNumber: "Record Number",
  },
  zh: {
    welcome: "欢迎访问鼎发塑料机械",
    about: "关于我们",
    services: "我们的服务",
    contact: "联系我们",
    description: "我们为您的业务提供高质量的工业解决方案。",
    contactDescription: "如有任何疑问，请随时联系我们。",
    name: "姓名",
    email: "邮箱",
    message: "留言",
    submit: "提交",
    rightsReserved: "版权所有。",
    service1: "定制解决方案",
    service1Description: "量身定制的解决方案，满足您的特定需求。",
    service2: "技术支持",
    service2Description: "为您的运营提供24/7专家支持。",
    service3: "创新产品",
    service3Description: "为现代工业提供尖端产品。",
    haiSheng1: "海晟",
    haiSheng2: "海·晟",
    companyName: "宁波鼎发塑料机械有限公司",
    introductionTip: "您值得信赖的注塑机制造商",
    year: "年",
    month: "月",
    day: "日",
    introduction1:
      "宁波东钱湖旅游度假区鼎发塑料机械有限公司(曾用名：宁波市江东鼎发塑料机械有限公司)，成立于2004年，位于浙江省宁波市，是一家专注于注塑机研发、生产、销售及售后服务的高新技术企业。自成立以来，我们始终秉持“创新引领、品质至上、服务为本”的经营理念，致力于为全球制造业客户提供高效、节能、智能化的注塑解决方案",
    introduction2:
      "我们深知不同行业客户对注塑机的多样化需求，因此公司精心打造了涵盖小型、中型和大型注塑机的丰富产品系列，锁模力范围从[X]吨到[X]吨不等，能够满足汽车零部件、家电外壳、电子元件、医疗器械、玩具等多种行业的注塑生产需求。无论是高精度的微小注塑件，还是大型复杂结构的产品，鼎发注塑机都能精准高效地完成生产任务。",
    introduction3:
      "我们深知售后服务对于客户的重要性，因此建立了完善的售后服务体系。公司在全国范围内设立了多个售后服务中心和维修网点，拥有一支专业的售后服务团队，他们经过严格的技术培训，具备丰富的现场维修和保养经验。无论客户遇到任何技术问题或设备故障，我们的售后服务人员都能在最短时间内响应并提供解决方案，确保客户的生产活动不受影响。同时，我们还为客户提供定期的设备巡检、保养维护、技术培训等增值服务，帮助客户更好地使用和管理注塑机，延长设备使用寿命，降低生产成本。",
    aboutText1: "成立于2004年",
    aboutText2: "自主研发20年",
    aboutText3: "市场覆盖10+国家",
    aboutText4: "专业的售后服务团队",
    cooperateName: "合作案例",
    copyright: "Copyright © 2025-2099 宁波鼎发塑料机械有限公司 版权所有",
    web: "企业官网",
    recordNumber: "备案号",
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;

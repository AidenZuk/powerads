# PowerAds - 广告赚钱应用

这是一个基于 uni-app 的跨平台应用，用于通过观看广告赚取收益。

## 功能特点

- 用户注册与登录
- 观看广告获取收益
- 邀请好友获得奖励
- 任务系统
- 收益提现

## 技术栈

- Vue.js 2.x
- uni-app
- Vuex
- SCSS

## 项目设置

```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev:h5  # H5
npm run dev:mp-weixin  # 微信小程序
npm run dev:app  # App

# 构建生产版本
npm run build:h5  # H5
npm run build:mp-weixin  # 微信小程序
npm run build:app  # App
```

## 项目结构

```
├── pages          # 页面文件
├── components     # 组件
├── store          # Vuex 状态管理
├── static         # 静态资源
└── App.vue        # 应用入口
```

## 部署说明

本项目可以编译到多个平台：

- H5
- 微信小程序
- App（iOS/Android）

## License

MIT 
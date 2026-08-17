<div align="center">

# 实况工具箱 · Live Photo Tools

<img src="icon.png" width="96" alt="app icon"/>

**一款专注于 Android 实况照片（Live Photo / Motion Photo）的本地处理工具**

[![Platform](https://img.shields.io/badge/Platform-Android-3DDC84?logo=android&logoColor=white)](https://www.android.com)
[![Written in](https://img.shields.io/badge/Written%20in-Kotlin-7F52FF?logo=kotlin&logoColor=white)](https://kotlinlang.org)
[![UI](https://img.shields.io/badge/UI-Jetpack%20Compose%20%2B%20MIUI--X-blue)](https://developer.android.com/compose)
[![License](https://img.shields.io/badge/License-Proprietary-lightgrey)](#许可证)

</div>

---

## ✨ 功能特性

| 功能 | 说明 |
| :--- | :--- |
| 🧩 **Live 合成** | 选择一张图片 + 一段视频，合成为实况照片（Motion Photo），可直接存入相册 |
| 🔍 **Live 提取** | 从实况照片中提取静态封面图片、视频，或导出为 GIF 动图 |
| ✂️ **Live 编辑** | 编辑已有实况：重选封面帧、调整播放速度、替换或编辑音轨 |
| 🔒 **本地优先** | 全部处理在设备本地完成，无需上传云端，保护隐私 |
| 🌗 **自适应布局** | 适配常规屏幕与分屏小窗，紧凑比例下自动调整布局、避免遮挡 |

## 📱 设备兼容性

| 设备 / 系统 | 支持情况 |
| :--- | :--- |
| 小米 HyperOS 3（REDMI K90） | ✅ 支持 |
| 小米 HyperOS 1（Redmi Note 12 Turbo） | ⭕️ 部分支持 \* |

> \* 小米 HyperOS 1（Redmi Note 12 Turbo）目前仅支持「Live 提取」，合成 / 编辑暂未验证。
>
> 欢迎在 Issue 中分享你的机型与系统版本测试结果，帮助完善兼容性列表。

## 🚀 运行要求

- **系统版本**：Android 8.0（API 26）及以上
- **权限**：仅访问你主动选择的媒体文件（通过系统文件选择器，不私自读取相册）

## 📖 使用方式

1. 在 [**Releases**](https://github.com/gaoyilun/LivePhotoTools/releases) 页面下载最新 APK 并安装；
2. 打开应用，主页选择「Live 合成 / 提取 / 编辑」；
3. 按提示选择图片或视频，处理完成后结果保存到相册或指定位置。

## 🛠️ 技术栈

- **语言**：Kotlin
- **UI**：Jetpack Compose + [MIUI-X](https://github.com/miuix-kotlin/miuix)
- **媒体处理**：MediaCodec / MediaExtractor / MediaMuxer、MediaMetadataRetriever
- **构建**：Gradle Kotlin DSL

## ❓ 常见问题

**Q：合成的实况在相册里不显示为动态？**

A：部分厂商相册对 Motion Photo 的兼容不同。建议优先使用 Google 相册或原厂图库查看；导出的视频 / GIF 则为通用格式，任意播放器可播。

## 📄 许可证

当前为**专有 / 闭源**分发。若后续开放源码，将在此处更新许可证说明。

---

<p align="center">
  Made with ❤️ on Android
</p>

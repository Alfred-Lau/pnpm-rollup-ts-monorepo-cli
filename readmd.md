- 只构建，不打包的haul不需要使用 rollup，只要使用 tsc 就好
- 在根项目的 package.json 中，你通常不会添加用于发布的 scripts，因为发布通常是针对单个包而不是整个 monorepo 项目。然而，你可能会在根项目中添加一些辅助脚本来管理子包，例如版本更新、测试或构建子包。
- pnpm monorepo的 多包发布还需要引入新的工具，例如 lerna 或者 bolt
-   "scripts": {
    "build": "pnpm -r --filter \"./packages/*\" run build",
    "dev": "pnpm -r  --filter \"./packages/*\" --parallel run dev",
    "publish-all": "pnpm --filter \"./packages/*\" --parallel run release",
    "version-update": "pnpm --filter \"./packages/*\" version patch",
    "publish-some": "pnpm --filter \"@my-monorepo/specific-package\" run release",
    "test": "pnpm --filter \"./packages/*\" run test"
  },
经典配置，dev 必须使用 --parallel，并行启动，不会被监听卡住
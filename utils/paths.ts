import { join } from 'path'

export const rootPath = process.cwd() // 返回当前工作目录

export function pathToRoot(...paths: string[]) {
  return join(rootPath, ...paths)
}

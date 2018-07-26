import { MemoryRecord } from "js-memory-record"

class ThemeInfo extends MemoryRecord {
  static get define() {
    return [
      /* eslint-disable */
      { key: "none",   name: "なし",   },
      { key: "simple", name: "紙面風", },
      { key: "real",   name: "リアル", },
      /* eslint-enable */
    ]
  }
}

export { ThemeInfo }

if (process.argv[1] === __filename) {
  console.log(ThemeInfo.fetch("real").key)
  console.log(ThemeInfo.fetch("real").name)
}
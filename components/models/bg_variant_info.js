import MemoryRecord from "js-memory-record"

export class BgVariantInfo extends MemoryRecord {
  static get define() {
    return [
      { key: "is_bg_variant_none", name: "none", },
      { key: "is_bg_variant_a",    name: "木1",  },
      { key: "is_bg_variant_b",    name: "木2",  },
    ]
  }
}

if (process.argv[1] === __filename) {
  console.log(BgVariantInfo.fetch("is_bg_variant_a").key)
  console.log(BgVariantInfo.fetch("is_bg_variant_a").name)
}

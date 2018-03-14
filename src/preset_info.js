import { MemoryRecord } from "./memory_record"

class PresetInfo extends MemoryRecord {
  static get define() {
    return [
      /* eslint-disable */
      { key: "平手",       sfen: "position sfen lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1", },
      { key: "香落ち",     sfen: "position sfen lnsgkgsn1/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1", },
      { key: "右香落ち",   sfen: "position sfen 1nsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1", },
      { key: "角落ち",     sfen: "position sfen lnsgkgsnl/1r7/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",   },
      { key: "飛車落ち",   sfen: "position sfen lnsgkgsnl/7b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",   },
      { key: "飛車香落ち", sfen: "position sfen lnsgkgsn1/7b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",   },
      { key: "二枚落ち",   sfen: "position sfen lnsgkgsnl/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",     },
      { key: "三枚落ち",   sfen: "position sfen lnsgkgsn1/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",     },
      { key: "四枚落ち",   sfen: "position sfen 1nsgkgsn1/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",     },
      { key: "六枚落ち",   sfen: "position sfen 2sgkgs2/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",       },
      { key: "八枚落ち",   sfen: "position sfen 3gkg3/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",         },
      { key: "十枚落ち",   sfen: "position sfen 4k4/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",           },
      { key: "十九枚落ち", sfen: "position sfen 4k4/9/9/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",                   },
      { key: "二十枚落ち", sfen: "position sfen 9/9/9/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",                     },
      /* eslint-enable */
    ]
  }

  get sfen() {
    return this.attributes.sfen
  }
}

export { PresetInfo }

if (process.argv[1] === __filename) {
  console.log(PresetInfo.fetch("平手"))
}

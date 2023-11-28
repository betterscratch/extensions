// Name: Runtime Options
// ID: runtimeoptions
// Description: Get and modify turbo mode, framerate, interpolation, clone limit, stage size, and more.

/* generated l10n code */Scratch.translate.setup({"ca":{"_Runtime Options":"Opcions d'execució"},"cs":{"_Runtime Options":"Nastavení běhu"},"de":{"_Runtime Options":"Laufzeit-Optionen"},"es":{"_Runtime Options":"Opciones de Runtime"},"fr":{"_Runtime Options":"Options d'exécution"},"hu":{"_Runtime Options":"Lefutási Opciók"},"it":{"_Infinity":"infinito","_Runtime Options":"Opzioni Esecuzione","_[thing] enabled?":"[thing] abilitato","_clone limit":"limite cloni","_default ({n})":"predefinito({n})","_disabled":"sblocca","_enabled":"blocca","_framerate limit":"limite framerate","_height":"altezza","_high quality pen":"penna alta qualità","_interpolation":"interpolazione","_remove fencing":"rimuovi i limiti dallo Stage","_remove misc limits":"rimuovi limiti","_run green flag [flag]":"esegui tutti i cappelli bandiera verde [flag]","_set [thing] to [enabled]":"imposta [thing] a [enabled]","_set clone limit to [limit]":"imposta limite cloni a [limit]","_set framerate limit to [fps]":"imposta limite framerate a [fps]","_set stage size width: [width] height: [height]":"imposta dimensioni Stage larghezza: [width]altezza: [height]","_set username to [username]":"imposta username a [username]","_stage [dimension]":"[dimension] dello Stage","_turbo mode":"modalità turbo","_width":"larghezza"},"ja":{"_Runtime Options":"ランタイムのオプション","_turbo mode":"ターボモード"},"ja-hira":{"_Runtime Options":"ランタイムのオプション"},"ko":{"_Runtime Options":"실행 설정"},"lt":{"_Runtime Options":"Paleidimo laiko parinktys"},"nl":{"_Infinity":"oneindig","_Runtime Options":"Looptijdopties","_[thing] enabled?":"[thing] ingeschakeld?","_clone limit":"kloonlimiet","_default ({n})":"standaard ({n})","_disabled":"uit","_enabled":"in","_framerate limit":"framerate-limiet","_height":"hoogte","_high quality pen":"pen met hoge kwaliteit","_interpolation":"interpolatie","_remove fencing":"waarde-limieten weghalen","_remove misc limits":"diverse limieten weghalen","_run green flag [flag]":"voer groene vlag [flag] uit","_set [thing] to [enabled]":"schakel [thing] [enabled]","_set clone limit to [limit]":"maak kloonlimiet [limit]","_set framerate limit to [fps]":"maak framerate-limiet [fps]","_set stage size width: [width] height: [height]":"maak speelveldbreedte: [width] en -hoogte: [height]","_set username to [username]":"maak gebruikersnaam [username]","_stage [dimension]":"[dimension] van speelveld","_turbo mode":"turbomodus","_width":"breedte"},"pl":{"_Runtime Options":"Opcje Uruchamiania"},"pt":{"_Runtime Options":"Opções de Execução"},"pt-br":{"_Runtime Options":"Opções de Execução"},"ru":{"_Infinity":"Бесконечно","_Runtime Options":"Опции Выполнения","_[thing] enabled?":"[thing] включен?","_clone limit":"лимит клонов","_default ({n})":"по умолчанию ({n})","_disabled":"выключен","_enabled":"включен","_framerate limit":"лимит частоты кадров","_height":"высота","_high quality pen":"перо в высоком качестве","_interpolation":"интерполяция","_remove fencing":"убрать рамку","_remove misc limits":"убрать разные ограничения","_run green flag [flag]":"запустить зеленый флажок [flag]","_set [thing] to [enabled]":"установить [thing] в [enabled]","_set clone limit to [limit]":"задать лимит клонов в [limit]","_set framerate limit to [fps]":"задать лимит частоты кадров в [fps]","_set stage size width: [width] height: [height]":"задать ширину: [width] высоту: [height] сцены","_set username to [username]":"задать имя пользователя как [username]","_stage [dimension]":"[dimension] сцены","_turbo mode":"турбо режим","_width":"ширина"},"sl":{"_Runtime Options":"Možnosti izvajanja"},"sv":{"_Runtime Options":"Körtidsalternativ"},"tr":{"_Runtime Options":"Çalışma Zamanı Seçenekleri"},"uk":{"_Runtime Options":"Параметри виконання"},"zh-cn":{"_Infinity":"无限","_Runtime Options":"运行选项","_[thing] enabled?":"启用了[thing]？","_clone limit":"克隆限制","_default ({n})":"默认值({n})","_disabled":"禁用","_enabled":"启用","_framerate limit":"FPS上限","_height":"高度","_high quality pen":"高清画笔","_interpolation":"补帧","_remove fencing":"允许角色移出舞台","_remove misc limits":"取消音效范围与画笔大小限制","_run green flag [flag]":"运行绿旗[flag]","_set [thing] to [enabled]":"设置[thing]为[enabled]","_set clone limit to [limit]":"设置克隆体限制为[limit]","_set framerate limit to [fps]":"设置FPS上限为[fps]","_set stage size width: [width] height: [height]":"把舞台大小设置为宽[width] 高[height]","_set username to [username]":"设置用户名称为[username]","_stage [dimension]":"舞台的[dimension]","_turbo mode":"编译模式","_width":"宽度"},"zh-tw":{"_Runtime Options":"運行選項"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Runtime Options extension needs to be run unsandboxed");
  }

  const greenFlagURI =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABFFBMVEUAAACAgABVqlVJkklAn0BNmTNLljxGlzpDmzdFmjpGmzxHmz9Fmj1FmT5Emj1GmT1GmD1EmDxGmTxEmT1GmjxGmT1FmDxEmT5EmTxGmT5FmD1GmT5FmT1Gmj1EmT5FmT1FmT1FmDxGmT1FmjxLs09LtE9Jr0xJsk1Js05JtVBKtU5KtVBKtlBJrkpJsE1KtlFIrEpIsExLt1FLuFJKuVNIqkhLulNIp0VJqkhKtlJLvVRMvFNFmT5GpUVFmT1HpEVHokNMvlVFmT1Ho0NFmTxLvlVGoUFMvlVLvlVGn0BFmT1Nv1ZEmz5FmTxFmTxFmT1NvlZFmz9FmT5FnT9FnD5GnT9Mv1ZMv1ZMv1ZFmT1Mv1b////70P2GAAAAWXRSTlMAAgMHCAoRFhcwMz0/RkdQVGFmaWpxcnh7gIGEhZKZo6eprLq/v8DAwMDAwMDBwcHCwsPDxcbIysrLzM3Pz9DQ1NTV1dfZ29vg4uXm5+jp6ens7fDx9Pv8/nPb5aAAAAABYktHRFt0vJU0AAAAsUlEQVQoz2NgwA3YhNiwS4hHykoou9goCrKiSUhGhqhZe7gbm3rxQwQ4BJihEupRYODooMDFyMAu6uMsgyoRFW5kHxjkqeuhL4cmAQM4JXRwSWjjktDEJaGFS0IVIeFtZuIaAZdQgUmY2/oqyTu5WcEkNGAS/kJMQJrbySAAJBxmGSoIlYAoYGCR8rPVM7QItuNlQJVgYGDlE5MU5kSErhz2+KCihEikNHYJJh5mBhIAADBcR/r5OJzCAAAAAElFTkSuQmCC";
  const TURBO_MODE = "turbo mode";
  const INTERPOLATION = "interpolation";
  const REMOVE_FENCING = "remove fencing";
  const REMOVE_MISC_LIMITS = "remove misc limits";
  const HIGH_QUALITY_PEN = "high quality pen";

  class RuntimeOptions {
    getInfo() {
      return {
        id: "runtimeoptions",
        name: Scratch.translate("Runtime Options"),
        color1: "#8c9abf",
        color2: "#7d8aab",
        color3: "#6f7b99",
        blocks: [
          {
            opcode: "getEnabled",
            text: Scratch.translate("[thing] enabled?"),
            blockType: Scratch.BlockType.BOOLEAN,
            arguments: {
              thing: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: TURBO_MODE,
                menu: "thing",
              },
            },
          },
          {
            opcode: "setEnabled",
            text: Scratch.translate("set [thing] to [enabled]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              thing: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: TURBO_MODE,
                menu: "thing",
              },
              enabled: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "true",
                menu: "enabled",
              },
            },
          },

          "---",

          {
            opcode: "getFramerate",
            text: Scratch.translate("framerate limit"),
            blockType: Scratch.BlockType.REPORTER,
          },
          {
            opcode: "setFramerate",
            text: Scratch.translate("set framerate limit to [fps]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              fps: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "30",
              },
            },
          },

          "---",

          {
            opcode: "getCloneLimit",
            text: Scratch.translate("clone limit"),
            blockType: Scratch.BlockType.REPORTER,
          },
          {
            opcode: "setCloneLimit",
            text: Scratch.translate("set clone limit to [limit]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              limit: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "300",
                menu: "clones",
              },
            },
          },

          "---",

          {
            opcode: "getDimension",
            text: Scratch.translate({
              default: "stage [dimension]",
              description: "[dimension] is a dropdown of width and height",
            }),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              dimension: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "width",
                menu: "dimension",
              },
            },
          },
          {
            opcode: "setDimensions",
            text: Scratch.translate(
              "set stage size width: [width] height: [height]"
            ),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              width: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
              height: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "360",
              },
            },
          },

          "---",

          {
            opcode: "setUsername",
            text: Scratch.translate("set username to [username]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              username: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "greenFlag",
            text: Scratch.translate("run green flag [flag]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              flag: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: greenFlagURI,
              },
            },
          },
        ],
        menus: {
          thing: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("turbo mode"),
                value: TURBO_MODE,
              },
              {
                text: Scratch.translate("interpolation"),
                value: INTERPOLATION,
              },
              {
                text: Scratch.translate("remove fencing"),
                value: REMOVE_FENCING,
              },
              {
                text: Scratch.translate("remove misc limits"),
                value: REMOVE_MISC_LIMITS,
              },
              {
                text: Scratch.translate("high quality pen"),
                value: HIGH_QUALITY_PEN,
              },
            ],
          },

          enabled: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("enabled"),
                value: "true",
              },
              {
                text: Scratch.translate("disabled"),
                value: "false",
              },
            ],
          },

          clones: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("default ({n})", {
                  n: "300",
                }),
                value: "300",
              },
              {
                text: Scratch.translate("Infinity"),
                value: "Infinity",
              },
            ],
          },

          dimension: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("width"),
                value: "width",
              },
              {
                text: Scratch.translate("height"),
                value: "height",
              },
            ],
          },
        },
      };
    }

    getEnabled({ thing }) {
      if (thing === TURBO_MODE) {
        return Scratch.vm.runtime.turboMode;
      } else if (thing === INTERPOLATION) {
        return Scratch.vm.runtime.interpolationEnabled;
      } else if (thing === REMOVE_FENCING) {
        return !Scratch.vm.runtime.runtimeOptions.fencing;
      } else if (thing === REMOVE_MISC_LIMITS) {
        return !Scratch.vm.runtime.runtimeOptions.miscLimits;
      } else if (thing === HIGH_QUALITY_PEN) {
        return Scratch.renderer.useHighQualityRender;
      }
      return false;
    }

    setEnabled({ thing, enabled }) {
      enabled = Scratch.Cast.toBoolean(enabled);

      if (thing === TURBO_MODE) {
        Scratch.vm.setTurboMode(enabled);
      } else if (thing === INTERPOLATION) {
        Scratch.vm.setInterpolation(enabled);
      } else if (thing === REMOVE_FENCING) {
        Scratch.vm.setRuntimeOptions({
          fencing: !enabled,
        });
      } else if (thing === REMOVE_MISC_LIMITS) {
        Scratch.vm.setRuntimeOptions({
          miscLimits: !enabled,
        });
      } else if (thing === HIGH_QUALITY_PEN) {
        Scratch.renderer.setUseHighQualityRender(enabled);
      }
    }

    getFramerate() {
      return Scratch.vm.runtime.frameLoop.framerate;
    }

    setFramerate({ fps }) {
      fps = Scratch.Cast.toNumber(fps);
      Scratch.vm.setFramerate(fps);
    }

    getCloneLimit() {
      return Scratch.vm.runtime.runtimeOptions.maxClones;
    }

    setCloneLimit({ limit }) {
      limit = Scratch.Cast.toNumber(limit);
      Scratch.vm.setRuntimeOptions({
        maxClones: limit,
      });
    }

    getDimension({ dimension }) {
      if (dimension === "width") {
        return Scratch.vm.runtime.stageWidth;
      } else if (dimension === "height") {
        return Scratch.vm.runtime.stageHeight;
      }
      return 0;
    }

    setDimensions({ width, height }) {
      width = Scratch.Cast.toNumber(width);
      height = Scratch.Cast.toNumber(height);
      Scratch.vm.setStageSize(width, height);
    }

    setUsername({ username }) {
      Scratch.vm.runtime.ioDevices.userData._username =
        Scratch.Cast.toString(username);
    }

    greenFlag() {
      Scratch.vm.runtime.greenFlag();
    }
  }

  Scratch.extensions.register(new RuntimeOptions());
})(Scratch);

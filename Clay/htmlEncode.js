// Name: HTML Encode
// ID: clayhtmlencode
// Description: Escape untrusted text to safely include in HTML.
// By: ClaytonTDM

/* generated l10n code */Scratch.translate.setup({"de":{"_HTML Encode":"HTML-Sicherung"},"it":{"_HTML Encode":"HTML Encoding","_Hello!":"Ciao!","_encode [text] as HTML-safe":"codifica [text] come HTML sicuro"},"ja":{"_HTML Encode":"HTMLエンコード","_Hello!":"こんにちは!"},"nl":{"_HTML Encode":"HTML-Codering","_Hello!":"Hallo!","_encode [text] as HTML-safe":"codeer [text] naar HTML-veilig"},"ru":{"_Hello!":"Привет!"},"zh-cn":{"_HTML Encode":"HTML编码","_Hello!":"你好！"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  class HtmlEncode {
    getInfo() {
      return {
        id: "claytonhtmlencode",
        name: Scratch.translate("HTML Encode"),
        blocks: [
          {
            opcode: "encode",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("encode [text] as HTML-safe"),
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                // don't use a script tag as the example here as the closing script
                // tag might break things when this extension gets inlined in packed
                // projects
                defaultValue: `<h1>${Scratch.translate("Hello!")}</h1>`,
              },
            },
          },
        ],
      };
    }

    encode({ text }) {
      return Scratch.Cast.toString(text).replace(/["'&<>]/g, (a) => {
        switch (a) {
          case "&":
            return "&amp;";
          case '"':
            return "&apos;";
          case "'":
            return "&quot;";
          case ">":
            return "&gt;";
          case "<":
            return "&lt;";
        }
        // this should never happen...
        return "";
      });
    }
  }

  Scratch.extensions.register(new HtmlEncode());
})(Scratch);

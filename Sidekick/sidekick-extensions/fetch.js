(function (Scratch) {
  "use strict";

  class Fetch {
    getInfo() {
      return {
        id: "fetch",
        name: "Fetch",
        blocks: [
          {
            opcode: "get",
            blockType: Scratch.BlockType.REPORTER,
            text: "GET [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                // !!! CHANGE !!!
                // defaultValue: 'https://extensions.turbowarp.org/hello.txt'
                defaultValue:
                  "https://menersar.github.io/Sidekick/sidekick-extensions/hello.txt",
              },
            },
          },
        ],
      };
    }

    get(args) {
      return Scratch.fetch(args.URL)
        .then((r) => r.text())
        .catch(() => "");
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);

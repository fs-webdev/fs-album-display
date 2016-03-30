module.exports = {
  "plugins": {
    "istanbul": {
      "dir": "./coverage",
      "reporters": [
        "text-summary", "lcov"
      ],
      "exclude": [],
      "include": [
        "**/birch-album-display.html"
      ]
    }
  }
}
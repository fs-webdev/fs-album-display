module.exports = {
  "plugins": {
    "sauce": {
      "disabled": true,
      "browsers": [
        "Windows 8.1/internet explorer",
        "Windows 10/microsoftedge",
        {
          "browserName": "safari",
          "platform": "OS X 10.12",
          "version": "11.0"
        }
      ]
    }
  }
}

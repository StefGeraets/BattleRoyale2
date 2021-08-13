module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "else",
          "extend",
          "for",
          "function",
          "if",
          "include",
          "mixin",
          "return",
          "use",
          "error",
          "each"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "export"]
      }
    ],
    "no-invalid-position-at-import-rule": null,
    "function-name-case": null,
    "value-keyword-case": null
  }
};

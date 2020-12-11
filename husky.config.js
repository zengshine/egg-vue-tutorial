module.exports = {
  "hooks": {
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
    //"prepare-commit-msg": "git cz --hook || true",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
  }
}
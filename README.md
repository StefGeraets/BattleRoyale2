# BattleRoyale2.0

Better version of BattleRoyale

### Install

Run `yarn` to install

Run `yarn dev` to get local development environment

### Scripts

- **Build**: `yarn build`
- **Start Dev environment**: `yarn dev`
- **Prettier**: `yarn prettier`
- **JS linter**: `yarn lint:js`
- **Style linter**: `yarn lint:scss`
- **Test**: `yarn test`
- **Test watch**: `yarn test:watch`

### Architecture
- src/
  - index.js
  - main.scss
  - scss/
    - various scss files for general setup and reusable variables
  - components/
    - component/
      - component.js
      - component.scss
    - grid/
      - grid.js
      - grid.scss
    - timebar/
      - timebar.js
      - timebar.scss
    - messages/ (to manage kill made messages)
      - messages.js
      - messages.scss
    - token/
      - token.js
      - token.scss
    - wall/
      - wall.js
      - wall.scss
  - data/
    - manager.js
  - events/
    - dispatcher.js
    - events.js (list of available events)
  - ui/
    - playerView.js
    - dmView.js


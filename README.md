# BattleRoyale2

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

# Todo

## Make DM view starting point

- Takes care of game settings
  - Grid settings
- Takes care of game timing
- Takes care of inputs
- Takes care of events

### DM screen

- [x] generate grid
- [ ] play/pause
- [ ] Display upcoming placed safeArea. Change where safeArea is set on click before time runs out.
- [ ] place + animate settings for wall
- [ ] Set safeArea
- [ ] Trigger to play sound
- [x] Place token
- [ ] Move token
  - [x] move token logic
  - [ ] move token listener keyboard input
- [ ] Show total combatants
- [ ] kill combatants based on time
- [ ] kill combatants based on DM click
- [ ] Show kill made
- [ ] Open player window
- [ ] Toggle overlay

## Open player window

- takes care of visual representation (visuals + sound)
- Listens to events
- Animates
- Shows countdown times

### player screen

- [ ] draw grid
- [ ] display safeArea on map
- [ ] trigger countdown before wall
- [ ] place + animate settings for wall
- [ ] play sound
- [ ] Place token
- [ ] Move token
- [ ] Show total combatants
- [ ] Show kill made
- [ ] Show/hide overlay

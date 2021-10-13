<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/StefGeraets/BattleRoyale2">
    <img src="gh/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">D&D BattleRoyale</h3>

  <p align="center">
    An interactive battle map to play a D&D 5e BattleRoyale!
    <br />
    <a href="https://stefgeraets.github.io/battleroyale">View Demo</a>
    ·
    <a href="https://github.com/StefGeraets/BattleRoyale2/blob/main/gh/rules.pdf">View Rules</a>
    ·
    <a href="https://github.com/StefGeraets/BattleRoyale2/issues">Report Bug</a>
    ·
    <a href="https://github.com/StefGeraets/BattleRoyale2/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details closed="closed">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#roadmap">Roadmap</a>
      <ul>
        <li><a href="#stage-1">Stage 1</a></li>
        <li><a href="#stage-2">Stage 2</a></li>
        <li><a href="#stage-3">Stage 3</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#support-the-project-sparkling_heart">Support the Project</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

After seeing the vod of [Acquisition Incorporated at PAX East 2018](https://www.youtube.com/watch?v=TVuhIPHyGpU&ab_channel=pennyarcadeTV) where Mike Krahulik played a PUBG inspired D&D game, I wanted todo the same with my group of friends. After searching the web alot, I found out there was no piece of software available to play this game.

So we build our own.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

What you need to install the program

- node
- yarn or npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/StefGeraets/BattleRoyale2.git
   ```
2. Install packages
   ```sh
   yarn
   ```
3. Start development build
   ```sh
   yarn dev
   ```

### Scripts

Useful scripts during development

- **Build**: `yarn build`
- **Start Dev environment**: `yarn dev`
- **Prettier**: `yarn prettier`
- **JS linter**: `yarn lint:js`
- **Style linter**: `yarn lint:scss`
- **Test**: `yarn test`
- **Test watch**: `yarn test:watch`

<!-- USAGE EXAMPLES -->

## Usage

_TODO_

## Roadmap

These are the plays. When Stage 1 is complete, the game should be playable and the demo will be updated

### Stage 1

DM screen with basic controls to play the game.

- View the map and move token representing the player group
- Set timer according to the [rules](gh/rules.pdf)
- Place safeZone as DM
- Animate kill zone

### Stage 2

Open player view to present to the players

- Player view receives actions
  - See token move
  - See safeZone
  - See killZone animate

### Stage 3

Add more settings to for DM.

- Settable time for a game
- Settable player count
- Add flavoured killes (as a player makes a kill, show it in kill ticker)

Add more flair to the BattleRoyale experience

- Players alive ticking down to keep the pressure high
- Show player kills in player view

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Support the Project :sparkling_heart:

If you are not a coder you can still help support the project by sharing it far and wide.

If you even love it more and appreciate the work we put in, consider buying us a [cup of coffee](buymeacoffee.com/?via=StefBuilds)

Thanks! :heart:

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Acquisitions Incorporated](https://www.acq-inc.com/)
- [Mike Krahulik](https://twitter.com/cwgabriel) _brain of the Acq Inc BattleRoyale game_
- [Penny Arcade](https://choosealicense.com) _makers of the original software_
- [u/Slippery42](https://www.reddit.com/r/dndnext/comments/8cl767/homebrew_lets_tweak_acquisition_incs_wubg_battle/) _Rules_
- [Emmanuel Muniz](https://twitter.com/Mane_Muniz) _Tweaked rules and putting together as a module_
- [Inkarnate](https://inkarnate.com/) _Map making tool. Possible to edit original by uploading [this file](gh/map/battleRoyaleMap.json) (possible with free account)_
- [Adobe Photoshop]() _Tool used to align map to grid and add special areas. You can adjust [the file](gh/map/island-mockup.psd)_

# Todo during development

## Make DM view starting point

- Takes care of game settings
  - Grid settings
- Takes care of game timing
- Takes care of inputs
- Takes care of events

### DM screen

- [x] generate grid
- [x] play/pause
- [x] Calculate periods
  - [x] Safe area shown to player / not movable by DM
  - [x] Wall closing time
  - [x] rest period
- [x] Trigger events based on time
- [x] Display upcoming placed safeArea. Change where safeArea is set on click before time runs out.
- [ ] place + animate settings for wall
- [ ] Set safeArea
- [ ] Trigger to play sound
- [x] Place token
- [x] Move token
  - [x] move token logic
  - [x] move token listener keyboard input
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

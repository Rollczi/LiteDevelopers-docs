---
layout: home

title: LiteDevelopers
titleTemplate: Docs

hero:
  image: https://i.ibb.co/dWTNW8q/bitmapa.png
  name: LiteDevelopers
  text: projects documentation
  actions:
    - theme: brand
      text: Get Started
      link: /documentation/introduction/projects
    - theme: alt
      text: Visit our Github
      link: https://github.com/Rollczi/

features:
- icon: ☄️
  title: LiteCommands
  details: Annotation based Command framework for Velocity, Bukkit, Paper, BungeeCord and your other implementations.
- icon: 💜
  title: LiteSkullAPI
  details: Fast and extensive skull library for Bukkit/Spigot/Paper plugins.
- icon: 🌃
  title: LiteChairs
  details: Simple bukkit / spigot plugin for adding chairs to your server.
- icon: 👮🏻
  title: Lite-AntiLegs
  details: Anti-legs plugin for Minecraft spigot server.
- icon: 👑
  title: LiteSandBoy
  details: Simple bukkit / spigot plugin for custom "SandFarmers", "BoyFarmers" etc.
- icon: ☁️
  title: SkyMob
  details: Simple Extension for SuperiorSkyblock2 plugin. After creating the island, a custom mob will spawn.
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/49173834?v=4',
    name: 'Rollczi',
    title: 'Java Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Rollczi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/rollczi/' }
    ]
  }
]
</script>


<VPTeamPage style='padding-bottom: 0'>
  <VPTeamPageTitle>
    <template is #title>
      LiteDevelopers Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
<VPTeamMembers :members="members"></VPTeamMembers>
</VPTeamPage>



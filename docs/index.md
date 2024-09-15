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
      link: /documentation/litecommands/getting-started
    - icon: 💜
      title: LiteSkullAPI
      details: Fast and extensive skull library for Bukkit/Spigot/Paper plugins.
      link: /documentation/liteskullapi/getting-started
    - icon: 🌃
      title: LiteChairs
      details: Simple bukkit / spigot plugin for adding chairs to your server.
      link: /documentation/litechairs/getting-started
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
  VPTeamMembers,
  VPDocAsideSponsors,
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
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/65517973?v=4',
    name: 'vLucky',
    title: 'Java Developer',
    links: [
        { icon: 'github', link: 'https://github.com/vLuckyyy' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/vlucky/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/80779749?v=4',
    name: 'CitralFlo',
    title: 'BESTO FRIENDO',
    links: [
        { icon: 'github', link: 'https://github.com/CitralFlo' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/citralflo/' }
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
        We are a small team of developers that create open-source projects for the Minecraft community.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members"></VPTeamMembers>
  <VPTeamPageTitle  style='padding: 0'>
    <template #lead>
      And many more contributors! <a style="color: var(--vp-c-brand)" href="https://github.com/Rollczi/LiteCommands/graphs/contributors">See all contributors</a>
    </template>
  </VPTeamPageTitle>
</VPTeamPage>

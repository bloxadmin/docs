---
sidebar_position: 1
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

# Getting Started

Installing bloxadmin to your game is easy

## Get API key

- Login to the [bloxadmin dashboard](https://bloxadmin.com)
- Go to your profile
- Click "Generate API Key"
- Click copy

## Add to game

Using the API Key you got in the previous steps, copy the code below into your
game replacing `API_KEY` with your API key.

<Tabs>
<TabItem value="lua" label={<>Lua<i>u</i></>}>

```lua
require(7586411088)("API_KEY")
```

</TabItem>
<TabItem value="ts" label="Roblox TS">

```ts
// First-party TypeScript types will be published soon
require(7586411088)("API_KEY");
```

</TabItem>
</Tabs>

:::caution

Make sure you add the code in a **server script**. bloxadmin will **not** run on
the client.

:::

## Publish

Publish your game and the next time a server is started bloxadmin will connect
and start receiving data.

Once data has been sent to bloxadmin, the **owner of the game** or **the user
who created the API key** can go on to [the dashboard](https://bloxadmin.com)
and see the game in their game list. If you do not see the game, you can contact
our support on Discord at https://discord.gg/ZNENruRTeG or email us at
support@bloxadmin.com.

---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

# Remote Config

Remote config is a very simple Key-value store similar to
[Environment variables](https://en.wikipedia.org/wiki/Environment_variable)
inspired by
[Firebase's remote config](https://firebase.google.com/docs/remote-config) that
can be updated live from the [dashboard](https://bloxadmin.com)

## When to use Remote Config

- Daily or weekly in-game shop changes

- In-game Announcements

- Cost of in-game items

- A list of users with admin privilges on the game

Have another use-case? Tell us about it on Discord
https://discord.gg/ZNENruRTeG, we'd love to hear!

## When not to use Remote config

- Don't use Remote Config to store player data

- Don't use Remote Config for data that updates very often

## Creating and Updating

To update the Remote Config head to the [dashboard](https://bloxadmin.com) and
select your game. On the sidebar select "Remote Config"

At first you won't have anything configured, but to get started click "Create"
at the top right. Enter a name for the parameter and a value.

For example:

- Name: `my_parameter`
- Value: `This is an example value`

Click save!

<!-- TODO: Picture -->

## In game setup

<Tabs>
<TabItem value="lua" label={<>Lua<i>u</i></>}>

```lua
bloxadmin:getRemoteConfig():watch("my_parameter", function(my_parameter)
  if my_parameter == nil then
    print("'my_parameter' is not set!")

    return
  end

  print("'my_parameter' is set to: " .. my_parameter)
end)
```

</TabItem>
</Tabs>

Once the game connects to bloxadmin, the `watch` callback is called with the
currently set value. If the parameter does not exist, the callback will be
called with `nil` (`undefined` in roblox-ts).

If the parameter value is updated on the bloxadmin dashboard, the `watch`
callback will be called with the new value (updates typically take up to 15
seconds).

## Limits

- A game can have up to 2000 Remote Config parameters

- A Remote Config parameter name can not start with a `!` or `$`

- Remote Config parameter names have a max length of 28 characters

- A Remote config value can only be of type `string`

---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

# Actions

Actions are a way to trigger a function remotely. They are typically ran on the
first available server but can target a specific server as well.

## When to use Actions

- Cause

## When not to use Actions

- Cause 2

## Creating and Updating

To use Actions, you must first define them on the
[dashboard](https://bloxadmin.com). Select you game and go to the "Actions" page
on the sidebar. Under the "Actions" section, click "New" at the top-right.

Fill out the name and add your parameters and return values.

Parameters are what will be passed to the action while return values are what
the action returns. Each parameter or return value has a name and type. It is
not required to put either parameters or return values.

<!-- TODO: Pictures -->

## In game setup

Assume you have an action named `"give_player_xp"` with the parameters

- `player_id` as type `Player`
  - Even though it is of type `Player`, only the player ID (`number`) will be
    sent to the server. It is up to the developer to check for and get the
    player by id if they are online.
- `amount` as type `number`

And return values

- `xp_after` as type `number`

<Tabs>
<TabItem value="lua" label={<>Lua<i>u</i></>}>

```lua
bloxadmin:getActions():watch("give_player_xp", function (event, args)
	local player = game:GetService("Players"):GetPlayerByUserId(args['player_id'])
	local amount = args['amount']
	
	if player == nil  then
		return
	end
	
	-- TODO: Implement fucntion
	local after = givePlayerXp(player, amount)
	
	return {
		xp_after = after
	}
end)
```

</TabItem>
</Tabs>

When an action is called, bloxadmin will usually let the first available server
run it (random). But, if there is a one or more parameter of type `Player`,
bloxadmin will check if the specified player is online and attempt to run it on
the server the player is in.

Never assume that a player is online if it is called

If an action does not respond to an action call, the event will be sent to
another server.

## Limits

- Each game may have a maximum of 200 actions defined
- Each action may have a max of 20 parameters and 20 return values
- Action names must be alphanumeric with the only allowed special characters
  being space (``), `-` and `_`. And have a length between 1 and 64 (inclusive).
  - REGEX: `^[\w _-]{1,64}$`

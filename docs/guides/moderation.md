---
sidebar_position: 4
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

# Moderation API

The Moderation API allows creators to moderate their experiences from the comfort of the dashboard  

## When to use the Moderation API

- A member is breaking the rules of your experience.

Have another use-case? Tell us about it on Discord
https://discord.gg/ZNENruRTeG, we'd love to hear!

## When not to use the Moderation API

- Don't use the Moderation API as a death ban system.

## Creating and Updating

To update the Promotion Codes head to the [dashboard](https://bloxadmin.com) and
select your game. On the sidebar select "Data" and scroll to the "Promotion
Codes"

At first you won't have anything configured, but to get started click the
"Create" icon at the top right. Enter a name for the code and click Add. Then,
configure your code and click save!

Some configuration options include:

- **Active**: Whether or not the code is active and can be redeemed. If you want
  to disable a code, but not delete it, you can set this to false

- **Uses**: The total amount of players who can redeem this code. Setting this
  to 0 will allow the code to be redeemed an unlimited number of times. Each
  player can only ever redeem a code once.

- **Starts** (coming soon): The date and time the code will become redeemable.
  Before this date, the code will not be redeemable.

- **Expires** (coming soon): The date and time the code will expire. After this
  date, the code will no longer be redeemable.

- **Attributes**: A list of key value pairs that can be used to store any
  information you want. For example, you could use this to store the item a
  player should receive when redeeming the code. For example:
  - Key: `item`
  - Value: `Sword of the Undead`

<!-- TODO: Picture -->

## In game setup

<Tabs>
<TabItem value="lua" label={<>Lua<i>u</i></>}>

```lua
-- Player is the player redeeming the code
-- Code is the code the player is redeeming
bloxadmin:GetService("PromoCodes"):ClaimCode(player, code)
  :andThen(function (code)
    print("Promo code claimed!")
    
    -- The promo code has been claimed by the user!
    
    -- Use code.attributes to access the table of attributes you set on the dashboard	
    print(code.attributes)
    
    -- Additionally you can access other variables about the promo code
    print("This promo code has been used " .. tostring(code.used) .. " times")
  end)
  :catch(function (result)
    print("Promo code error")
    
    -- The promo code could not be claimed
    -- It's up to you what to tell your user depending on the error code
    
    if result == "not_found" then
      print("Promo code not found")
    elseif result == "expired" then
      print("Promo code has expired")
    elseif result == "not_started" then
      print("Promo code has not started")
    elseif result == "already_used" then
      print("You have already used this promo code")
    else 
      print("Unknown error")
    end
  end)
```

When a player inputs a code to be redeemed, you can use the code above to
attempt to redeem the code. If the code is valid, the code will be redeemed and
the `andThen` callback will be called with the `PromoCode` object. If the code
is invalid, the `catch` callback will be called with a string representing the
error.

Errors include:

- `"not_found"`: The code does not exist
- `"expired"`: The code has expired
- `"not_started"`: The code has not started
- `"already_used"`: The player has already redeemed the code

The `PromoCode` object has the following properties:

- `code`: The code the player redeemed
- `attributes`: A table of attributes you set on the dashboard
- `used`: The number of times the code has been redeemed
- `uses`?: The number of times the code can be redeemed
- `active`: Whether or not the code is active
- `expires`?: The date and time the code will expire
- `starts`?: The date and time the code will become redeemable

(? = the property is optional and may be `nil`)
</TabItem>
</Tabs>

## Limits

- Each player can only redeem a code once

- A game on the free plan can have up to 10 Promotion Codes

- A game on the pro plan can have up to 250 Promotion Codes

- Promotion Codes can be up to 32 characters long

- Promotion Codes can only contain letters, numbers and underscores

- Promotion Codes are case insensitive and will be converted to uppercase

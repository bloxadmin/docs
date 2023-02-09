---
sidebar_position: 1
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

# Using More Features

To use more features of bloxadmin you'll use the return of
`require(7586411088)()` you used to initialize bloxadmin. This return is a table
with all the features of bloxadmin. You can use this table to access all the
features of bloxadmin.

<Tabs>
<TabItem value="lua" label={<>Lua<i>u</i></>}>

```lua
local bloxadmin = require(7586411088)()
-- or
_G.bloxadmin = require(7586411088)()
```

</TabItem>
</Tabs>

:::tip

As long as you call `require(7586411088)("API_KEY")` at least once anywhere in
your game, you can use `require(7586411088)()` to get the bloxadmin instance.
Order does not matter

:::

Our examples in the docs will use the `bloxadmin` variable from the code above
to access the bloxadmin instance.

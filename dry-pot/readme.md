# Dry Pot

When planting flowers in a pot, it's important to make sure that whenever you water your plant any water that doesn't get absorbed by the roots drains out the bottom of the pot. Otherwise, the water will pool in the bottom of the pot and cause your plant to rot.

You recently decided to plant some flowers of your own, and decided to fill the base of the pot with gravel. You've decided to write code to verify whether water will successfully drain out of the pot.

Using a 2D array to represent your pot, individual pieces of gravel are notated with a and empty spaces between gravel are notated with a `1` and empty spaces between gravel are notated with a `0`.

Example Pot #1:

``` js
[
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0],
]
```

Write a function to determine whether the water can fall from the top row to the bottom, moving through the spaces between the gravel. Taking the example pot from above, you can see the possible path, which is marked by replacing the relevant `0`'s with asterisks (`*`)

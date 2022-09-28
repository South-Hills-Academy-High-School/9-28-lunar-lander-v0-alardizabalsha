namespace SpriteKind {
    export const map = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthEast1, function (sprite, location) {
    mySprite.setVelocity(0, -1)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
scaling.scaleByPercent(mySprite, -25, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite.ay = 20
let myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
let mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.Player)
mySprite.x = 0
game.onUpdate(function () {
    mySprite.destroy()
    myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
    minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.MinimapScale)
    mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
    mySprite2.setPosition(mySprite.left, mySprite.top)
})

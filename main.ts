namespace SpriteKind {
    export const map = SpriteKind.create()
    export const rocketengine = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthEast1, function (sprite, location) {
    apple.setVelocity(0, -1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    apple.ay = 25 * Math.sin(angle)
    apple.ax = 25 * Math.cos(angle)
    fireball.setFlag(SpriteFlag.Invisible, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle += 15 * (3.14 / 180)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    angle += -15 * (3.14 / 180)
})
let apple: Sprite = null
let angle = 0
let fireball: Sprite = null
fireball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
fireball.setFlag(SpriteFlag.Invisible, true)
angle = 0
tiles.setCurrentTilemap(tilemap`level1`)
effects.starField.startScreenEffect()
apple = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Player)
let engine = sprites.create(img`
    5 5 
    7 7 
    `, SpriteKind.rocketengine)
scene.cameraFollowSprite(apple)
scaling.scaleByPercent(apple, -25, ScaleDirection.Uniformly, ScaleAnchor.Middle)
apple.ay = 20
let myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
let minimap2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.Player)
game.onUpdate(function () {
    minimap2.destroy()
    myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
    minimap.includeSprite(myMinimap, apple, MinimapSpriteScale.MinimapScale)
    minimap2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
    minimap2.setPosition(apple.x - 50, apple.y - 50)
    engine.setPosition(apple.x + -8 * Math.cos(angle), apple.y + -8 * Math.sin(angle))
    fireball.setPosition(apple.x + -8 * Math.cos(angle), apple.y + -8 * Math.sin(angle))
})

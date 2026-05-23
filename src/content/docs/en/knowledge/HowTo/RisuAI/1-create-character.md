---
title: Create character card with inline asset.
---

End result:

- simple character with image and background music
- You know how to create this yourself.

Requirement:

- [RisuAI](https://risuai.net/)
- Download these 3 asset first:
  - The background music: https://pillows.su/f/7ea00ef55e3e6a6a7fbb5ae09cbc78a6
  - The pfp: https://ibb.co/c4YDwMr
  - the inline asset: https://ibb.co/mCmKzyRH

## Step by step visual guide

1. ![](/risu-guide-inline-asset/1-risu.webp)

2. ![](/risu-guide-inline-asset/2-risu.webp)
3. ![](/risu-guide-inline-asset/3-risu.webp)
4. Use this:

- Name

```
Rosa
```

- Description

```
Woman with gun
```

- First Message

```
"Just try laying one finger on Maria
in front of me. |’ll show you just how
lukewarm the hell you came from is."
```

After that, follow the red arrow.
![](/risu-guide-inline-asset/4-risu.webp)

5. Tbis is for PFP. Use previous `rosapfp.webp`. If the image only become gray, try to reload it.
   ![](/risu-guide-inline-asset/5-risu.webp)
6. ![](/risu-guide-inline-asset/6-risu.webp)
7. Click the plus (+) sign, upload preview `rosa.webp` and `worldenddominator.mp3`. You can try experimenting changing the name. After that, back to previous page.
   ![](/risu-guide-inline-asset/7-risu.webp)
8. To use previous asset, insert this:

```
{{asset::rosa}}

{{audio::worldenddominator}}
```

![](/risu-guide-inline-asset/8-risu.webp)

9. Check our card. Now we have image and background music. But that white thingie breaking immersive. ![](/risu-guide-inline-asset/9-risu.webp)

10. Wrap `{{audio::worldenddominator}}` with `<div style="display:none;">` and `</div>`.
    Like this:

```
<div style="display:none;">
  {{audio::worldenddominator}}
</div>
```

![](/risu-guide-inline-asset/10-risu.webp)

11. The white stuff gone. ![](/risu-guide-inline-asset/11-risu.webp)

## Explanation

- {{asset::filename}} > make file from Additional Assets with matching filename appear on chat. Work for image, video and gif.
- {{audio::filename}} > the same as above but for audio file.
- <div style="display:none;">/</div> > CSS. magic to tell browser "hey display none of this.". CSS will be the key to create fancy widget.

RisuAI have more magic besides this, You can read more at https://kwaroran.github.io/docs/syntax/cbs/

You can look at https://realm.risuai.net/character/8b829ef2-ec09-43fa-bd14-dbdf7b3c90ef

For example of RisuAI curly based syntax and CSS to create widget, auto math and mult language.

Next guide for more advanced applications will come when I'm alive.

## Support

This website purpose is for unified knowledge base for all thing chatbot related. If you are someone who expert at RisuAI and want to contribute your knowledge, feel free to join at [Github](https://github.com/kurohomeless/AIRPindex)

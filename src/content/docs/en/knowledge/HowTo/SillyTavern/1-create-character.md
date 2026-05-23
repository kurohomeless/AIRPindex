---
title: Create character card with inline asset.
---

End result:

- simple character with image and background music
- You know how to create this yourself.

Requirement:

- [SillyTavern](https://docs.sillytavern.app/)
- Download these 2 asset first:
  - The background music: https://pillows.su/f/7ea00ef55e3e6a6a7fbb5ae09cbc78a6
  - The pfp: https://ibb.co/c4YDwMr
- Know how to access your SillyTavern folder.

## Step by step visual guide

1. ![](/sillytavern-inline-asset/1-st.webp)

2. ![](/sillytavern-inline-asset/2-st.webp)
3. Use this:

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

4. After that, follow the red arrow. Portrait to upload PFP, then checkmark to save the character for now.

![](/sillytavern-inline-asset/3-st.webp)

## Insert Image.

2 method.

- A. Markdown and variable
- B. Regex.

Starting with A.

### Image via Markdown

**A1.** Use this. Feel free to try to put both at first message.

```
{{setvar::rosa::https://i.ibb.co/xSyb5g2M/rosa.webp}}

![]({{getvar:rosa}})
```

![](/sillytavern-inline-asset/4-st.webp)

**A2.** Profit ![](/sillytavern-inline-asset/5-st.webp)

### Image via Regex

**B1.** ![](/sillytavern-inline-asset/6-st.webp)
**B2.** ![](/sillytavern-inline-asset/7-st.webp)
**B3.** ![](/sillytavern-inline-asset/8-st.webp)
**B4.** ![](/sillytavern-inline-asset/10-st.webp)

**B5.** Fill Find Regex with previous `Rosa` and put this in Replace with:

```
![](https://i.ibb.co/xSyb5g2M/rosa.webp)
```

Make sure to check Affect AI output.
Save and notice previous Rosa become image.

![](/sillytavern-inline-asset/9-st.webp)

## Background music

I will assume you know how to access you SillyTavern file. As this is required separate tutorial lol.

1. ![](/sillytavern-inline-asset/11-st.webp)
2. ![](/sillytavern-inline-asset/12-st.webp)
3. Use the search bar and search `Audio` then install dynamic audio. ![](/sillytavern-inline-asset/13-st.webp)
4. Enable the setting and follow the hint.
   ![](/sillytavern-inline-asset/14-st.webp)
5. Change previous music name to neutral_1 and move it to SillyTavern bgm folder.

## Explanation

- {{setvar::name::value}} & {{getvar::name}} > SillyTavern magic. It's essentially say "Hey X is Y okay. If I get X turn it to Y". Read more on https://docs.sillytavern.app/usage/core-concepts/macros/
- ![]() > Markdown magic. You can just do ![](https://i.ibb.co/xSyb5g2M/rosa.webp) directly but using variable is more clean.
- Regex > Basically "Hey I want you to find Rosa, if you found it, change it to image." Good to save token as LLM only see `Rosa` not the markdown link and you, the user, can see the image still. Read more on https://docs.sillytavern.app/extensions/regex/

You can look at https://chub.ai/characters/kurohomelessqueen/lost-saga-mmo-1ea77c01bfe8

for example of:

- Multi language UI and example messages for each different first message
- Widgetsm

Next guide for more advanced applications will come when I'm alive.

## Support

This website purpose is for unified knowledge base for all thing chatbot related. If you are someone who expert at RisuAI and want to contribute your knowledge, feel free to join at [Github](https://github.com/kurohomeless/AIRPindex)

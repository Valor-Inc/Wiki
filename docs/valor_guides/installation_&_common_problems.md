---
sidebar_position: 8
Title: Installation & Common Problems
description: "Installation Help & Fixes to Common Problems"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation & Common Problems

<Tabs>
  <TabItem value= "Installation" label="Installation" default>

   
Installation Video: 
![https://cdn.discordapp.com/attachments/943955292645916702/1085439558096781372/ValorInstallGuide.gif](https://cdn.discordapp.com/attachments/943955292645916702/1085439558096781372/ValorInstallGuide.gif)
    
## **WITH AUTO-UPDATER**

- Download the Client from [here](https://api.valorserver.com/api/launcher).
    
- Extract ALL files into a folder.
    
- Double Click *ValorAutoUpdater.Exe*
    
- Click Update and watch the bar fill up.
    
- Once the bar is filled up, click it again to launch Valor.
    
- Once generated you may enter the Valor folder and run *Valor.exe* if this is quicker.

## **STANDALONE CLIENT**

- Download the Client from [here](https://api.valorserver.com/api/download).

- Extract ALL files into a folder.
    
- Open the folder containing the extracted files.


  </TabItem>
  <TabItem value="Common Problems" label="Common Problems">

## **Common Problems**

**Valor's Auto updater might trigger Anti-Viruses because it remotely fetches our valor.zip and unpacks it. If this is a problem, you may update manually.**
    
 - Some anti-viruses claim it as a false positive due to it not being signed, try disabling your AV if it doesn't work. You can check the code or just run it Sandboxie if you really want to.

 - If you're getting a black screen (pure black, no 'loading...') install Visual C++ from [Here 32 bit](https://aka.ms/vs/16/release/vc_redist.x86.exe) or [Here 64 bit](https://aka.ms/vs/16/release/vc_redist.x64.exe)
    
 - If you have registered but cannot connect to the nexus make sure you have selected a username. This is done via the "Play" Menu.

 - Want to hide taskbar on windows? (find the display setting: automatically hide taskbar while in desktop mode).
    
 - AMD has an issue with drivers past version: 22.5.

    *Solution:
    Go to www.amd.com/en/support and to find your graphics card FINDING the right one is important after they have done so click submit, find your version of windows, and download a driver of 226 or earlier
    Once downloaded open it up, and install it will downgrade your drivers to a previous version that works with Valor Anytime you wish to upgrade just update how you usually do it.*

 - Having problems connecting to anything in-game? Follow the following steps: Have Valor open, Open Task Manager and choose the button that says Details, Scroll Down until you see Valor.exe, Right Click Valor.exe and hover over Set Priority, Set it to High.
    ![image](https://user-images.githubusercontent.com/114798136/202323000-aa6a6e4c-2781-4ddb-ab2b-c07f0adfb90b.png)

 - If the above doesnt work you may need to delete your cache by: Windows + R, type in %appdata%, clear anything connected to "Valor", run auto updater from https://api.valorserver.com/api/launcher and play.

## **Mac and Linux Support**

We do not have native Mac or Linux ports, but there has been success stories running Valor under wine. 

If on Mac you can read more [here](https://blog.valorserver.com/valor-on-macos/), For Linux users you can simply install Wine via your distros packge manger; Install vc++ and you'll be running no problems.
    
  </TabItem>
    <TabItem value="Optimizing Settings" label="Optimizing Settings">

## Optimizing Settings

When first beginning Valor, all settings will be set to default. If you are a user who has struggles running Valor, this may not be the best for you. Below are a list of options as well as what they do and where to find them. Below that list are some quality of life options that Valor has that may make your gameplay experience more enjoyable.

### Performance Settings

| Setting  | Description | Which Tab is it in? |
| :--------: | :--------: | :--------: |
| Hardware Acceleration | Offsets load of visual elements to GPU from CPU, making the game run much smoother. | Graphics |
| Toggle Projectile Outline | Gives projectiles proper outlines, while pretty, it can hinder performance. If you are experiencing performance issues try enabling this. | Graphics |
| Disable Enemy Particles | Disables particles from enemies when they take damage or die. Turning on could help with performance issues. | Graphics |
| Disable Ally Particles | Disables particles of abilities as well as particles emitted by the player. Turning on could help with performance problems but may make team play difficult.  | Graphics |
| Disable Ally Hit Particles | Disables particles emitted by players upon taking damage. Enable if experiencing issues with performance. | Graphics |
| Disable Ally Notifications | Gets rid of notifications over the head of allies. Enabling could have positive impact on performance. | Graphics         |
| Disable Enemy Damage Text | Removes the damage dealt by other users from above enemies. This could improve performance as well as show you exactly how much damage you deal to the boss. | Graphics |
| Disable Ally Damage Text | Disables damage numbers over the heads of allies. Could improve performance! | Graphics |
| Disable Particle Master | Disables nonessential particles, however some things like 'throw area' and other effects will remain. Could grealty increase perofmrnace. | Graphics |
| Render Less Tiles | Renders Less Tiles! Could help performance! | Graphics |
| Donator Effect Particles | Disables Donator Effects. These small effects that surround each player could be hindering your performance.| Graphics |
| Hide Player Entities | Hides all entities summoned by players, such as Congealed Ooze. Could work to the benefit of performance. | Misc | 
| Hide Players | Allows you to hide players, as well as set unique hide options for members of your party, locklist and guild. | Misc | 
| Show Condition Icons | Shows other player's status effects over their head, like blind. A bunch of players + their conditions could create performance issues. | Misc |

### Quality of Life Settings

| Setting | Description | Which Tab is it in? |
| :--------: | :--------: | :--------: |
| Percent Display | Gives a % of the damage you dealt to the boss based on your DPS. | Graphics | 
| Loot Notification Filters | Allows you to filter which drop-types will give banner pop-ups. | Graphics |
| Loot Notification | Gives text notifications in chat for FB+ items. | Graphics | 
| Vault Viewer | Displays what is in your chests, now you don't gotta run to them inside the vault. | Misc | 
| Vault Color Text | Gives color to the text below your vault chests to indicate how full they are. | Misc | 
| Container Viewer | Displays whats in your bag / chest by hovering over it. Works for Vault as well. | Misc | 
| Enable Reskin Origin Tags | Shows the original sprite of your reskinned item in a small image near the reskin. | Misc |
| Enable Stacked Damage | Rather than showing individual damage shown by your shots, your damage will now add up in real time, showing your total damage. | Misc |
| Disable Unbox Text | Enabling results in when players unbox loot boxes their loot does not clog up your chat. | Misc |
| Item Animation | Enabling allows for items with animated sprites to display their animation. | Misc | 

  </TabItem>
</Tabs>

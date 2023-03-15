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
</Tabs>

---
layout: post
title:  "Visual Studio Exception Assistant"
date:   2017-03-29 14:12:36 -0700
categories: portfolio
hero: exception-assistant-hero.jpg
thumbnail: exception-assistant.jpg
excerpt_separator: <!--more-->
showcase: true
---

<!--more-->
### Background

Visual Studio is fully-featured integrated development environment (IDE) for Android, iOS, Windows, web, and cloud. Visual Studio provides the most powerful and feature complete development environment, bar none. Its complexity is intimidating and the framework it’s built on presents challenges akin to moving mountains just to make the slightest change to any of its components. Visual Studio has 4 million users with 1.5 billion revenue per year.

An exception is an indication of an error state that occurs while a program is being executed. A simple example of exception will be: if you divide 5 by 0, you will get “DivideByZeroException”. There are hundreds or even thousands of different exceptions. Dealing with Exceptions is a regular part of the developer daily routine. The developers need to find out why they have these exceptions and how to fix them. Visual Studio exception experience includes exception setting and exception assistant.

### How important is Exception Experience?

- 15 Million Exceptions are Broken on Every Month
- 510k+ users break on exceptions in one month
- Dialog pops up 28 times/month on average

<div>{% include image.html name="exception-assistant-overview.jpg" caption="Exception Assistant" class="img-responsive" %}</div>

### Exception Setting Experience Improvement

The users can use the Exception Settings window to specify which exceptions (or sets of exceptions) will cause the debugger to break, and at which point you want it to break. The users can add or delete exceptions, or specify exceptions to break on.

Previously when the users wanted to configure exception settings in Visual Studio, he would have to go to a modal, slow-opening, hard-to-search Exceptions Dialog. It’s not search friendly. Since it’s a dialog, the users cannot see their code side by side with this dialog. There are a lot of issues. So in Visual Studio 2015, I worked with PM and the engineer team together and made a big improvement to Exception Settings experience, which you can find below.

<div class="row">
  <div class="six columns">{% include image.html name="exception-assistant-before.jpg" caption="Exception Assistant Before" class="img-responsive" %}</div>
  <div class="six columns">{% include image.html name="exception-assistant-after.jpg" caption="Exception Assistant After" class="img-responsive" %}</div>
</div>
<div class="row">{% include image.html name="exception-assistant-feedback.jpg" caption="Positive feedback from customers" class="img-responsive" %}</div>

### Customer requests and problem analysis

We got enormous positive feedback from the improvements of Exception setting in Visual Studio 2015. Meanwhile, we also got a lot of feature requests from our customers from all channels. The team was encouraged by previous success to make improvements to Exception Assistant too. The images below shows customer requests and one design proposal from PM to address customers’ need.

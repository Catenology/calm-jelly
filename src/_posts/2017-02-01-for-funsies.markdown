---
layout: post
title:  "For Funsies"
date:   2017-02-01 23:16:36 -0700
categories: portfolio
hero: for-funsies-hero.jpg
thumbnail: for-funsies.jpg
excerpt_separator: <!--more-->
showcase: true
---

<!--more-->
### Background

Visual Studio is fully-featured integrated development environment (IDE) for Android, iOS, Windows, web, and cloud. Visual Studio provides the most powerful and feature complete development environment, bar none. Its complexity is intimidating and the framework it’s built on presents challenges akin to moving mountains just to make the slightest change to any of its components. Visual Studio has 4 million users with 1.5 billion revenue per year.

A breakpoint is a signal that tells the debugger to temporarily suspend execution of your program at a certain point. Breakpoints provide a powerful tool that enables you to suspend execution where and when you need to. Rather than stepping through your code line by line or instruction by instruction, you can allow your program to run until it hits a breakpoint, and then start to debug. This speeds up the debugging process. Without this ability, it would be almost impossible to debug a large program. Overall, breakpoint is very important for developers.

### The problems of current experience

The slideshows on the right clearly demonstrate the top problems for current breakpoint experience.

- It’s difficult to set up multiple conditions and actions
- The popups are modal and cover the most important code
- The advance features are undiscoverable

<div>{% include image.html name="breakpoint-experience-previous.jpg" caption="The problems of current experience" class="img-responsive" %}</div>

### The design goal for new experience

Make the breakpoint experience more
- Usable
- Discoverable
- Extensible

### Target Persona

<div>{% include image.html name="breakpoint-experience-persona.jpg" caption="Target Persona" class="img-responsive" %}</div>

### Sketching and Wireframing

The designer, researcher, PM and engineer team have a lot brainstorming for future breakpoint experience.

<div>{% include image.html name="breakpoint-experience-brainstorm.jpg" caption="Brainstorm" class="img-responsive" %}</div>

We came out a lot of early ideas. Each week we invited two users to our usability lab for quick pulse study. We used to run format usability testing which spent a lot time of planning and invite at least 10 users for a two weeks study. We no long do that. We iterated the design based on the research result we got each week. Then we tested it again. If one idea is bad, we just throw it. If some part of the design ideas are good, we made quick improvement to the not-so-good part. We do design/test/learn iteration. We are continually learning and improving. Until, we found a solution both our users and all stakeholders love.

<div>{% include image.html name="breakpoint-experience-quickpulse.jpg" caption="Quick Pulse" class="img-responsive" %}</div>

### Early idea 1:

{:.row.clearfix.list-unstyled}
- {:.six.columns} {% include image.html name="breakpoint-experience-idea1.jpg" alt="Early idea 1-1" class="img-responsive" %}
- {:.six.columns} {% include image.html name="breakpoint-experience-idea2.jpg" alt="Early idea 1-2" class="img-responsive" %}
{:.row.clearfix.list-unstyled}
- {:.six.columns} {% include image.html name="breakpoint-experience-idea3.jpg" alt="Early idea 1-3" class="img-responsive" %}
- {:.six.columns} {% include image.html name="breakpoint-experience-idea4.jpg" alt="Early idea 1-4" class="img-responsive" %}

### Early idea 2:

<div>{% include image.html name="breakpoint-experience-idea5.jpg" caption="Early idea 2" class="img-responsive" %}</div>

In this design, we fully remove all pup-ups. Instead we use embedded window inline to show the conditions and actions, which we called Peek Window. We show this peek window by default after the users set a breakpoint. The users can uncheck the checkbox on the top right corner inside the peek window to turn it off. The main part of this peek window have three tabs: general, condition and action. The users can configure all conditions and actions all in one place.

The quick pulse test result for this design overall is positive. But some users have concern about showing breakpoint setting window by default. So we continue iterating designs based on the feedback.

### Final Design

In the final design, we no longer show the breakpoint setting window by default. Instead, once the users setup a breakpoint, we will show an floating toolbar. The toolbar will fade away after 1.5 second. We actually test different time span for fade away. 1.5 second is a nice balance that it will get the users’ attention without annoying users. Also, we changed the three tabs design in early idea 2 to a much simpler design, which make it easier to configure both conditions and actions.

<div>{% include image.html name="breakpoint-experience-final.jpg" caption="Final Design" class="img-responsive" %}</div>

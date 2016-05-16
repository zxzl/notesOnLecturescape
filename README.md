# Notes on *Lecturescape*

### Main idea of interface

> We have user interaction logs at server, so let's exploit it (with transcript) in building interfaces that can leverage learning experience!

##### Key features

- 2D timeline

  > Navigation events: when user pauses, resumes, navigates

  - *Interaction peak* 
  - *Phantom Cursor* 
  - Personal watching trace visualisation

- Enhanced in-video search

  - Keyword search
    - Rank each occurence of keywords according to learners' watch count
    - Search timeline
  - Word cloud

- Visual Highlights

  - Interaction peak highlights
  - Pinning video frames
  - Personal bookmarks

##### Evaluation

- Research questions & findings
  - How do learners navigate lecture videos while performing seach or summarization
    - V. Neither positive nor adversal effect
    - P. Some *Lecutrescape* users preferred interaction peak to keyword search, but there was no meaningful performance gain
    - S. *Lecturescape* users finished task quickly
    - Meanwhile, *Lecutrescape* users felt they performed better
  - How do learners interpret interaction data
    - positive feedbacks
    - classroom-y, useful, easy to understand
    - 'peak' means...
      - confusing, important, complex
      - not matching with individual's familiarity with topic
  - Are those features useful and learnable?
    - 2 stage: *overview* & *focus*
    - With *lecturescape*, users jumped with more confidence
- Tasks
  - **V**isual search: finding a specfic point of lecture corresponding to visual cue
  - **P**roblem search: finding an answer to given problem
  - **S**ummarization: writing down main points

### Advantages / disadvantages of interface

##### pros

- additional informations that aid learning - a comment about word cloud
- linear lecture sequences can be re-organized using search feature

##### cons

1. Curious about 3rd design requirements - Is algorithm always picks readable 'slide'?
2. Peaks in 2d timeline might be misunderstood as importance of content
   - Especially if in production, users won't carefully read description about it

### Improvements

1. (In addition to personal timeline visualization) visualize pause history in order to warn learners who are easily distracted
2. (Regarding cons1) use OCR to check whether a frame consists readable contents(saw in one of references, but I cannot point it). Plus, giving more weight to slides with codes or formulas will be great in engineering MOOC
3. (Regarding cons2) design personal watching traces similar to rollercoaster timeline to help users understand the meaning of *peaks* better
4. (Less relevant with interaction log) Add functionality to group slides at highlight storyboard(like drag & drop when organazing icons at smartphone's homescreen). Some MOOC lecturers leave important contents to be hand-written, and do not include them in slides. Helping learners capture & organize 'full' slides might leads to less pause.
5. The meaning of 2d timeline is ambiguous because 'navigation events' are triggered in various circumstances. More data on navigation events will give us much confidence. For example, let's say we collect data about whether tab is hidden or not using [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) . Then we may assume taht if user paused a lecture and tab was still at foreground, stopped frame has something important meaning.

I implemented [prototype](https://zxzl.github.io/notesOnLecturescape/) of 1, 3.
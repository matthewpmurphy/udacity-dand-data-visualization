## Make Effective Data Visualization - On-Time Arrival Percentages for Domestic Airlines (2003-2017)
by Matthew Murphy

### Summary

This data visualization charts 5 different U.S. airlines' performance from 2003-2017 by showing the yearly average of on-time arrivals.

### Design

#### Exploratory Data Analysis and Cleaning With R

The dataset for this project came from [RITA](http://www.transtats.bts.gov/OT_Delay/ot_delaycause1.asp?display=download&pn=0&month=12&year=2017).  It includes all domestic flights from all carriers to and from major airports from June 2003 through December 2017.  I conducted exploratory data analysis with **Rstudio**, and is detailed in `./data/exploring_data.Rmd` and `./data/exploring_data.html`.  After reviewing the data, I hypothesized that there might be trends in airline performance (# arrivals delayed / # total arrivals) over the 10+ year period.  A line chart with multiple series is an excellent way to show these trends across different airlines.  I produced a plot to explore the initial data:

![Initial R Plot](./img/initial.png)

This attempt turned into a jumbled mess.  There were 28 airlines, and the line chart was cluttered and impossible to read.  I decided to only look at the top airlines, and only looked at those in the 85th percentile.  This led to me to five airlines, and a much easier to read chart  I generated two plots; a re-do of the first line chart, and another chart showing total annual flights:

![Do-over R Plot](./img/redo.png)

Now that I was down to 5 airlines, it was much easier to view the trends.  It shows how various airlines improved or worsened over time, and which ones were currently performing the best, as of 2017.  It also showed the general trends that all of the selected airlines experienced: a dip in performance from 2006 to 2008, individual peaks from 2010 to 2012, another drop from 2012 to 2014, and now an uptick from 2014 through 2017.

I went with performance trends for display as that was the more interesting question.  Who is the most reliable airline that will get me there on-time?

#### Data Visualization With Dimple

The visualization was implemented it with **D3.js** and **dimple.js**.  I thought line charts would work well with this data.  I had an X and Y axis with 5 sets of data points to overlay.  I'm not sure another type of chart would have been readable.  I started with an example and it was all pretty standard.  I put the legend in the top right and decided to start the Y axis at 70% instead of zero.  I felt that if the Y axis went from 0 to 100 it would be too difficult to read.  Otherwise, I did not add much styling.  The first  version can be viewed at `index-initial.html`, or below:

![Initial Visualizatino](./img/first_visualization.png)


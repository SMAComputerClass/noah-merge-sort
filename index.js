'use strict';

// Enter your js code Here
var rob = new Array;

var mom = new Array;

var c = new Array;

rob = [1, 2, 3, 4, 5, 6, 7, 8];

mom = [5, 6, 7, 8, 9, 10];

c = [];

var i;

var robPointer = 0;

var momPointer = 0;

  var finished = false;

  var counter = 0;

  while (finished == false)

      { if (rob[robPointer] < mom[momPointer])

  {
counter++;
c.push(rob[robPointer]);
robPointer++;
  }



else
    {
counter++;
c.push(mom[momPointer]);
momPointer++;
    }

if (robPointer == rob.length)

{
for (i = momPointer; i < mom.length; i++)

  {
c.push(mom[momPointer++]);
finished = true;

  }
}
if (momPointer == mom.length)
        {
            for (i = robPointer; i < rob.length; i++)
            {
            c.push(rob[robPointer++]);
            finished = true;
        }
    }
}





alert (c);
alert(counter + " operations");

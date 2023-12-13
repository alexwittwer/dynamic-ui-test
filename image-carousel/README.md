Architecting:

Carousel class, which has:
-id
-arrowleft
-arrowright
-array of images

functions:
-renderCurrentImage
// renders the current image in the screen
-clearImage
// clears currently displayed image
-selectNextImage
// selects the next image
-selectPrevImage
// selects previoius image
-setCurrentImage
// sets the next or previous image as current image, or dot indexed image
-renderDot
// renders a dot for each image
-selectCurrentDot
// correlates dot to current indexed image
-indexFromDot
// renders image from selected dot
-setCurrentDot
// sets current dot for styling
-setMaxWidth
// sets width to container width
-setMaxHeight
// sets height to container height
-constrainDimensions
// constrains both dimensions to fit
-timeNextImage
// automatically plays next image after set time
-stopTimer
// stops playing of carousel
-renderArrowLeft
-renderArrowRight

play
-clearImage
-renderCurrentImage
-setCurrentDot
-timeNextImage

stop
-stopTimer

next
-clearImage
-selectNextImage
-renderCurrentImage
-setCurrentDot

prev
-clearImage
-selectPrevImage
-renderCurrentImage
-setCurrentDot

indexed
-clearImage
-selectCurrentDot
-indexFromDot
-setCurrentImage
-renderCurrentImage

background
-setMaxHeight
-setMaxWidth
-constrainDimensions

static
-renderDot
-renderArrowLeft
-renderArrowRight
-renderCurrentImage
-timeNextImage

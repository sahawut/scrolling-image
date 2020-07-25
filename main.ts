input.onButtonPressed(Button.A, function () {
    trace2.scrollImage(1, 200)
    trace1.scrollImage(1, 200)
})
input.onButtonPressed(Button.B, function () {
    trace_3.scrollImage(1, 200)
    trace_4.scrollImage(1, 200)
    trac_5.scrollImage(1, 200)
})
let trac_5: Image = null
let trace_4: Image = null
let trace_3: Image = null
let trace2: Image = null
let trace1: Image = null
trace1 = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
trace2 = images.createImage(`
    # # # # #
    # . . . .
    # # # . .
    # . . . .
    # # # # #
    `)
trace_3 = images.createImage(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
trace_4 = images.createImage(`
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    `)
trac_5 = images.createImage(`
    . . # . .
    . # # # .
    # . # . #
    # # # # #
    . # # # .
    `)

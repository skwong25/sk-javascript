// << Review of Dashboard >>


// 1 - Date API
new Date() 
// gets a Date for the current time, returns Object:
Mon Jul 06 2020 14:11:57 GMT+0100 (British Summer Time)
Date.now() 
// gets the current time in milliseconds since 01 January, 1970 UTC.
// Use with arguments to return a Date object:
new Date(
    year : Number, 
    month : Number, 
        [date = 1 : Number, 
            [hours = 0 : Number,
                [minutes = 0 : Number, 
                    [seconds = 0 : Number,
                        [milliseconds = 0 : Number
    ]]]]]) : Date
// Eg: 
var d = new Date(2002, 5, 24, 18, 30);
console.log(d);
// Returns object:
Mon Jun 24 2002 18:30:00 GMT+0100 (British Summer Time)

// new Date().getFullYear returns the year
console.log(new Date(2002, 5, 24, 18, 30).getFullYear) // returns 2002; 

// 2: Material UI - Grid Component
// adapts to screen size & orientation for consistency
// Two types: container and item:
<Grid container spacing={3}>
    {/* Comment out like this! */}
    <Grid item  xs={12} md={8} lg={9}>
        <Paper>
            {/* <Component> */}
        </Paper>
    </Grid >
</Grid>


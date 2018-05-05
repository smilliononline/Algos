
function leapYear(year){
    if ((year % 4 == 0) && (year % 100 !=0) || (year % 400 == 0)){
    console.log(year, "is a leap year")}

    else {
        console.log(year, "not a leap year.")
    }
    

}

leapYear(1904);
leapYear(1905); //not a leap year
leapYear(1906); //not a leap year
leapYear(1907); //not a leap year
leapYear(1908);
leapYear(2016);
leapYear(2017); //not a leap year
leapYear(200); //should not be a leap year, divisible by 4 and 100

// list of leap year can be found here: https://www.miniwebtool.com/leap-years-list/?start_year=1900&end_year=2020 for testing.